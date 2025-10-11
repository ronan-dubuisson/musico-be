import { Router } from 'express';
import {
  createArtist,
  deleteArtist,
  getArtistById,
  getArtists,
  updateArtist,
} from './artists.controller';

const router = Router();

router.get('/', getArtists);
router.get('/:id', getArtistById);
router.post('/', createArtist);
router.put('/:id', updateArtist);
router.delete('/:id', deleteArtist);

export default router;
