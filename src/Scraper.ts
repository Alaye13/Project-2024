import axios from 'axios';
import * as cheerio from 'cheerio';
import strict = require('assert/strict');

//Fighter,sigStrike,sigStrikePercent,[next],[next]
//Chris Gutierrez, 110 of 197, 45%, x, x
//Alatengheili,38 of 133, 15%, x, x

/**
 * This method scrapes the website for Totals Stats 
 * It is sorted with @selector elements
 * @param url 
 */
async function scrapeWebsite(url: string): Promise<void> {
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
        significantStrikes: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(1)').text().trim(),
        significantStrikesPercent: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(4) > p:nth-child(1)').text().trim(),
        totalstrikes: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(5) > p:nth-child(1)').text().trim(),
        takedowns: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(6) > p:nth-child(1)').text().trim(),
        takedownPercentage: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(7) > p:nth-child(1)').text().trim(),
        submissionAttempt: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(8) > p:nth-child(1)').text().trim(),
        reversal: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(9) > p:nth-child(1)').text().trim(),
        controlTime: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(10) > p:nth-child(1)').text().trim()
      };
      
      // Extracting information for the second fighter
      const fighter2 = {
        name: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(2)').text().trim(),
        significantStrikes: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(2)').text().trim(),
        significantStrikesPercent: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(4) > p:nth-child(2)').text().trim(),
        totalstrikes: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(5) > p:nth-child(2)').text().trim(),
        takedowns: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(6) > p:nth-child(2)').text().trim(),
        takedownPercentage: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(7) > p:nth-child(2)').text().trim(),
        submissionAttempt: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(8) > p:nth-child(2)').text().trim(),
        reversal: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(9) > p:nth-child(2)').text().trim(),
        controlTime: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(10) > p:nth-child(2)').text().trim()
      };
      
    
      console.log('Fighter 1:', fighter1);
      console.log('Fighter 2:', fighter2);
      console.log(''); // Separate each fighter's details with an empty line
    });
  }

  catch (error) {
    console.error('Error:', (error as any).message); // Note: 'any' used for simplicity
  }
}

// Replace 'https://example.com' with the URL you want to scrape
const targetUrl = 'http://ufcstats.com/fight-details/5704e73f91b9e7f7';
scrapeWebsite(targetUrl)
  .then(() => {
    console.log('Scraping complete.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
