import Joi from 'joi';

export const validator = (schema: Joi.ObjectSchema) => (payload: Object) =>
  schema.validate(payload, { abortEarly: false });
