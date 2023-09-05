import express, { Request, Response } from 'express';
import { getRandomQuote, createQuote, getLastQuote} from './services/QuoteService';
import { quoteRouter } from './routes/QuoteRouter';
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


// app.get('/last', async (req: Request, res: Response) => {
//   const lastQuote = await getLastQuote();
//   return res.status(200).json(lastQuote);
// })

app.use('/', quoteRouter);