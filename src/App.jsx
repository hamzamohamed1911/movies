
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './global.css'
import RootLayout from './_root/pages/RootLayout'
import Home from './_root/pages/Home'
import Movies from './_root/pages/Movies'
import SideLayout from './_root/pages/SideLayout'
import Tv from './_root/pages/Tv'
import About from './_root/pages/About'
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {index:true ,element:<Home/> },
       {path:'/movies' ,element:<SideLayout/>,
        children: [{
        index:true ,
        element:<Movies/>}]},
        {path:'/tv' ,element:<SideLayout/>,
        children: [{
        index:true ,
        element:<Tv/>}]},
        {path:'/about' ,element:<About/> },
    
    ]
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
