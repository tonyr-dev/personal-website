import { Outlet } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

const routesConfig = [
  {
    path: '/',
    element: (
      <>
        {/* Header, sidebar and other fixed components go here */}
        <div className="blur" />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      // { path: "/items", element: <Items /> },
      // { path: "/item/:itemId", element: <ItemPage /> },
    ],
  },
];

export default routesConfig;
