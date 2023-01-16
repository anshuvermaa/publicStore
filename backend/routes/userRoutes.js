import express from 'express'
import cors from 'cors'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.use(cors())
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.use(cors())
router.post('/login', authUser)
router.use(cors())
router
.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)
router.use(cors())
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
