"use client"
import ProjectForm from "@/components/ProjectForm";
import { useContext, useEffect } from "react";
import { ProjectContext } from "@/context/ProjectContext";
import ProjectCard from "@/components/ProjectCard";
import ProjectDropdown from "@/components/ProjectDropdown";

function HomePage(){

  const {projects, loadProjects} = useContext(ProjectContext)
  console.log(projects)

  useEffect(() => {
    loadProjects()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div>

      <h1 style={{ color: 'white', fontSize: '2em', fontWeight: 'bold' }}>Project registration</h1>
      <ProjectForm />
       <ProjectDropdown />
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}>
        </ProjectCard>

      ))}
      </div>
     
    </div>

    
  )
}

export default HomePage;