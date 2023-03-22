import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import LoginPage from './components/pages/login';
import ReqApi from './components/Login/API/ReqApi';
import PostApi from './components/Login/API/PostApi'
import AdminFuncionalidades from './components/admin/AdminFuncionalidades';
import AdminSobre from './components/admin/AdminSobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<ReqApi />} />
        <Route path='/post' element={<PostApi />} />
        <Route path='/admin/funcionalidades' element={<AdminFuncionalidades />} />
        <Route path='/admin/sobre' element={<AdminSobre />} />
      </Routes>
    </Router>
  );
}

export default App;