import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { store } from './redux/store.js';
import './index.css';
import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './shared/components/styles/Theme.styled.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/goit-course-project-task-pro'>
        {/* <ThemeProvider theme={theme}> */}
        <App />
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
