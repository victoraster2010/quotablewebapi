import  { Request, Response } from 'express';
import { getRandomQuote } from '../services/QuoteService';
export async function getRandomQuoteController(req: Request, res: Response) {
  const quote = await getRandomQuote();
  return res.status(200).json(quote);
}
