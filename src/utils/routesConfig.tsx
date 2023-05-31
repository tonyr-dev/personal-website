import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import ErrorPage from '../pages/Error';
import Hero from '../pages/Hero';
import Background from '../components/Background/Background';

const routesConfig = [
  {
    path: '/',
    element: (
      <>
        {/* Header, sidebar and other fixed components go here */}
        <Background>
          <Outlet />
        </Background>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Hero /> },
      // { path: "/items", element: <Items /> },
      // { path: "/item/:itemId", element: <ItemPage /> },
    ],
  },
];

export default routesConfig;
