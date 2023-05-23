import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Redirect from '../helpers/Redirect';
import Admin from '../pages/Admin/Admin';

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path='*' element={<Redirect to='/admin' />} />
    </Routes>
  )
}

export default AdminRoutes;