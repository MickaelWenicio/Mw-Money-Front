import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import { createServer, Model } from 'miragejs';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'freelancer',
          type: 'income',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-12 21:22:00')
        },
        {
          id: 2,
          title: 'aluguel',
          type: 'outcome',
          category: 'casa',
          amount: 1000,
          createdAt: new Date('2022-03-11 11:21:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'
    this.get('/transactions',()=>{
      return this.schema.all('transaction')
    })
    
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);