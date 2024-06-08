import React, { createContext, useState, useEffect, useContext } from 'react';

const ApiContext = createContext({TrendingData:[],DiscoverMovie:[]})
const ApiContextProvider = ({children}) => {
    const [TopRatedMovie, setTopRatedMovie] = useState([]);
    const [TopRatedTv, setTopRatedTv] = useState([]);
    const [nowPlayingMovie, setnowPlayingMovie] = useState([]);
    const[Upcoming,setUpcoming]= useState([]);
    const[moviesDetails,setMoviesDetails]= useState([]);
    const[moviesSimilar,setMoviesSimilar]= useState([]);
    const[movieRecommendations,setMovieRecommendations]= useState([])
    const [castMovies,setCastMovies]=useState([])
    const[TvDetails,setTvDetails]= useState([]);
    const[TvSimilar,setTvSimilar]= useState([]);
    const[TvRecommendations,setTvRecommendations]= useState([])
    const [castTv,setCastTv]=useState([])
    const [person,setPerson]=useState([])
    const [SearchResults, setSearchResults] = useState([]);
    const [PeopleList, setPeopleList] = useState([])
    const [mediaList, setMediaList] = useState([]);

    const [error, setError] = useState('');

      const fetchTrending =  async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
            }
          };
          const response = await fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US', options)
          if (!response.ok) {
            const error = new Error('An error occurred while fetching the trending');
            error.code = response.status;
            error.info = await response.json();
            throw error;
          }
          const result = await response.json();
           return result.results
         
      };

      const fetchDiscoverMoives = async (year, rating, language, type ,page=1) =>  {
        const options = {
          method: 'GET',
          headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
      };       
      let url = `https://api.themoviedb.org/3/discover/movie?language=${language}&sort_by=popularity.desc&page=${page}`;
    
      if (year) {
        url += `&primary_release_year=${year}`;
      }
  
      if (rating) {
        url += `&vote_average.gte=${rating}`;
      }
  
      if (type) {
        url += `&with_genres=${type}`;
      }
      if (language) {
        url += `&with_original_language=${language}`; 
      }
    
        const response = await fetch(url ,options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results.map(movie => ({ ...movie, media_type: 'movie' }));
      };
      
      const fetchDiscoverTv = async (year, rating, language, type ,page=1)=>{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
        };
        let url = `https://api.themoviedb.org/3/discover/tv?language=${language}&sort_by=popularity.desc&page=${page}`;

        if (year) {
          url += `&first_air_date_year=${year}`;
        }
    
        if (rating) {
          url += `&vote_average.gte=${rating}`;
        }
    
        if (type) {
          url += `&with_genres=${type}`;
        }
        if (language) {
          url += `&with_original_language=${language}`; 
        }

          const response = await fetch(url, options)

          if (!response.ok) {
            const error = new Error('An error occurred while fetching the trending');
            error.code = response.status;
            error.info = await response.json();
            throw error;
          }
          const result = await response.json();
          return result.results.map(tv => ({ ...tv, media_type: 'tv' }));
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
      const fetchMoviesDetails = async ({ moviesId }) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
            }
        };
        try {
            const url = `https://api.themoviedb.org/3/movie/${moviesId}?language=en-US`;
            const response = await fetch(url, options);
            const result = await response.json();
            setMoviesDetails(result); 
        } catch (error) {
            setError(error);
        }
     };
      const fetchTvDetails = async ({ tvId }) => {
      const options = {
          method: 'GET',
          headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
          }
      };
      try {
          const url = `https://api.themoviedb.org/3/tv/${tvId}?language=en-US`;
          const response = await fetch(url, options);
          const result = await response.json();
          setTvDetails(result); 
      } catch (error) {
          setError(error);
      }
     };
     const fetchMoviesSimilar = async ({ id }) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
        }
      };
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
        const response = await fetch(url, options);
        const result = await response.json();
        setMoviesSimilar(result.results);
      } catch (error) {
        setError(error);
      }
     };
     const fetchTvSimilar = async ({ id }) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
      }
    };
    try {
      const url = `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`;
      const response = await fetch(url, options);
      const result = await response.json();
      setTvSimilar(result.results);
    } catch (error) {
      setError(error);
    }
     };
    const fetchMoviesRecommendations = async ({ id }) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
      }
    };
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
      const response = await fetch(url, options);
      const result = await response.json();
      setMovieRecommendations(result.results);
    } catch (error) {
      setError(error);
    }
     };
     const fetchTvRecommendations = async ({ id }) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
      }
    };
    try {
      const url = `https://api.themoviedb.org/3/tv/${id}//recommendations?language=en-US&page=1`;
      const response = await fetch(url, options);
      const result = await response.json();
      setTvRecommendations(result.results);
    } catch (error) {
      setError(error);
    }
    };
     const fetchCastTv = async ({ id }) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
        }
      };
      try {
        const url = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;
        const response = await fetch(url, options);
        const result = await response.json();
        setCastTv(result.cast);
      } catch (error) {
        setError(error);
      }
     };
     const fetchCastMovies = async ({ id }) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
        }
      };
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
        const response = await fetch(url, options);
        const result = await response.json();
        setCastMovies(result.cast);
      } catch (error) {
        setError(error);
      }
     };
     const fetchPerson = async ({id}) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
        }
      };
      try{
    const url =` https://api.themoviedb.org/3/person/${id}?language=en-US`
    const response = await fetch (url,options)
    const result = await response.json()
    setPerson(result)

      }
      catch (error) {
        setError(error);
      }
     }
     const fetchSearchResults = async (query) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
        }
      };
  
      
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, options);
        const result = await response.json();
        setSearchResults(result.results);
     
      
      
    };
    const fetchPeopleList= async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
        const data = await response.json();
        const filteredResults = data.results.map(person => {
          return {
            ...person,
            known_for: person.known_for.filter(movie => !movie.adult),
          };
        });
        setPeopleList(filteredResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchMedia = async ({personId}) => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTM0YjVlYjEyMjMxNDlkYTZjYWQ0ZWVhYjU5ZTQ4MiIsInN1YiI6IjY2M2E5ZGQ1M2Q2YmIzYmRhOTI3NmY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABEAo1GkaGt_KMj2AEzEZPB3cTtJrSAzm7Lxh2fHBXc'
        }
      };
      try {
        const response = await fetch(`https://api.themoviedb.org/3/person/${personId}/combined_credits?language=en-US`, options);
        const data = await response.json();
        setMediaList(data.cast);
      } catch (error) {
        console.log(error)
      }
    };

  
  
      useEffect(() => {
       
        fetchTopRatedMovie();
        fetchTopRatedTv();
        fetchNowPlayingMovie();
        fetchUpcoming()
        fetchPeopleList()
      }, []);

    const value ={fetchTrending, error ,fetchDiscoverTv,fetchDiscoverMoives,
      TopRatedMovie , TopRatedTv ,
      nowPlayingMovie , Upcoming ,fetchMoviesDetails ,
      moviesDetails , moviesSimilar , fetchMoviesSimilar ,
      movieRecommendations , fetchMoviesRecommendations ,
      fetchCastMovies , castMovies , fetchCastTv , castTv , 
      fetchTvDetails , TvDetails , fetchTvSimilar ,
       fetchTvRecommendations , TvRecommendations , 
       TvSimilar, person , fetchPerson , SearchResults 
     , fetchSearchResults , setSearchResults ,PeopleList ,fetchMedia ,mediaList} 
  return (
 <ApiContext.Provider value={value}>
    {children}
 </ApiContext.Provider>
  )
}

export default ApiContextProvider;
export const useApi = () => useContext(ApiContext)
