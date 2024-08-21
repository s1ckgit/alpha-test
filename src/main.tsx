import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Provider as StateProvider } from 'react-redux';

import { store } from './store/store.ts';

import Root from './routes/root.tsx';
import CardDetailsPage from './routes/card-details-page.tsx';

import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/card/:cardId',
    element: <CardDetailsPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateProvider store={store}>
      <RouterProvider router={router} />
    </StateProvider>
  </StrictMode>,
);
