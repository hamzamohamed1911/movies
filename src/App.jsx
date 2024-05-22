
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './global.css'
import RootLayout from './_root/pages/RootLayout'
import Home from './_root/pages/Home'
import SideLayout from './_root/pages/SideLayout'
import Tv from './_root/pages/Tv'
import Movie from './_root/pages/Movie'

import About from './_root/pages/About'
import Discover from './_root/pages/Discover'
import AuthLayout from './_auth/AuthLayout'
import SignIn from './_auth/forms/SignIn'
import SignUp from './_auth/forms/SignUp'
import TvDetails from './_root/pages/TvDetails'
import MovieDetails from './_root/pages/MovieDetails'
const router = createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    children: [
      { index:true, element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: '',
        element: <SideLayout />,
        children: [
          { path: 'discover', element: <Discover /> }, 
          { path: 'tv', element: <Tv /> },
          {path:"/tv/:tvId" , element:<TvDetails/>},
       
          { path: 'movie', element: <Movie /> }, 
          { path:"/movie/:movieId" , element:<MovieDetails/>},

          
        ],
      },
    ],
  },{
    path:"",
    element:<AuthLayout/>,
    children: [
      { path: 'signin', element: <SignIn /> }, 
      { path: 'signup', element: <SignUp /> },
     
      
    ],

  }



])

function App() {

  return (
    <>
 <main >
  
 <RouterProvider router={router}/>

 </main>
    </>
  )
}

export default App
