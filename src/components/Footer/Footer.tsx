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

  return (
    <FooterContainer>
      <div>
        <h1>Audio Downloader</h1>
        <input
          type="text"
          placeholder="Enter audio URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button onClick={fetchAudio}>Fetch Audio Formats</button>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h2>Video Title:</h2>
            <p>{videoTitle}</p>
            <h2>Video Description:</h2>
            <p>{videoDescription}</p>
            <h2>Audio Formats:</h2>

            {audioURL && (
              <audio controls loop autoPlay>
                <source src={audioURL} type={audioFormat} />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        )}
      </div>
    </FooterContainer>
  );
};

export default Footer;

//MARK: - Styled Components

const FooterContainer = styled.footer`
  background-color: white;
  display: flex;
`;
