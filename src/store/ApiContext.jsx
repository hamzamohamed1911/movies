import React, { createContext, useState, useEffect, useContext } from 'react';

const ApiContext = createContext({TrendingData:[],DiscoverMovie:[]})
const ApiContextProvider = ({children}) => {
    const [TrendingData, setDataTrendingData] = useState([]);
    const [DiscoverMovie, setDataDiscoverMovie] = useState([]);
    const [DiscoverTv, setDataDiscoverTv] = useState([]);
    const [TopRatedMovie, setTopRatedMovie] = useState([]);
    const [TopRatedTv, setTopRatedTv] = useState([]);
    const [nowPlayingMovie, setnowPlayingMovie] = useState([]);
    const[Upcoming,setUpcoming]= useState([]);

    

    const [error, setError] = useState('');

      const fetchTrending =  async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
            }
          };
        try {
          const response = await fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US', options)
          const result = await response.json();
          setDataTrendingData(result.results);
        } catch (error) {
          setError(error);
        } 
      };
      const fetchDiscoverMoives =async()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        try {
          const response = await fetch('https://api.themoviedb.org/3/discover/movie?certification=type%3Astring&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc', options)


          const result = await response.json();
          setDataDiscoverMovie(result.results);
        } catch (error) {
          setError(error);
        } 

      }
      const fetchDiscoverTv = async()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        try {
          const response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)

          const result = await response.json();
          setDataDiscoverTv(result.results);
        } catch (error) {
          setError(error);
        } 

      }
      const fetchTopRatedMovie = async ()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        try{
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
           const result = await response.json();
          setTopRatedMovie(result.results)
        
        } catch (error) {
          setError(error);
        } 
      }
      const fetchTopRatedTv =   async ()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        try{
          const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
           const result = await response.json();
           setTopRatedTv(result.results)
        
        } catch (error) {
          setError(error);
        } 
      }
      const fetchNowPlayingMovie =   async ()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        try{
          const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
           const result = await response.json();
           setnowPlayingMovie(result.results)
        
        } catch (error) {
          setError(error);
        } 
      }
      const fetchUpcoming =   async ()=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        try{
          const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
           const result = await response.json();
           setUpcoming(result.results)
        
        } catch (error) {
          setError(error);
        } 
      }

      useEffect(() => {
        fetchTrending();
        fetchDiscoverMoives();
        fetchDiscoverTv();
        fetchTopRatedMovie();
        fetchTopRatedTv();
        fetchNowPlayingMovie();
        fetchUpcoming()
      }, []);

    const value ={TrendingData ,error,DiscoverMovie ,DiscoverTv ,TopRatedMovie , TopRatedTv ,nowPlayingMovie , Upcoming}
  return (
 <ApiContext.Provider value={value}>
    {children}
 </ApiContext.Provider>
  )
}

export default ApiContextProvider;
export const useApi = () => useContext(ApiContext)
