
import { Task } from '../models/task.model';


const tasks: Task[] = []; // Simulando una base de datos

export const getTasks = (): Task[] => tasks.filter(task => task.show);

// Obtener una tarea por su ID
export const getTaskById = (id: number): Task | undefined => tasks.find(task => task.id === id);

// Crear una nueva tarea
export const createTask = (task: Task): Task => {
    task.id = tasks.length + 1;
    tasks.push(task);
    return task;
};

export const updateTask = (id: number, updatedTask: Partial<Task>): Task | null => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return null;
    tasks[index] = { ...tasks[index], ...updatedTask };
    return tasks[index];
};

// Ocultar una tarea (no eliminarla)
export const hideTask = (id: number): boolean => {
    const task = tasks.find(task => task.id === id);
    if (!task) return false;
    task.show = false; // Cambiar la propiedad `show` a false
    return true;
};
  
// Mostrar una tarea (revertir ocultamiento)
export const showTask = (id: number): boolean => {
    const task = tasks.find(task => task.id === id);
    if (!task) return false;
    task.show = true; // Cambiar la propiedad `show` a true
    return true;
};

// Eliminar una tarea (opcional, si quieres eliminarla físicamente)
export const deleteTask = (id: number): boolean => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
};
