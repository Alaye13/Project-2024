
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeSignificantStrike(url: string): Promise<void> {
  try {
    let start = Date.now();

    const response = await axios.get(url);

    console.log('Response data:', response.status); // Log response data to verify HTML content

    const $ = cheerio.load(response.data);

    const $selected = $('tbody.b-fight-details__table-body');

    $selected.find('tr').each((index, element) => {

    const $columns = $(element).find('.b-fight-details__table-col');

      const fighter1 = {
        name: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(1)').text().trim(),
        significantStrikes: $('body > section > div > div > table > tbody > tr > td:nth-child(2) > p:nth-child(1)').text().trim(),
        significantStrikesPercent: $('body > section > div > div > table > tbody > tr > td:nth-child(3) > p:nth-child(1)').text().trim(),
        head: $('body > section > div > div > table > tbody > tr > td:nth-child(4) > p:nth-child(1)').text().trim(),
        body: $('body > section > div > div > table > tbody > tr > td:nth-child(5) > p:nth-child(1)').text().trim(),
        leg: $('body > section > div > div > table > tbody > tr > td:nth-child(6) > p:nth-child(1)').text().trim(),
        distacne: $('body > section > div > div > table > tbody > tr > td:nth-child(7) > p:nth-child(1)').text().trim(),
        clinch: $('body > section > div > div > table > tbody > tr > td:nth-child(8) > p:nth-child(1)').text().trim(),
        ground: $('body > section > div > div > table > tbody > tr > td:nth-child(9) > p:nth-child(1)').text().trim()
      };

      // Extracting information for the second fighter
      // Extracting information for the second fighter
      const fighter2 = {
        name: $('body > section > div > div > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(2)').text().trim(),
        significantStrikes: $('body > section > div > div > table > tbody > tr > td:nth-child(2) > p:nth-child(2)').text().trim(),
        significantStrikesPercent: $('body > section > div > div > table > tbody > tr > td:nth-child(3) > p:nth-child(2)').text().trim(),
        head: $('body > section > div > div > table > tbody > tr > td:nth-child(4) > p:nth-child(2)').text().trim(),
        body: $('body > section > div > div > table > tbody > tr > td:nth-child(5) > p:nth-child(2)').text().trim(),
        leg: $('body > section > div > div > table > tbody > tr > td:nth-child(6) > p:nth-child(2)').text().trim(),
        distacne: $('body > section > div > div > table > tbody > tr > td:nth-child(7) > p:nth-child(2)').text().trim(),
        clinch: $('body > section > div > div > table > tbody > tr > td:nth-child(8) > p:nth-child(2)').text().trim(),
        ground: $('body > section > div > div > table > tbody > tr > td:nth-child(9) > p:nth-child(2)').text().trim()
      };

      console.log(start);
      console.log('Fighter 1:', fighter1);
      console.log('Fighter 2:', fighter2);
      console.log(''); // Separate each fighter's details with an empty line
    });
  }
  catch (error) {
    console.error('Error:', (error as any).message); // Note: 'any' used for simplicity
  }

}

export default scrapeSignificantStrike;