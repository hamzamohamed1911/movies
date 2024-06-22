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
import ErrorPage from './_root/components/Error'
import People from './_root/pages/People'
import PeopleDetails from './_root/pages/PeopleDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MovieTrailerPage , {loader as MovieTrailerLoader } from './_root/pages/MovieTrailerLoader'
import TvTrailerPage,  {loader as tvTrailerLoader }   from './_root/pages/TvTrailerLoader'
import Profile from './_root/pages/Profile';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthGuard = ({ children }) => {
  const uid = Cookies.get('uid');

  if (!uid) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};




const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children: [

      { index:true, element: <Home /> },
      { path: 'about', element: <About /> },

      {
        path: '',
        element: <SideLayout />,
        children: [
          { path: 'discover', element: <Discover /> }, 
          { path: 'tv', element: <Tv /> },
          { path:"/tv/:tvId" , element:<TvDetails/>},
          { path: '/tv/trailer/:tvtrailerId', element: (
            <AuthGuard> 
             <TvTrailerPage/>
            </AuthGuard>
          ) ,loader:tvTrailerLoader },
          { path: 'movie', element: <Movie /> }, 
          { path:"/movie/:movieId" , element:<MovieDetails/> },
          { path: '/movie/trailer/:mediaId',element: (
            <AuthGuard> 
             <MovieTrailerPage/>
            </AuthGuard>
          ),loader: MovieTrailerLoader },
          { path: 'people', element: <People /> }, 
          { path: '/people/:personId', element: <PeopleDetails /> }, 
          
        ],
      },
    ],
  },
  {
    path:"",
    element:<AuthLayout/>,
    children: [
      { path: 'signin', element: <SignIn /> }, 
      { path: 'signup', element: <SignUp /> },
      { 
        path: 'profile', 
        element: (
          <AuthGuard> 
            <Profile />
          </AuthGuard>
        ) 
      },    ],

  }



])

function App() {

  return (
    <>
 <main >
 <QueryClientProvider client={queryClient}>
 <RouterProvider router={router}/>
 </QueryClientProvider>
 </main>
    </>
  )
}

export default App
