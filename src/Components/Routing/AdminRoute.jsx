import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext/GlobalProvider';

function AdminRoute() {
 
  const {loginUser} = useGlobal();
  return (
    !loginUser ? <Navigate to="/login"/> : loginUser.role == "Admin" ? <Outlet/> : <Navigate to="/"/>
  )
}

export default AdminRoute