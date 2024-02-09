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
const SigScraper_1 = require("./SigScraper");
const LogicScrapers_1 = require("./LogicScrapers");
//Fighter,sigStrike,sigStrikePercent,[next],[next]
//Chris Gutierrez, 110 of 197, 45%, x, x
//Alatengheili,38 of 133, 15%, x, x
const targetUrls = [
    'http://ufcstats.com/fight-details/14e53999507c76a7',
    'http://ufcstats.com/fight-details/ba5005d1116fa45f',
    'http://ufcstats.com/fight-details/331ddc1141e934d1'
];
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const url of targetUrls) {
            console.log(`Scraping ${url}...`);
            yield (0, LogicScrapers_1.default)(url);
            yield (0, SigScraper_1.default)(url);
            console.log(`Scraping of ${url} complete.`);
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
}))();
