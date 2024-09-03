import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext/GlobalProvider';

function PrivateRoute() {
 
  const {loginUser} = useGlobal();
  return (
    !loginUser ? <Navigate to="/login"/> : loginUser.role == "User" ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoute
