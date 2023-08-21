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

export async function getLastQuote() {
  const quotes = await readFileQuotes('./src/quotes.json');
  return quotes[quotes.length - 1];
}
// under construction below
export async function createQuote(author:string,quote:string) {
 const quotes = await readFileQuotes('./src/quotes.json');
 quotes.push({author,quote});
 await fs.promises.writeFile('./src/quotes.json', JSON.stringify(quotes));
}
