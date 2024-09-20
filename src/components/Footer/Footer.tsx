import React from 'react';
import styled from 'styled-components';
// import useAudio from '../../hooks/useAudio';

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;

//MARK: - Styled Components

const FooterContainer = styled.footer`
  background-color: white;
  display: flex;
`;

// const AudioComponent: React.FC<{ url: string }> = ({ url }) => {
//   const { data, isLoading, error } = useAudio(url);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error.message}</p>;

//   if (data) {
//     return (
//       <div>
//         <h2>{data.songTitle}</h2>
//         <p>{data.description}</p>
//         <p>Audio Format: {data.audioFormat}</p>
//         <audio controls src={data.audioURL}></audio>
//       </div>
//     );
//   }

//   return null;
// };
