import Layout from "./pages/Layout";
import About from "./pages/About";  
import Pricing from "./pages/Pricing";
import Home from "./pages/Home"; 

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> }
    ]
  }
];
