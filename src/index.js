import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {Store } from './app/Store'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './Component/Form';
import DisplayData from './Component/DisplayData';
import PdfViewer from './Component/PdfViewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/formData' element={<DisplayData/>}/>
      <Route path='/pdfviewer' element={<PdfViewer/>}/>
    </Routes>
    
    <App />
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

