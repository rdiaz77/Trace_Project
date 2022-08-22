import React from 'react';
import ReactDOM from 'react-dom/client';
import { CurrentUserProvider } from './context/CurrentUser';
import {QueryClient, QueryClientProvider} from 'react-query'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
require('dotenv').config();

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>

      <QueryClientProvider client = {queryClient}>

        <BrowserRouter>
            <App />
        </BrowserRouter>

      </QueryClientProvider>

    </CurrentUserProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
