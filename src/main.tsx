import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';
import { ErrorBoundary } from './pages/ErrorBoundary';
import { Providers } from './app/providers';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <StrictMode>
      <Providers>
        <GlobalStyles />
        <App />
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
        />
      </Providers>
    </StrictMode>
  </ErrorBoundary>,
);
