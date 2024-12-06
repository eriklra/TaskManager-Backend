import * as taskRepository from '../repositories/task.repository';
import { Task } from '../interfaces/task.interface';

// Obtener todas las tareas
export const getTasks = (): Task[] => {
  return taskRepository.getTasks();
};

export const getTasksById = (id: number): Task | null => {
    const task = taskRepository.getTaskById(id);
    return task ? task : null;
};

// Crear una tarea
export const createTask = (task: Task): Task => {
  return taskRepository.createTask(task);
};

export const updateTask = (id: number, task: Task): Task => {
    const updatedTask = taskRepository.updateTask(id, task);
    if (!updatedTask) {
        throw new Error('Tarea no encontrada o no pudo ser actualizada');
    }
    return updatedTask;
};

// Ocultar una tarea
export const hideTask = (id: number): boolean => {
  return taskRepository.hideTask(id);
};

// Mostrar una tarea
export const showTask = (id: number): boolean => {
  return taskRepository.showTask(id);
};

// Eliminar una tarea
export const deleteTask = (id: number): boolean => {
  return taskRepository.deleteTask(id);
};