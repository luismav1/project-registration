import { Project } from "@prisma/client";
import { useProject} from "@/context/ProjectContext";

function ProjectCard({ project }: {project: Project}) {
    const { deleteProject } = useProject()

    return (
        <div key={project.id} className="bg-slate-400 p-4 my-2 flex
        justify-between" style={{width: '100%'}} >
          <div>
          <h1>{project.name}</h1>
          </div>
          <div className="flex gap-x-2">
            <button className="bg-blue-600 text-white p-2 rounded-md">View tasks</button>
            <button onClick={() => { deleteProject(project.id)}} className="bg-red-600 text-white p-2 rounded-md">Delete</button>
          </div>
        </div>
    )
}

export default ProjectCard