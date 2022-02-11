import {Types} from 'mongoose';

export interface User {
    id: Types.ObjectId,
    username: string,
    name: string,
    email: string,
    passwordHash: string,
    roles: string[],
}
