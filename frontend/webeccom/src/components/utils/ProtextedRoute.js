import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

const ProtextedRoute = () => {
    const token = localStorage.getItem('token');

    return token ? <Outlet /> : <Navigate to="/" />;
}


export default ProtextedRoute



