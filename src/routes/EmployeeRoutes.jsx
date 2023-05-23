import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Redirect from '../helpers/Redirect';
import InspectorMain from '../pages/Employee/Main/InspectorMain';
import Frame from '../pages/Employee/Frame/Frame';
import Apartments from '../pages/Employee/Apartments/Apartments';
import CameraPage from '../pages/Employee/CameraPage/CameraPage';
import Account from '../pages/Employee/Account/Account';

const EmployeeRoutes = () => {
  return (
    <Routes>
        <Route path='/employee' element={<InspectorMain />}/>
        <Route path="/employee/:object" element={<Frame />}/>
        <Route path="/employee/:object/:frame" element={<Apartments />}/>
        <Route path="/employee/:object/:frame/:apartament/camera" element={<CameraPage />}/>
        <Route path="/employee/account" element={<Account />} />
        <Route path='*' element={<Redirect to='/employee' />} />
    </Routes>
  )
};

export default EmployeeRoutes;