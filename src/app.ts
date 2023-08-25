import express, { Request, Response } from 'express';
import { getRandomQuote, createQuote, getLastQuote} from './services/QuoteService';
export const app = express();

app.use(express.json());

interface Quote {
  quote: string;
  author: string;
}
// app.get('/', async (req: Request, res: Response) => {
//   const randomQuote = await getRandomQuote();
//   return res.status(200).json(randomQuote);
// })

app.post('/', async (req: Request, res: Response) => {
  const { author, quote }: Quote = req.body;
  await createQuote(author, quote)
  return res.status(201).json({ message: 'Quote created' });
})

app.get('/last', async (req: Request, res: Response) => {
  const lastQuote = await getLastQuote();
  return res.status(200).json(lastQuote);
})