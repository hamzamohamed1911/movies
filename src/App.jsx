
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './global.css'
import RootLayout from './_root/pages/RootLayout'
import Home from './_root/pages/Home'
import Movies from './_root/pages/Movies'
import SideLayout from './_root/pages/SideLayout'
import Tv from './_root/pages/Tv'
import About from './_root/pages/About'
import Discover from './_root/pages/Discover'
import AuthLayout from './_auth/AuthLayout'
import SignIn from './_auth/forms/SignIn'
import SignUp from './_auth/forms/SignUp'
const router = createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: '',
        element: <SideLayout />,
        children: [
          { path: 'discover', element: <Discover /> }, 
          { path: 'tv', element: <Tv /> },
          { path: 'movies', element: <Movies /> }, 
          
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
