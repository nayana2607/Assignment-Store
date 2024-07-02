import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MealGenerator from "./pages/MealGenerator";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Meals from "./pages/Meals";
import FavoritesContextProvider from "./store/meal-context";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./pages/About"));
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
      element: (
        <Suspense fallback={<h1>Loading....</h1>}>
          <About />
        </Suspense>
      ),
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
      <FavoritesContextProvider>
        <RouterProvider router={appRouter} />
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
