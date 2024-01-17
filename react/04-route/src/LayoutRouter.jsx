import { RouterProvider, createBrowserRouter, Link, NavLink, useNavigate } from 'react-router-dom'

import { Outlet } from 'react-router-dom' // Outlet 
function Background(){
    return <>
        <div>header</div>
        <hr />
        <Outlet />
        <hr/>
        <div>footer</div>
    </>
}


function LayoutRouter() {
    
    function gotoHello() {
        console.log("goto")
    }

    const customRouter = createBrowserRouter(
        [
            {
                path: "/",
                element: <Background />,
                children: [
                    {
                        path: "/say-hello",
                        element: <div style={{color: "green", fontWeight: "bold"}}>Hello</div>,
                    },
                    // do not use it !!!
                    //                    {
                    //                     errorElement: <ErrorRoute />
                    //                    },
                    {
                        path: "/say-goodbye",
                        element: <div style={{color: "red", fontWeight: "bold"}}>Goodbye</div>,
                    }
                ]
            }
        ]
    );
  return <>
    <RouterProvider router={customRouter} />  
    {/** anchor element without refreshing the page 
     <Link to="/say-hello">say-hello</Link>
    */}
  </>
}

export default LayoutRouter
