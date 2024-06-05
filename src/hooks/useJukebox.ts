import { useState } from "react";

interface AudioResponseType {
  audioURL: string;
  audioFormat: string;
  description: string;
  videoTitle: string;
}

const useJukebox = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [audioFormat, setAudioFormat] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAudio = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/audio?url=${encodeURIComponent(videoUrl)}`
      );

      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error(
              "Bad Request: The server could not understand the request due to invalid syntax."
            );
          case 404:
            throw new Error(
              "Not Found: The requested resource could not be found on the server."
            );
          case 500:
            throw new Error(
              "Internal Server Error: The server encountered an unexpected condition."
            );
          default:
            throw new Error("Failed to fetch audio formats");
        }
      }

      const data: AudioResponseType = await response.json();
      setAudioFormat(data.audioFormat);
      setAudioURL(data.audioURL);
      setVideoDescription(data.description);
      setVideoTitle(data.videoTitle);
      setVideoUrl("");
    } catch (error) {
      setError("Error fetching audio formats. Please try again later.");
      console.error("Error fetching audio date:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    videoUrl,
    setVideoUrl,
    audioFormat,
    audioURL,
    isLoading,
    error,
    fetchAudio,
    videoDescription,
    videoTitle,
  };
};

export default useJukebox;
