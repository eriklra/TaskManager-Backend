import { User } from "../models/user.model";



const users: User[] = [
    {username: 'testuser@gmail.com', password: '$2a$10$nRAvuzelkDcjR2I2WR9xlO4Dsrn.BIaBG10IAFdHIFocx8palVtha'}, //password: testpass
];

export const UserModel = {
    users,
    findUser: (username: string) => users.find(user => user.username === username),
    addUser: (user: User) => users.push(user),
};