import { Request, Response } from 'express';
import * as taskService from '../services/task.service';

// Obtener todas las tareas
export const getTasks = (req: Request, res: Response) => {
    const tasks = taskService.getTasks();
    res.status(200).json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const task = taskService.getTasksById(id);
    res.status(200).json(task);
};

// Crear una tarea
export const createTask = (req: Request, res: Response) => {
    const task = req.body;
    const newTask = taskService.createTask(task);
    res.status(201).json(newTask);
};

// Ocultar una tarea
export const hideTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = taskService.hideTask(id);
    if (!result) {
        res.status(404).json({ message: 'Task not found' });
        return;
    }
    res.status(200).json({ message: 'Task hidden successfully' });
};

// Mostrar una tarea
export const showTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = taskService.showTask(id);
    if (!result) {
        res.status(404).json({ message: 'Task not found' });
        return;
    }
    res.status(200).json({ message: 'Task shown successfully' });
};

// Eliminar una tarea (opcional)
export const deleteTask = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = taskService.deleteTask(id);
    if (!result) {
        res.status(404).json({ message: 'Task not found' });
        return;
    }
    res.status(200).json({ message: 'Task deleted successfully' });
};
