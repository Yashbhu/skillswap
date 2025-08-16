import Admin from "./pages/Admin";
import User from "./pages/User";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { 
        path: "email", 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DetailsForm />
          </Suspense>
        ) 
      },
      { 
        path: "onboarding", 
        element: <Onboarding />,
        children: [
          { path: "admin", element: <Admin /> },
          { path: "user", element: <User /> }
        ]
      }
    ]
  }
];
