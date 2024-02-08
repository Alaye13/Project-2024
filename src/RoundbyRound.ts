// This File contians the round by round statistics of the significant strikes 
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function significantStrikesbyRound (url: string): Promise <void> {
    try {
        let start = Date.now();
    
        const response = await axios.get(url);
    
        console.log('Response data:', response.status); // Log response data to verify HTML content
    
        const $ = cheerio.load(response.data);
    
        const $selected = $('tbody.b-fight-details__table-body');
    
        $selected.find('tr').each((index, element) => {
        
        const $columns = $(element).find('.b-fight-details__table-col');
        
        });

    }

catch (error) {
  console.error('Error:', (error as any).message); // Note: 'any' used for simplicity
}

}


export default significantStrikesbyRound;