import { test, expect } from 'vitest';
import { readFileQuotes } from '../services/QuoteService';

test('1.0 - quoteService tests', () => {
  test('1.1 - readFile quotes', async () => {
    const quotes = await readFileQuotes('./src/quotes.json');
    expect(quotes).toBeTruthy();
  })
  test('1.2 quando dado um arquivo inválido o readFile retorna um erro', async () => {
    expect(() => {
      readFileQuotes('./src/quot3s.json');
    }).toThrow();
  })
} )