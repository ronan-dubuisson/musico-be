import { Request, Response, NextFunction } from 'express';
import { items, Item } from '../models/artist';
import Joi from 'joi';

// Create an item
export const createArtist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { error } = validateArtist(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { name } = req.body;
    const newItem: Item = { id: Date.now(), name };
    items.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getArtists = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(items);
  } catch (error) {
    next(error);
  }
};

// Read single item
export const getArtistById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = items.find((i) => i.id === id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    res.json(item);
  } catch (error) {
    next(error);
  }
};

// Update an item
export const updateArtist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //exists?
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex((i) => i.id === id);
    if (itemIndex === -1)
      return res.status(404).json({ message: 'Item not found' });

    //Validation
    const { error } = validateArtist(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //update artist
    const { name } = req.body;
    items[itemIndex].name = name;
    res.json(items[itemIndex]);
  } catch (error) {
    next(error);
  }
};

// Delete an item
export const deleteArtist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex((i) => i.id === id);
    if (itemIndex === -1)
      return res.status(404).json({ message: 'Item not found' });

    const deletedItem = items.splice(itemIndex, 1)[0];
    res.json(deletedItem);
  } catch (error) {
    next(error);
  }
};

const validateArtist = (artist: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(artist);
};
