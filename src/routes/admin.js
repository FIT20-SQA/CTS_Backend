import express from 'express'
const router = express.Router();

import AdminController from '../controller/AdminController.js'
import AdminAuthorization from '../middlewares/AdminAuthorization.js'

router.post('/movies',AdminAuthorization, AdminController.createMovie)
router.post('/theater-rooms', AdminAuthorization, AdminController.createTheaterRoom)
router.post('/foods', AdminAuthorization, AdminController.createFood)
router.post('/drinks', AdminAuthorization, AdminController.createDrink)
router.post('/staffs', AdminAuthorization, AdminController.createStaff)

// //TODO: schedule showtime for a movie
// router.post('/showtimes', AdminAuthorization, AdminController.createShowtime)

// //TODO: update food 
// router.put('/foods/:id', AdminAuthorization, AdminController.updateFood)

// //TODO: update drink 
// router.put('/drinks/:id', AdminAuthorization, AdminController.updateDrink)

// //TODO: update staff
// router.put('/staffs/:id', AdminAuthorization, AdminController.updateStaff)

// //TODO: update movie
// router.put('/movies/:id', AdminAuthorization, AdminController.updateMovie)

// //TODO: update theater room
// router.put('/theater-rooms/:id', AdminAuthorization, AdminController.updateTheaterRoom)


export default router