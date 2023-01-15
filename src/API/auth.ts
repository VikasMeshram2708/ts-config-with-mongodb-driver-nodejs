/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router, Request, Response } from 'express';

import bcryptjs from 'bcryptjs';

import { User, UserSchema } from '../Models/Auth';

const router = Router();

router.post('/signUp', async (req:Request, res:Response) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    // validate the user

    let user = await UserSchema.validateAsync({
      name,
      email,
      password,
    });

    if (user) {
      // Check if email already exist
      const isExist = await User.findOne({
        email,
      });

      if (isExist) {
        return res.status(403).json({
          message: 'Hey, email already exist!',
        });
      }

      // hash the password
      let secPass = await bcryptjs.hash(password, 10);
      user.password = secPass;

      // insert to db
      const created = await User.insertOne(user);

      return res.status(201).json({
        message: 'User Registered Successfully!',
        newUser: created,
      });
    }
    return res.status(422).json({
      message: 'Failed to Register User!',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Some Internal Server Error',
      erro: error,
    });
  }
});

export default router;
