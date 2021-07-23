import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transition 1',
          amount: 1020,
          date: '2016-01-01',
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
