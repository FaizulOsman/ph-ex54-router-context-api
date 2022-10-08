import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ErrorDetails from "./components/ErrorDetails/ErrorDetails";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import GrandParents from "./components/PropsDrill/GrandParents";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorDetails />,
      children: [
        {
          path: "/",
          loader: () => fetch("tshirts.json"),
          element: <Home></Home>,
        },
        { path: "/orders", element: <Orders></Orders> },
        { path: "/about", element: <About></About> },
        { path: "/grandparents", element: <GrandParents></GrandParents> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
