

import { Request, Response } from 'express';
import { registerUser, authenticateUser } from '../services/user.service';

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await registerUser(username, password);
        res.status(201).json({ user });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        console.log({
            username,
            password
        })
        const { user, token } = await authenticateUser(username, password);
        res.json({ user, token });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
};