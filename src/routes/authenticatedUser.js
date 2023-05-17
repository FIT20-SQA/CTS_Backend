import express from 'express';
const router = express.Router();

import AuthenticatedUserController from '../controller/AuthenticatedUserController.js';
import IsAuthenticated from '../middlewares/IsAuthenticated.js';

router.get('/movies', IsAuthenticated, AuthenticatedUserController.getMovies);
router.get('/foods', IsAuthenticated, AuthenticatedUserController.getFoods);
router.get('/drinks', IsAuthenticated, AuthenticatedUserController.getDrinks);
router.get('/user-info',IsAuthenticated,  AuthenticatedUserController.getUserInfo);


export default router;