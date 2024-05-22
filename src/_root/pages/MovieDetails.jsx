import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData } from "../../constants";
import Details from '../components/Details';

const MovieDetails = () => {
  const { movieId } = useParams();
  const item = dummyData.find((item) => item.id === parseInt(movieId));

  return (<>
  <section className='bg-black'>
  <Details item={item} />;
  </section>
  </>)
};

export default MovieDetails;
