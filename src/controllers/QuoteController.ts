import  { Request, Response } from 'express';
import { getRandomQuote, getLastQuote, createQuote } from '../services/QuoteService';
interface Quote {
  author: string;
  quote: string;
}
export async function getRandomQuoteController(req: Request, res: Response) {
  const quote = await getRandomQuote();
  return res.status(200).json(quote);
}

export async function getLastQuoteController(req: Request, res: Response) {
  const quote = await getLastQuote();
  return res.status(200).json(quote);
}

export async function createQuoteController(req: Request, res:Response) {
  const { author, quote }: Quote = req.body;
  if(author.length < 3 || quote.length < 5) {
    return res.status(400).json({ message: 'Author or quote is too short' });
  }
  await createQuote(author, quote)
  return res.status(201).json({ message: 'Quote created' });
}