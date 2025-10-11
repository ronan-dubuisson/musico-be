import Joi from 'joi';
import { validator } from '../../services/services.validator';

const createSchema = Joi.object({
  name: Joi.string().min(3).required(),
  origin: Joi.string().min(3).optional(),
  yearFounded: Joi.string().pattern(/^[0-9]{4}/, '4 digit year'),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  origin: Joi.string().min(3).optional(),
  yearFounded: Joi.string().pattern(/^[0-9]{4}/, '4 digit year'),
});

export const validateUpdateArtist = validator(updateSchema);
export const validateCreateArtist = validator(createSchema);
