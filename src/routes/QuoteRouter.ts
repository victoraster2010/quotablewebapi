import { Router } from "express";
import {
  createQuoteController,
  getLastQuoteController,
  getRandomQuoteController
} from "../controllers/QuoteController";
export const quoteRouter = Router();

quoteRouter.get('/random', getRandomQuoteController);
quoteRouter.get('/last', getLastQuoteController)
quoteRouter.post('/', createQuoteController)