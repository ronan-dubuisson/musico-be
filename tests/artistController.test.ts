import { Request, Response } from 'express';
import { getArtists } from '../src/controllers/artistController';
import { items } from '../src/models/artist';

describe('Item Controller', () => {
  it('should return an empty array when no items exist', () => {
    // Create mock objects for Request, Response, and NextFunction
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    // Ensure that our in-memory store is empty
    items.length = 0;

    // Execute our controller function
    getArtists(req, res, jest.fn());

    // Expect that res.json was called with an empty array
    expect(res.json).toHaveBeenCalledWith([]);
  });
});
