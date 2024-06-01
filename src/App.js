import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import ProductDetails from "./pages/ProductDetails";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
  ]);
  return (
    <div className="overflow-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
