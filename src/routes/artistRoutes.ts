import { Router } from 'express';
import {
  createArtist,
  getArtists,
  getArtistById,
  updateArtist,
  deleteArtist,
} from '../controllers/artistController';

const router = Router();

router.get('/', getArtists);
router.get('/:id', getArtistById);
router.post('/', createArtist);
router.put('/:id', updateArtist);
router.delete('/:id', deleteArtist);

export default router;
