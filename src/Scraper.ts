import axios from 'axios';
import * as cheerio from 'cheerio';
import strict = require('assert/strict');
import scrapeSignificantStrike from './SigScraper';
import scrapeWebsite from './LogicScrapers';


//Fighter,sigStrike,sigStrikePercent,[next],[next]
//Chris Gutierrez, 110 of 197, 45%, x, x
//Alatengheili,38 of 133, 15%, x, x

/**
 * This method scrapes the website for Totals Stats 
 * It is sorted with @selector elements
 * @param url 
 */

const targetUrls = [
  'http://ufcstats.com/fight-details/14e53999507c76a7',
  'http://ufcstats.com/fight-details/ba5005d1116fa45f',
  'http://ufcstats.com/fight-details/331ddc1141e934d1'
];


(async () => {
  try {
    for (const url of targetUrls) {
      console.log(`Scraping ${url}...`);
      await scrapeWebsite(url);
      await scrapeSignificantStrike(url);
      console.log(`Scraping of ${url} complete.`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();