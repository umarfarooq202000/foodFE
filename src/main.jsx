import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  Modal  from 'react-modal';
import { MyContextProvider } from './Context/MyContext.jsx';
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';

Modal.setAppElement(document.getElementById('root')); // Set app element before rendering

const theme = createTheme({
    palette: {
      primary: {
       main:'#ff5722',
       success:'#4CAF50'
      },
      
    },
  });
  

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      
        <MyContextProvider>
        <ThemeProvider theme={theme}>
       
         <App />
          
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
         </ThemeProvider>,
       </MyContextProvider>
       
    </React.StrictMode>
  
)
