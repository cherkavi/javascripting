import { useState } from 'react'
import { RouterProvider, createBrowserRouter, Link, NavLink, useNavigate } from 'react-router-dom'

function Navigation() {

    // error route - showing in all the rest cases
    const ErrorRoute = () => {
        return <div> No route found</div>
    };
    // const navigator = useNavigate()
    // navigator("/say-hello");

    const customRouter = createBrowserRouter(
        [
            {
                path: "/say-hello",
                element: <div style={{color: "green", fontWeight: "bold"}}>Hello <NavLink to="/say-goodbye">say-goodbye</NavLink> </div>,
            },
            {
                errorElement: <ErrorRoute />
            },
            {
                path: "/say-goodbye",
                element: <div style={{color: "red", fontWeight: "bold"}}>Goodbye <Link to="/say-hello">say-hello</Link> </div>,
            }
        ]
    );
  return <>
    <RouterProvider router={customRouter} />
    {/* here the links is not working 
    <NavLink to="/say-hello">say-hello</NavLink>
    */}
    </>
}

export default Navigation
