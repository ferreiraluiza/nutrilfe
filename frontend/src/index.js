import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './landing.jsx';
import Início from './pages/início/inicio.jsx';
import Login from './pages/login/login.jsx';
import Financeiro from './pages/financeiro/financeiro.jsx';
import Agenda from './pages/agenda/agenda.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<App />}/>
        <Route path='/pages/login/login.jsx' element = {<Login />}/>
        <Route path='/pages/início/inicio.jsx' element = {<Início />}/>
        <Route path='/pages/finaceiro/finaceiro.jsx' element = {<Financeiro />}/>
        <Route path='/pages/agenda/agenda.jsx' element = {<Agenda />}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

