import { Request, Response } from 'express';
import * as taskService from '../services/task.service';

// Obtener todas las tareas
export const getTasks = (req: Request, res: Response) => {
    try {
        const tasks = taskService.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un problema al obtener las tareas.' });
    }
};

// Obtener tarea por ID
export const getTaskById = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const task = taskService.getTasksById(id);

        if (!task) {
            res.status(404).json({ message: 'Tarea no encontrada.' });
            return;
        }

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un problema al obtener la tarea.' });
    }
};

// Crear una tarea
export const createTask = (req: Request, res: Response) => {
    try {
        const task = req.body;
        const newTask = taskService.createTask(task);

        if (!newTask) {
            res.status(400).json({ message: 'No se pudo crear la tarea.' });
            return;
        }

        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un problema al crear la tarea.' });
    }
};

// Actualizar una tarea
export const updateTask = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const task = req.body;
        const updatedTask = taskService.updateTask(id, task);

        if (!updatedTask) {
            res.status(404).json({ message: 'Tarea no encontrada.' });
            return;
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un problema al actualizar la tarea.' });
    }
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
