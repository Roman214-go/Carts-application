import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';
import { Providers } from './app/providers';

import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
