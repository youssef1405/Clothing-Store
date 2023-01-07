import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
};

render();
store.subscribe(render);
