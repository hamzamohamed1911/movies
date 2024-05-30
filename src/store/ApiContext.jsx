import React, { createContext, useState, useEffect, useContext } from 'react';

const ApiContext = createContext({TrendingData:[]})
const ApiContextProvider = ({children}) => {
    const [TrendingData, setDataTrendingData] = useState([]);
    const [error, setError] = useState('');

    const fetchTrending = async () => {
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
      useEffect(() => {
        fetchTrending();
      }, []);

    const value ={TrendingData ,error }
  return (
 <ApiContext.Provider value={value}>
    {children}
 </ApiContext.Provider>
  )
}

export default ApiContextProvider;
export const useApi = () => useContext(ApiContext)
