import { useQuery } from '@tanstack/react-query';

interface AudioResponseType {
  audioURL: string;
  audioFormat: string;
  description: string;
  songTitle: string;
}

const fetchAudio = async (songUrl: string): Promise<AudioResponseType> => {
  const response = await fetch(`/api/audio?url=${encodeURIComponent(songUrl)}`);

  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new Error(
          'Bad Request: The server could not understand the request due to invalid syntax.'
        );
      case 404:
        throw new Error(
          'Not Found: The requested resource could not be found on the server.'
        );
      case 500:
        throw new Error(
          'Internal Server Error: The server encountered an unexpected condition.'
        );
      default:
        throw new Error('Failed to fetch audio formats');
    }
  }

  const data: AudioResponseType = await response.json();
  return data;
};

const useAudio = (songUrl: string) => {
  return useQuery({
    queryKey: ['audioData', songUrl],
    queryFn: () => fetchAudio(songUrl),
    enabled: !!songUrl, // Only run the query if songUrl is not empty
  });
};

export default useAudio;
