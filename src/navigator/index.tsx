// Routes
import { lazy } from 'react';

import { IRoutes } from '@core/interfaces';

import Home from 'app/home'; // Normal page loading
const Settings = lazy(() => import('app/settings')); // Lazy loading

export const routes: IRoutes[] = [
    {
        element: <Home />,
        path: '/',
    },
    {
        element: <Settings />,
        path: '/settings',
    },
];