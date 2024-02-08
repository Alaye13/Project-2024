import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeWebsite(url: string): Promise<void> {
  try {
    let start = Date.now();

    const response = await axios.get(url);

    console.log('Response data:', response.status); // Log response data to verify HTML content

    const $ = cheerio.load(response.data);

    const $selected = $('tbody.b-fight-details__table-body');

    $selected.find('tr').each((index, element) => {

      const $columns = $(element).find('.b-fight-details__table-col');

      const totalStrikesText = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(5) > p:nth-child(1)').text().trim();

      const totalStrikesParts = totalStrikesText.split(' of ');

      const significantStrikes = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(1)').text().trim();

      const significantStrikesParts = significantStrikes.split(' of ');
      
      const fighter1takedowns = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(6) > p:nth-child(1)').text().trim()
      
      const takedownstats = fighter1takedowns.split(' of ');

      //Extracting fighter 1 stats
      const fighter1 = {
        name: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(1)').text().trim(),
        significantstrikesthrown: parseInt(significantStrikesParts[0]),
        signigficantstrikesattempted: parseInt(significantStrikesParts[1]),  
        significantStrikesPercent: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(4) > p:nth-child(1)').text().trim(), 
        totalstrikesthrown: parseInt(totalStrikesParts[0]),    
        totalstrikesattempted: parseInt(totalStrikesParts[1]),  
        takedownsattempted: parseInt(takedownstats[0]),   
        takedownslanded: parseInt(takedownstats[1]),
        takedownPercentage: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(7) > p:nth-child(1)').text().trim(),
        submissionAttempt: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(8) > p:nth-child(1)').text().trim(),
        reversal: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(9) > p:nth-child(1)').text().trim(),
        controlTime: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(10) > p:nth-child(1)').text().trim()
      };

      // Extracting information for the second fighter

      const totalStrikesTextoffigher2 = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(5) > p:nth-child(2)').text().trim()
     
      const totalStrikesPartsoffighter2 = totalStrikesTextoffigher2.split(' of ');
     
      const significantStrikesoffighter2 = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(2)').text().trim()
     
      const significantStrikesPartsoffighter2 = significantStrikesoffighter2.split(' of ');
     
      const takedowns = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(6) > p:nth-child(2)').text().trim()
     
      const takedownfighter2 = takedowns.split(' of ');
     
      //Extract fighter 2 stats
      const fighter2 = {
        name: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(2)').text().trim(),
        significantstrikesthrown: parseInt(significantStrikesPartsoffighter2[0]),
        signigficantstrikesattempted: parseInt(significantStrikesPartsoffighter2[1]),
        significantStrikesPercent: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(4) > p:nth-child(2)').text().trim(),
        totalstrikesthrown: parseInt(totalStrikesPartsoffighter2[0]),
        totalstrikesattempted: parseInt(totalStrikesPartsoffighter2[1]),
        takedownsattempted: parseInt(takedownfighter2[0]),
        takedownslanded: parseInt(takedownfighter2[1]),
        takedownPercentage: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(7) > p:nth-child(2)').text().trim(),
        submissionAttempt: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(8) > p:nth-child(2)').text().trim(),
        reversal: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(9) > p:nth-child(2)').text().trim(),
        controlTime: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(10) > p:nth-child(2)').text().trim()
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
//Scraping Significant Strike Logic


export default scrapeWebsite;