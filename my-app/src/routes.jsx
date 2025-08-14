import Layout from "./pages/Layout";
import About from "./pages/About";  
import Pricing from "./pages/Pricing";
import Home from "./pages/Home"; 
import { Suspense,lazy } from "react";
import Onboarding from "./pages/Onboarding";

const DetailsForm = lazy(()=>import("./pages/Email"));

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path:"email", element:(
        <Suspense fallback={<div>Loading...</div>}>
          <DetailsForm />
        </Suspense>
      ) },
      {path:"onboarding", element: <Onboarding/>},
    ]
  }
];
