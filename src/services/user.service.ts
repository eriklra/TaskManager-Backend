import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../repositories/user.repository';
import { envs } from '../config/envs.config';


const JWT_SECRET = envs.JWT_SECRET;
const JWT_EXPIRES_IN = envs.JWT_EXPIRES_IN;

export const registerUser = async (username: string, password: string) => {
    const existingUser = UserModel.findUser(username);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    UserModel.addUser(user);
    return user;
};

export const authenticateUser = async (username: string, password: string) => {
    const user = UserModel.findUser(username);
    console.log({user})
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { user, token };
};