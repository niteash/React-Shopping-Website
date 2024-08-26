import Home from "../pages/Home";
import About from "../pages/About";
import Mycart from "../pages/Mycart";
import ProductCard from "../components/ProductCard";
import Productdetails from "../pages/Productdetails";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";





const router = createBrowserRouter([

    {
        path : "/",
        element: <MainLayout />,
        errorElement : <ErrorPage />,
        children : [
            {
                path: "/",
                element: <Home />
        
            },
            {
                path: "about-us",
                element: <About />
            },
            {
                path: "My-cart",
                element: <Mycart />
            },
            {
                path: "Product-details/:productSlug",
                element: <Productdetails />
            }
        
        ]
    }

]);
  
export default router;