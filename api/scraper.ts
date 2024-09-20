import { VercelRequest, VercelResponse } from '@vercel/node';
import * as cheerio from 'cheerio';

// Vercel serverless function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url: string = req.query.url as string;

  try {
    // Fetch the HTML content using Node's fetch
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(500).json({ error: 'Failed to fetch the page' });
    }

    const html = await response.text();

    // Load the HTML into Cheerio for parsing
    const $ = cheerio.load(html);

    // Extract the Plot Text
    let plotText = 'Plot section not found.';
    const plotHeader = $('h2[id="Plot"]');
    const charactersHeader = $('h2[id="Characters"]');

    if (plotHeader.length) {
      const paragraphs: string[] = [];
      let node = plotHeader.parent().next();

      // Skip over any hatnotes or navigation notes that may appear after the plot header
      while (node.length && node.is('div[role="note"]')) {
        node = node.next();
      }

      // Now extract paragraphs between the Plot and Characters section
      while (
        node.length &&
        (!charactersHeader.length || !node.is(charactersHeader.parent()))
      ) {
        if (node.is('p')) {
          // Remove citation elements (e.g. sup tags with id starting with "cite_ref")
          node.find('sup[id^="cite_ref"]').remove();

          // Collect the text content after removing the citations
          paragraphs.push(node.text().trim());
        }

        node = node.next();
      }

      if (paragraphs.length > 0) {
        plotText = paragraphs.join('\n');
      }
    }

    // Extract the Number of Episodes and Release Dates from the infobox
    let numberOfEpisodes = 'Number of episodes not found.';
    let releaseDates = 'Release dates not found.';

    const infobox = $('.infobox.ib-tv.vevent');

    if (infobox.length) {
      infobox.find('tr').each((_, element) => {
        const header = $(element).find('th').text();
        const cell = $(element).find('td');

        // For number of episodes
        if (header.includes('No. of episodes')) {
          numberOfEpisodes =
            cell.text().trim() || 'Number of episodes not found.';
        }

        // For release dates
        if (header.includes('Release')) {
          // Remove hidden spans (e.g., bday, dtstart, dtend, etc.)
          cell
            .find('span.bday, span.dtstart, span.itvstart, span.dtend')
            .remove();

          // Remove any remaining parentheses
          releaseDates = cell
            .text()
            .trim()
            .replace(/\s*\(\s*\)/g, '')
            .replace(/\s+/g, ' ')
            .replace(/ \s*– \s*/g, ' – ');

          // Ensure proper spacing around the dash
          releaseDates = releaseDates.replace(/–/g, ' – ');
        }
      });
    }

    // Return the extracted data
    return res.status(200).json({
      plotText,
      numberOfEpisodes,
      releaseDates,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to scrape the provided URL' });
  }
}
