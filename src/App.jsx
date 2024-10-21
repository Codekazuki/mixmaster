import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Error,
  About,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
