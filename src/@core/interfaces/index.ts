// Interfaces
import { ReactNode } from 'react';

export interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
}

export interface IRoutes {
    element: ReactNode
    path: string;
}