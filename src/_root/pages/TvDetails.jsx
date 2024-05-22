import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyData } from "../../constants";
import Details from '../components/Details';

const TvDetails = () => {
  const { tvId } = useParams();
  const item = dummyData.find((item) => item.id === parseInt(tvId));

  return <Details item={item} />;
};

export default TvDetails;
