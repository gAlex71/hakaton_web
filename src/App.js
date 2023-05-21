// import styles from './App.module.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import InspectorMain from './pages/Employee/Main/InspectorMain';
import Admin from './pages/Admin/Admin';
import Login from './pages/Employee/Login/Login';
import Frame from './pages/Employee/Frame/Frame';
import Apartments from './pages/Employee/Apartments/Apartments';
import Instruction from './pages/Employee/Instruction/Instruction';
import CameraPage from './pages/Employee/CameraPage/CameraPage';
import Account from './pages/Employee/Account/Account';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/employee" element={<InspectorMain />}/>
      <Route path="/employee/login" element={<Login />}/>
      <Route path="/employee/:id" element={<Frame />}/>
      <Route path="/employee/:id/:frame" element={<Apartments />}/>
      <Route path="/empoloyee/:id/:frame/:apartment" element={<Instruction />}/>
      <Route path="/employee/camera" element={<CameraPage />}/>
      <Route path="/employee/account" element={<Account />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}

export default App;
