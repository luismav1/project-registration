import React, { useContext } from "react";

import { ProjectContext } from "@/context/ProjectContext";
function ProjectDropdown() {

    const { projects, loadProjects } = useContext(ProjectContext)
    return (
        <form>
            <input
                type="text"
                name="title"
                autoFocus
                placeholder="Task"
                className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring focus:ring-blue-600 my-2"


            />
            <div>
                <select className="px-4 py-2 mb-2 border rounded-md w-full">
                    {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                            {project.name}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="w-full px-40 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Add task
            </button>
        </form>
    );
}

export default ProjectDropdown;