// Protected Route
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RCommonSlice } from 'store/reducers/commonSlice';

interface ProtectedRouteProps {
    children: ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {

    const { isAuthenticated } = useSelector((state: RCommonSlice) => state.common);

    return (
        <>
            {
                isAuthenticated ? children : <Navigate to="/" />
            }
        </>
    )
}
