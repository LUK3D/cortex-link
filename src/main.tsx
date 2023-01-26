import React from 'react'
import ReactDOM from 'react-dom/client'
import './translations';



import App from './App'
import '@inovua/reactdatagrid-community/index.css'
import "@ant-design/flowchart/dist/index.css";
import 'virtual:windi.css'
import './index.css'






ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
