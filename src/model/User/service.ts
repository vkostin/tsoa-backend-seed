import { User } from "./model";
import pino from "pino";

const logger = pino().child({c: "UserService"});

// A post request should not contain an id.
export interface UserCreationParams extends Pick<User,"username" | "name" | "email" | "passwordHash" | "roles"> {}

export interface UserUpdateParams extends Pick<User, "id" | "username" | "name" | "email" | "passwordHash" | "roles"> {}

export class UsersService {
    //, name?: string
    public get(id: String): User {
        logger.info("Not implemented get User " + id)
        return {} as unknown as User;
    }

    public getSome(offset?: number, limit?: number): User[] {
        logger.info("Not implemented get Users from " + offset + " limited by " + limit)
      return []
    }

    public create(userCreationParams: UserCreationParams): User {
        return {
            ...userCreationParams,
        } as unknown as User;;
    }

    update(id: String, requestBody: UserUpdateParams): User {
        logger.info("Not implemented get User " + id)
        return {
            ...requestBody,
        } as unknown as User;;
    }

    delete(id: String) {
        logger.info("Trying to delete User "+id)
        return ({})
    }
}
