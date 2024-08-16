export enum TaskStatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class Task{
    id: string
    title: string
    description: string
    status: TaskStatus
}

//aca en la entidad se puede generar la tabla por medio de ORM como Typeorm
