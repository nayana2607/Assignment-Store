import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import MealGenerator from "./pages/MealGenerator";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Meals from "./pages/Meals";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/meals/:category",
      element: <Meals />,
    },
    {
      path: "/generator",
      element: <MealGenerator />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
