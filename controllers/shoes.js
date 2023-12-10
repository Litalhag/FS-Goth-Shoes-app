import ErrorResponse from '../utils/errorResponse'
import asyncHandler from '../middleware/async'
import Shoe from '../models/Shoe'

// @desc    Get all shoes
// @route   GET /api/v1/shoes
// @access  Public
export const getShoes = asyncHandler(async (req, res, next) => {
  const shoes = await Shoe.find()

  return res
    .status(200)
    .json({ success: true, count: shoes.length, data: shoes })
})

// @desc    Get single shoe
// @route   GET /api/v1/shoes/:id
// @access  Public
export const getShoe = asyncHandler(async (req, res, next) => {
  const shoe = await Shoe.findById(req.params.id)

  if (!shoe) {
    return next(
      new ErrorResponse(`Shoe not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({ success: true, data: shoe })
})

// @desc    Create new shoe
// @route   POST /api/v1/shoes
// @access  Private
export const createShoe = asyncHandler(async (req, res, next) => {
  const shoe = await Shoe.create(req.body)

  res.status(201).json({
    success: true,
    data: shoe,
  })
})

// @desc    Update shoe
// @route   PUT /api/v1/shoes/:id
// @access  Private
export const updateShoe = asyncHandler(async (req, res, next) => {
  const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  if (!shoe) {
    return next(
      new ErrorResponse(`Shoe not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({ success: true, data: shoe })
})

// @desc    Delete shoe
// @route   DELETE /api/v1/shoes/:id
// @access  Private
export const deleteShoe = asyncHandler(async (req, res, next) => {
  const shoe = await Shoe.findByIdAndDelete(req.params.id)

  if (!shoe) {
    return next(
      new ErrorResponse(`Shoe not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({ success: true, data: {} })
})
