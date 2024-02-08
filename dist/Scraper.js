"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const cheerio = require("cheerio");
//Fighter,sigStrike,sigStrikePercent,[next],[next]
//Chris Gutierrez, 110 of 197, 45%, x, x
//Alatengheili,38 of 133, 15%, x, x
/**
 * This method scrapes the website for Totals Stats
 * It is sorted with @selector elements
 * @param url
 */
function scrapeWebsite(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let start = Date.now();
            const response = yield axios_1.default.get(url);
            console.log('Response data:', response.status); // Log response data to verify HTML content
            const $ = cheerio.load(response.data);
            const $selected = $('tbody.b-fight-details__table-body');
            $selected.find('tr').each((index, element) => {
                const $columns = $(element).find('.b-fight-details__table-col');
                const totalStrikesText = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(5) > p:nth-child(1)').text().trim();
                const totalStrikesParts = totalStrikesText.split(' of ');
                const significantStrikes = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(1)').text().trim();
                const significantStrikesParts = significantStrikes.split(' of ');
                const fighter1 = {
                    name: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(1)').text().trim(),
                    //significantStrikes: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(1)').text().trim(),
                    significantstrikesthrown: parseInt(significantStrikesParts[0]),
                    signigficantstrikesattempted: parseInt(significantStrikesParts[1]),
                    significantStrikesPercent: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(4) > p:nth-child(1)').text().trim(),
                    totalstrikesthrown: parseInt(totalStrikesParts[0]),
                    totalstrikesattempted: parseInt(totalStrikesParts[1]),
                    takedowns: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(6) > p:nth-child(1)').text().trim(),
                    takedownPercentage: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(7) > p:nth-child(1)').text().trim(),
                    submissionAttempt: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(8) > p:nth-child(1)').text().trim(),
                    reversal: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(9) > p:nth-child(1)').text().trim(),
                    controlTime: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(10) > p:nth-child(1)').text().trim()
                };
                // Extracting information for the second fighter
                const totalStrikesTextoffigher2 = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(5) > p:nth-child(2)').text().trim();
                const totalStrikesPartsoffighter2 = totalStrikesTextoffigher2.split(' of ');
                const significantStrikesoffighter2 = $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(2)').text().trim();
                const significantStrikesPartsoffighter2 = significantStrikesoffighter2.split(' of ');
                const fighter2 = {
                    name: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(2)').text().trim(),
                    // significantStrikes: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(3) > p:nth-child(2)').text().trim(),
                    significantstrikesthrown: parseInt(significantStrikesPartsoffighter2[0]),
                    signigficantstrikesattempted: parseInt(significantStrikesPartsoffighter2[1]),
                    significantStrikesPercent: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(4) > p:nth-child(2)').text().trim(),
                    // totalstrikes: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(5) > p:nth-child(2)').text().trim(),
                    totalstrikesthrown: parseInt(totalStrikesPartsoffighter2[0]),
                    totalstrikesattempted: parseInt(totalStrikesPartsoffighter2[1]),
                    takedowns: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td:nth-child(6) > p:nth-child(2)').text().trim(),
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
            console.error('Error:', error.message); // Note: 'any' used for simplicity
        }
    });
}
function scrapeSignificantStrike(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let start = Date.now();
            const response = yield axios_1.default.get(url);
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
                    name: $('body > section > div > div > section:nth-child(4) > table > tbody > tr > td.b-fight-details__table-col.l-page_align_left > p:nth-child(1)').text().trim(),
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
            console.error('Error:', error.message); // Note: 'any' used for simplicity
        }
    });
}
// Replace 'https://example.com' with the URL you want to scrape
const targetUrl = 'http://ufcstats.com/fight-details/14e53999507c76a7';
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield scrapeWebsite(targetUrl);
        yield scrapeSignificantStrike(targetUrl);
        console.log('Scraping complete.');
    }
    catch (error) {
        console.error('Error:', error);
    }
}))();
