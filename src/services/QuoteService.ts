import fs from 'fs';
import quotes from '../quotes.json'
async function readFileQuotes(file: any) {
  try {
  const quotesData = await fs.promises.readFile(file, 'utf-8')
  const quotes = JSON.parse(quotesData);
  return quotes;
}
  catch (error) {
    console.log(error)
    return false;
  }
}

export async function getRandomQuote() {
  const quotes = await readFileQuotes('./src/quotes.json');
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}