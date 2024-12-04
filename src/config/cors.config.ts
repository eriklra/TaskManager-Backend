import { Request, Response, NextFunction } from 'express';

export const corsConfig = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir todos los orígenes
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); // Métodos permitidos
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization'); // Encabezados permitidos
  next();
};