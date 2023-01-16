import express from 'express'
import cors from 'cors'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'



router.use(cors())
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.use(cors())
router.route('/myorders').get(protect, getMyOrders)
router.use(cors())
router.route('/:id').get(protect, getOrderById)
router.use(cors())
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.use(cors())
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
