import express from 'express'
import {
  getShoes,
  getShoe,
  createShoe,
  updateShoe,
  deleteShoe,
} from '../controllers/shoes.js'

const router = express.Router()

router.route('/').get(getShoes).post(createShoe)

router.route('/:id').get(getShoe).put(updateShoe).delete(deleteShoe)

export default router
