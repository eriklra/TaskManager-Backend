

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { envs } from '../config/envs.config'; envs.JWT_SECRET 

const JWT_SECRET = 'secret';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return;
    } 

    jwt.verify(token, JWT_SECRET, (err: any) => {

        if (err) { 
            res.status(403).json({ message: 'Unauthorized' }); 
            return;
        }
        
        next();
    });
};