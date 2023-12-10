import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import AuthProvider from 'context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// import authContext from 'context/authContext';

// console.log(authContext);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <authContext.Provider value={{ name: 'Mango' }}>
//       {/* усі компоненти всередині Арр отримують доступ до value */}
//       <App />
//     </authContext.Provider>
//   </React.StrictMode>
// );
