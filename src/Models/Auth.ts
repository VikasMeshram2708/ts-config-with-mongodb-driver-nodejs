/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

import Joi from 'joi';

import { db } from '../db';

export const UserSchema = Joi.object({
  name: Joi.string().trim().min(2).max(30)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().trim().min(5).max(100)
    .required(),
});

export const User = db.collection('users');
