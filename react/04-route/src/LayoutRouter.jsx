import { RouterProvider, createBrowserRouter} from 'react-router-dom'

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
  return <RouterProvider router={customRouter} />
}

export default LayoutRouter
