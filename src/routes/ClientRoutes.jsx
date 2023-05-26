import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Redirect from '../helpers/Redirect';
import Client from '../pages/Client/Client';

const ClientRoutes = () => {
  return (
    <Routes>
        <Route path="/admin" element={<Client />} />
        {/* <Route path="/admin/:object" element={<ListFrames />} /> */}
        {/* <Route path="/admin/:object/:frame" element={<InfoFrame />} /> */}
        <Route path='*' element={<Redirect to='/admin' />} />
    </Routes>
  )
}

export default ClientRoutes;