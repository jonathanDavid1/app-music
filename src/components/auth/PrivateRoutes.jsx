import React from 'react';
import { useUserInfo } from '../../store/userInfo';
import { Navigate, Outlet } from 'react-router-dom';
import PrincipalLayout from '../layout/PrincipalLayout';


const PrivateRoutes = () => {
    const user = useUserInfo((state) => state.user);
    if (user.token) {
        return (
        <PrincipalLayout>
            <Outlet />
        </PrincipalLayout>
        )
    }else {
        return <Navigate to={"/auth/login"} />
    }
}

export default PrivateRoutes;
