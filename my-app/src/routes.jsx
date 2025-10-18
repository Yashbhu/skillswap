import Layout from "./pages/Layout";
import About from "./pages/About";  
import Pricing from "./pages/Pricing";
import Home from "./pages/Home"; 
import { Suspense, lazy } from "react";
import Onboarding from "./pages/Onboarding";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Meet from "./pages/meet";
import Dashboard from "./pages/Dashboard";
import Chatsection from "./pages/Chatsection";

const DetailsForm = lazy(()=>import("./pages/Email"));

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { 
        path:"email", 
        element:(
          <Suspense fallback={<div>Loading...</div>}>
            <DetailsForm />
          </Suspense>
        ) 
      },
      {
  path: "onboarding",
  element: <Onboarding />
},
{
  path: "onboarding/admin",
  element: <Admin />
},
{
  path: "onboarding/user",
  element: <User />
},
{
  path: "onboarding/admin/meet",
  element: <Meet/>
},
{
  path:"onboarding/admin/dashboard",
  element:<Dashboard/>
},
{
  path: "chat",
  element: <Chatsection />
}

    ]
  }
];
