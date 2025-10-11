import { Request, Response, NextFunction } from 'express';
import { artists, Artist } from './artists.model';
import { validateCreateArtist, validateUpdateArtist } from './artists.schema';
import { pool } from '../../services/services.database';

// Create an item
export const createArtist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { error, value } = validateCreateArtist(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getArtists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const [artists] = await pool.query('SELECT * FROM artists');
    res.type('json');
    res.status(200).send(artists);
  } catch (error) {
    next(error);
  }
};

export const getArtistById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const item = artists.find((i) => i.id === id);
    if (!item) return res.status(404).send({ message: 'Item not found' });

    res.send(item);
  } catch (error) {
    next(error);
  }
};

export const updateArtist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //exists?
    const id = req.params.id;
    const itemIndex = artists.findIndex((i) => i.id === id);
    if (itemIndex === -1)
      return res.status(404).send({ message: 'Item not found' });

    //Validation
    const { error, value } = validateUpdateArtist(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //update artist
    Object.assign(artists[itemIndex], value);
    res.send(artists[itemIndex]);
  } catch (error) {
    next(error);
  }
};

export const deleteArtist = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const itemIndex = artists.findIndex((i) => i.id === id);
    if (itemIndex === -1)
      return res.status(404).send({ message: 'Item not found' });

    const deletedItem = artists.splice(itemIndex, 1)[0];
    res.send(deletedItem);
  } catch (error) {
    next(error);
  }
};
