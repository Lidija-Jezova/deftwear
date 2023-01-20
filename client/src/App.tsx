import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Products from "./pages/Products";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "products/:id",
                    element: <Products/>
                },
                {
                    path: "product/:id",
                    element: <Product/>
                }
            ]
        },
    ]);

    return (
        <RouterProvider
            router={router}
        />
    );
}

export default App;
