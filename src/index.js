import React from 'react';
import App from './App';
import './index.css'

// React V18
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// import ReactDOM from 'react-dom';
// ReactDOM.render(<App/>, document.querySelector("#root"));