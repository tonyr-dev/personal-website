import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import routesConfig from '../routesConfig';

/**
 * Helper function to return an element to render for testing by passing in a given route.
 * This is required for react-router due to dependency on RouterProvider with dataAPI hooks.
 * @param route - i.g: '/path'
 */
function getRouteElement(route: string) {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [route],
  });

  return <RouterProvider router={router} />;
}

export default getRouteElement;
