import axios from 'axios';
import * as cheerio from 'cheerio';
import strict = require('assert/strict');

//Fighter,sigStrike,sigStrikePercent,[next],[next]
//Chris Gutierrez, 110 of 197, 45%, x, x
//Alatengheili,38 of 133, 15%, x, x
async function scrapeWebsite(url: string): Promise<void> {
  try {
    let start = Date.now();

    const response = await axios.get(url);

    console.log('Response data:', response.status); // Log response data to verify HTML content

    const $ = cheerio.load(response.data);

    const $selected = $('tbody.b-fight-details__table-body');

    $selected.find('tr').each((index, element) => {

      const $columns = $(element).find('.b-fight-details__table-col');
      const fighter1 = $columns.eq(0).text().trim();
      const fighter2 = $columns.eq(1).text().trim();
      const sigStr1 = $columns.eq(2).text().trim();
      const sigStr2 = $columns.eq(3).text().trim();
      const sigStrPercent1 = $columns.eq(4).text().trim();
      const sigStrPercent2 = $columns.eq(5).text().trim();

      console.log('Fighter 1:', fighter1);
      console.log('Fighter 2:', fighter2);
      console.log('Significant Strikes 1:', sigStr1);
      console.log('Significant Strikes 2:', sigStr2);
      console.log('Significant Strikes % :', sigStrPercent1);
      console.log('Significant Strikes % :', sigStrPercent2);
      console.log(''); // Separate each fighter's details with an empty line
    });

    // Scraping for the total tables
    const $totals = $('table.b-fight-details__table.js-fight-table tbody.b-fight-details__table-body');

    $totals.find('tr').each((index, element) => {

      const $columns = $(element).find('.b-fight-details__table-col');
      const fighter1 = $columns.eq(0).text().trim();
      const fighter2 = $columns.eq(1).text().trim();
      const sigStr1 = $columns.eq(2).text().trim();
      const sigStr2 = $columns.eq(3).text().trim();
      const sigStrPercent1 = $columns.eq(4).text().trim();
      const sigStrPercent2 = $columns.eq(5).text().trim();

      console.log('Fighter 1:', fighter1);
      console.log('Fighter 2:', fighter2);
      console.log('Significant Strikes 1:', sigStr1);
      console.log('Significant Strikes 2:', sigStr2);
      console.log('Significant Strikes % 1:', sigStrPercent1);
      console.log('Significant Strikes % 2:', sigStrPercent2);
      console.log(''); // Separate each fighter's details with an empty line
    });

  }

  catch (error) {
    console.error('Error:', (error as any).message); // Note: 'any' used for simplicity
  }
}

// Replace 'https://example.com' with the URL you want to scrape
const targetUrl = 'http://ufcstats.com/fight-details/a74a8c1e0a49070d';
scrapeWebsite(targetUrl)
  .then(() => {
    console.log('Scraping complete.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
