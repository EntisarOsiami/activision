import { createBrowserRouter, RouterProvider } from "react-router";
import About from "../Pages/About";
import Careers from "../Pages/Careers";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Support from "../Pages/Support";



function AppRoutes() {
    const appRouter = createBrowserRouter([    
        { 
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                { 
                    path: "about",
                    element: <About />
                },
                {
                    path: "careers",
                    element: <Careers />
                },
                {
                    path: "support",
                    element: <Support />
                }
            ]
                
        }])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default AppRoutes