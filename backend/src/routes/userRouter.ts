import express from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { User } from '../models/UserSchema';
import { stat } from 'fs';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (error: any) {
    console.log('GetUsersError: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = req.body;
    const { name, email, password } = user;

    const doesEmailExist = await User.findOne({
      email: email,
    });

    if (doesEmailExist) {
      res.status(400).json({
        status: 400,
        message: 'Email already in use.',
      });
      return;
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      status: 201,
      success: true,
      message: 'User created successfully.',
      user: newUser,
    });
  } catch (error: any) {
    console.log('RegisterError: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const userReq = req.body;
    const { email, password } = userReq;

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      res.status(404).json({
        status: 404,
        success: false,
        message: 'User not found',
      });
      return;
    }

    const isPasswordMatched = user?.password === password;

    if (!isPasswordMatched) {
      res.status(400).json({
        status: 400,
        success: false,
        message: 'Wrong password',
      });
      return;
    }

    const token = jwt.sign(
      { _id: user?._id, name: user?.name, email: user?.email, admin: user?.admin },
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: '1d',
      }
    );

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Login is successful',
      token: token,
    });
  } catch (error: any) {
    console.log('LoginError: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.post('/validate', async (req, res) => {
  try {
    const token = req.body.token;
    jwt.verify(token, process.env.JWT_SECRET as Secret, (err: any, decoded: any) => {
      if (err) {
        res.status(401).json({
          status: 401,
          message: 'Unauthorized',
        });
        return;
      }

      res.status(200).json({
        status: 200,
        message: 'Valid token',
      });
    });
  } catch (error: any) {
    console.log('ValidateError: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

export default router;
