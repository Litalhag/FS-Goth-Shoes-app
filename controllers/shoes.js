// @desc    Get all shoes
// @route   GET /api/v1/shoes
// @access  Public
exports.getShoes = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all shoes' })
}

// @desc    Get single shoe
// @route   GET /api/v1/shoes/:id
// @access  Public
exports.getShoe = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show shoe ${req.params.id}` })
}

// @desc    Create new shoe
// @route   POST /api/v1/shoes
// @access  Private
exports.createShoe = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new shoe' })
}

// @desc    Update shoe
// @route   PUT /api/v1/shoes/:id
// @access  Private
exports.updateShoe = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update shoe ${req.params.id}` })
}

// @desc    Delete shoe
// @route   DELETE /api/v1/shoes/:id
// @access  Private
exports.deleteShoe = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete shoe ${req.params.id}` })
}
