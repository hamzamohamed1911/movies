
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './global.css'
import RootLayout from './_root/pages/RootLayout'
import Home from './_root/pages/Home'
import Movies from './_root/pages/Movies'
import SideLayout from './_root/pages/SideLayout'
import Tv from './_root/pages/Tv'
import About from './_root/pages/About'
import Discover from './_root/pages/Discover'
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
