import { Project } from "@prisma/client";
import { useProject} from "@/context/ProjectContext";
import React from "react";
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

function ProjectCard({ project }: {project: Project}) {
    const { deleteProject } = useProject()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div key={project.id} className="bg-slate-400 p-4 my-2 flex
        justify-between" style={{width: '100%'}} >
          <div>
          <h1>{project.name}</h1>
          </div>
          <div className="flex gap-x-2">
            <button onClick={handleClickOpen} className="bg-blue-600 text-white p-2 rounded-md">View tasks</button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{"Tareas del proyecto"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Aquí puedes poner la lista de tareas del proyecto. Por ejemplo:
                </DialogContentText>
                <ul>
                  <li>Tarea 1</li>
                  <li>Tarea 2</li>
                  <li>Tarea 3</li>
                  // Asegúrate de reemplazar esto con tus datos reales
                </ul>
              </DialogContent>
            </Dialog>
            <button onClick={() => { deleteProject(project.id)}} className="bg-red-600 text-white p-2 rounded-md">Delete</button>
          </div>
        </div>
    )
}

export default ProjectCard