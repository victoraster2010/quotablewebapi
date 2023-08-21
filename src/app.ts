import express, { Request, Response } from 'express';
import { getRandomQuote } from './services/QuoteService';
export const app = express();

app.get('/', async (req: Request, res: Response) => {
  const randomQuote = await getRandomQuote();
  return res.status(200).json(randomQuote);
})