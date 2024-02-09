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
exports.significantStrikesbyRound = void 0;
// This File contians the round by round statistics of the significant strikes 
const axios_1 = require("axios");
const cheerio = require("cheerio");
function significantStrikesbyRound(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let start = Date.now();
            const response = yield axios_1.default.get(url);
            console.log('Response data:', response.status); // Log response data to verify HTML content
            const $ = cheerio.load(response.data);
            const $selected = $('tbody.b-fight-details__table-body');
            $selected.find('tr').each((index, element) => {
                const $columns = $(element).find('.b-fight-details__table-col');
            });
        }
        catch (error) {
            console.error('Error:', error.message); // Note: 'any' used for simplicity
        }
    });
}
exports.significantStrikesbyRound = significantStrikesbyRound;
exports.default = significantStrikesbyRound;
