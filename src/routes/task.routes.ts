import { Router } from 'express';
import * as taskController from '../controllers/task.controller';

const router = Router();

// Rutas para las tareas
router.get('/', taskController.getTasks);  // Obtener todas las tareas
router.get('/:id', taskController.getTaskById);  // Obtener una tarea por su ID
router.post('/', taskController.createTask);  // Crear una tarea
router.put('/:id/hide', taskController.hideTask);  // Ocultar una tarea
router.put('/:id/show', taskController.showTask);  // Mostrar una tarea
router.delete('/:id', taskController.deleteTask);  // Eliminar una tarea

export default router;