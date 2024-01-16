import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function SimpleRouter() {

    // error route - showing in all the rest cases
    const ErrorRoute = () => {
        return <div> No route found</div>
    };

    const customRouter = createBrowserRouter(
        [
            {
                path: "/say-hello",
                element: <div style={{color: "green", fontWeight: "bold"}}>Hello</div>,
            },
            {
                errorElement: <ErrorRoute />
            },
            {
                path: "/say-goodbye",
                element: <div style={{color: "red", fontWeight: "bold"}}>Goodbye</div>,
            }
        ]
    );
  return <RouterProvider router={customRouter} />
}

export default SimpleRouter
