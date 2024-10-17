import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Error,
  About,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
  {
    path: "/landing",
    element: <Landing />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
