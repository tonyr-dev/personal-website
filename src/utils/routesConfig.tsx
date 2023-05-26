import { Outlet } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';

const routesConfig = [
  {
    path: '/',
    element: (
      <>
        {/* Header, sidebar and other fixed components go here */}
        <div className="flex justify-center items-center w-screen h-screen backdrop-blur-lg">
          <main className=" w-[50rem] h-5/6 bg-slate-800 rounded-xl drop-shadow-lg bg-gradient-to-tr from-slate-950 to-slate-800 bg-gradient-to-r">
            <Outlet />
          </main>
        </div>
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
