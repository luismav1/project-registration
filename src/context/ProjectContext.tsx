"use client";
import { CreateProject } from '@/interfaces/Project';
import { Project } from '@prisma/client';
import { createContext, useState, useContext } from 'react'
export const ProjectContext = createContext<{
    projects: any[];
    loadProjects: () => Promise<void>;
    createProject: (project: CreateProject) => Promise<void>;
    deleteProject: (id: number) => Promise<void>;
}
>({
    projects: [],
    loadProjects: async () => { },
    createProject: async (project: CreateProject) => { },
    deleteProject: async (id: number) => { }
});

export const useProject = () => {
    const context = useContext(ProjectContext)
    if (!context) {
        throw new Error('useProject must be used within a ProjectProvider')
    }
    return context
};

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [projects, setProjects] = useState<Project[]>([])

    async function loadProjects() {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
    };

    async function createProject(project: CreateProject){
        const res = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
           
        });
        
        const newProject = await res.json();
        setProjects([...projects, newProject])
    };

    
async function deleteProject(id: number){
    
    const res = await fetch('http://localhost:3000/api/projects/' + id, {
       method: 'DELETE',
    });

    const data = await res.json()
    setProjects(projects.filter((project) => project.id !== id))
};
    return <ProjectContext.Provider value={{ projects, loadProjects, createProject, deleteProject }}>{children}
    </ProjectContext.Provider>
};