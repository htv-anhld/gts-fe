export interface IUserParams {
    email: string;
    password: string;
}

export interface IUser {
    id?: any | null;
    username?: string | null;
    email?: string;
    password?: string;
    roles?: Array<string>;
}
