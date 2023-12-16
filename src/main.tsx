import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import { createServer } from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api'
    this.get('/transactions',()=>{
      return [
        {
          id: 1
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);