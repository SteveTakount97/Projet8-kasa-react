import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Header from "./header";
import Erreur404 from "../pages/erreur404";

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Erreur404/>,
    children: [
        {
          path: 'about',
          element: <About/>
        },
        {
          path: '',
          element: <Home/>
        }

    ]
  },
 
])

function Root () {
  return <>
       <Header/>
       <div className="container">
         <Outlet />
       </div>
  </>
}

function App (){
  return <RouterProvider router={router}/>
}

export default App;