import React from 'react';
import useScraper from '../../hooks/useScraper';

interface Props {
  url: string;
}

const TeamBio: React.FC<Props> = ({ url }) => {
  const { data, isLoading, error } = useScraper(url);

  if (isLoading) {
    return <p>Loading data from {url}...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    return (
      <div>
        <h2>Plot:</h2>
        <p>{data.plotText}</p>
        <h3>Number of Episodes: {data.numberOfEpisodes}</h3>
        <h3>Release Dates: {data.releaseDates}</h3>
      </div>
    );
  }

  return null;
};

export default TeamBio;
