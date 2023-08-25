import { Router } from "express";
import { getRandomQuoteController } from "../controllers/QuoteController";
export const quoteRouter = Router();

quoteRouter.post('/', getRandomQuoteController);