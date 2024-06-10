import React from "react";
import styled from "styled-components";
import useJukebox from "../../hooks/useJukebox";

const Footer = () => {
  const {
    videoUrl,
    setVideoUrl,
    audioFormat,
    audioURL,
    isLoading,
    error,
    fetchAudio,
    videoDescription,
    videoTitle,
  } = useJukebox();

  return <FooterContainer></FooterContainer>;
};

export default Footer;

//MARK: - Styled Components

const FooterContainer = styled.footer`
  background-color: white;
  display: flex;
`;
