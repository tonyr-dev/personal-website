import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import ErrorPage from '../pages/Error';
import Hero from '../pages/Hero';

const routesConfig = [
  {
    path: '/',
    element: (
      <>
        {/* Header, sidebar and other fixed components go here */}
        <div className="flex justify-center items-center w-screen h-screen backdrop-blur-lg">
          <motion.div
            initial={{ height: '14%' }}
            animate={{ height: '70%' }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <main className="h-5/6 bg-slate-800 rounded-xl drop-shadow-lg bg-gradient-to-tr from-slate-950 to-slate-800 bg-gradient-to-r">
              <Outlet />
            </main>
          </motion.div>
        </div>
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
