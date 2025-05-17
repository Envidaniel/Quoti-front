
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Landing from './page/Landing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CreateAuthor from './page/author/CreateAuthor';
import GetAllAuthor from './page/author/GetAllAuthor';
import GetAuthorById from './page/author/GetAuthorById';
import UpdateAuthor from './page/author/UpdateAuthor';




const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/CreateAuthor',
    element: <CreateAuthor/>,
  },
  {
    path: '/getallauthor',
    element: <GetAllAuthor/>,
  },
  {
    path : '/getallauthor/:id',
    element : <GetAuthorById/>
  },
  {
  path: 'author/:id/update',
  element: <UpdateAuthor/>
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} /> 
      <Toaster/>
    </QueryClientProvider>
  </React.StrictMode>
);
