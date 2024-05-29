export interface Project {
    id: number
    name: string;
}

export type CreateProject = Omit <Project, 'id'>;