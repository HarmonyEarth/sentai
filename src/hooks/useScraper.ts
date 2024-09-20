import { useQuery } from '@tanstack/react-query';

interface PageData {
  plotText: string;
  numberOfEpisodes: string;
  releaseDates: string;
}

const fetchScrapedData = async (url: string): Promise<PageData> => {
  const response = await fetch(`/api/scraper?url=${encodeURIComponent(url)}`);

  if (!response.ok) {
    throw new Error('Failed to fetch scraped data');
  }

  const data: PageData = await response.json();
  return data;
};

const useScraper = (url: string) => {
  return useQuery({
    queryKey: ['scrapeData', url],
    queryFn: () => fetchScrapedData(url),
    enabled: !!url,
  });
};

export default useScraper;
