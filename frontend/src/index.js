import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './landing.jsx';
import Início from './pages/início/inicio.jsx';
import Login from './compoents/login/login.jsx';
import Header from './compoents/header/header.jsx';
import Financeiro from './pages/financeiro/financeiro.jsx';
import Agenda from './pages/agenda/agenda.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Header />
        <Route path='/' element = {<App />}/>
        <Route path='./login' element = {<Login />}/>
        <Route path='./início' element = {<Início />}/>
        <Route path='./finaceiro' element = {<Financeiro />}/>
        <Route path='./agenda' element = {<Agenda />}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

