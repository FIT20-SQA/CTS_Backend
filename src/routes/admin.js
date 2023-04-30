import express from 'express'
const router = express.Router();

import AdminController from '../controller/AdminController.js'
import AdminAuthorization from '../middlewares/AdminAuthorization.js'

router.post('/movies',AdminAuthorization, AdminController.createMovie)
router.post('/theater-rooms', AdminAuthorization, AdminController.createTheaterRoom)
router.post('/foods', AdminAuthorization, AdminController.createFood)
router.post('/drinks', AdminAuthorization, AdminController.createDrink)
router.post('/staffs', AdminAuthorization, AdminController.createStaff)
router.put('/foods/:id', AdminAuthorization, AdminController.updateFood)
router.put('/drinks/:id', AdminAuthorization, AdminController.updateDrink)
router.put('/movies/:id', AdminAuthorization, AdminController.updateMovie)
router.put('/theater-rooms/:id', AdminAuthorization, AdminController.updateTheaterRoom)

// //TODO: schedule showtime for a movie
// router.post('/showtimes', AdminAuthorization, AdminController.createShowtime)


// //TODO: update staff (lock account)
// router.put('/staffs/:id', AdminAuthorization, AdminController.updateStaff)



export default router