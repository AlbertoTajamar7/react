import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Saludo from './components/Micomponent'
import DoblarNumeros from './component/DoblasrNumero';

const root = ReactDOM.createRoot(document.getElementById('root'));
//mandamos propiedades mediante props
//En este caso "nombre" es un atributo que se lo pasamos al componente
//<Saludo nombre="Alberto" edad ="24"/>
//<Saludo nombre="Ruben" edad ="28"/>
root.render(
  <React.StrictMode>
     <DoblarNumeros/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
