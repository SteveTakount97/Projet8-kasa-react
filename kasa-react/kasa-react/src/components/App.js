import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Header from "./header";
import Erreur404 from "../pages/erreur404";
import '../style/App.scss'
import Logement from "../pages/logement";
import Footer from "./footer";

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
        },
        {
          path: '/logement/:id',
          element: <Logement />
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
       <Footer />
  </>
}

function App (){
  return <RouterProvider router={router}/>
}

export default App;