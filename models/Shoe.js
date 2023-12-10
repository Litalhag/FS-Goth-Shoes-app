import mongoose from 'mongoose'
import slugify from 'slugify'

const ShoeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [30, 'Name can not be more than 30 characters'],
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [39, 'Description can not be more than 39 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please add price'],
      min: [1, 'Price cannot be less than 1.'],
    },
    image: {
      type: String,
      required: [true, 'Please add an image'],
      match: [
        /\.(jpeg|jpg|gif|png|webp)(\?.*)?$/i,
        'Please use a valid image URL',
      ],
    },
  },
  {
    toJSON: {
      virtuals: true, // Include virtuals when document is converted to JSON
      transform: function (_, ret) {
        ret.id = ret._id // Add an 'id' field using the value of '_id'
        delete ret._id // Remove the '_id' field
        delete ret.__v // Remove the '__v' field (version key)
      },
    },
    toObject: {
      virtuals: true, // Include virtuals when document is converted to a plain object
      transform: function (_, ret) {
        ret.id = ret._id // Add an 'id' field using the value of '_id'
        delete ret._id // Remove the '_id' field
        delete ret.__v // Remove the '__v' field (version key)
      },
    },
  }
)

// Virtual for formatted price with currency symbol
ShoeSchema.virtual('formattedPrice').get(function () {
  return `$${this.price.toFixed(2)}` // Formats the price as a string with a dollar sign
})

// Virtual for generating a thumbnail image URL
ShoeSchema.virtual('thumbnailImage').get(function () {
  // Assumes the thumbnail image has a specific suffix in the filename
  return this.image.replace(/(\.[\w\d_-]+)$/i, '-thumbnail$1')
})

// Create shoe slug from the name
ShoeSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

export default mongoose.model('Shoe', ShoeSchema)

// 'ret.id = ret._id' doesn't replace _id with id,
// but rather it copies the value of _id to a new field called id.
// This means that after this transformation, the document object will have both _id and id fields with the same value.
// The purpose of doing this is to create a more standard or familiar field name (id) that can be used in your application or API responses.
// Virtuals=Mongoose are special properties that used on schemas which don't get saved directly to MongoDB database.
// They're calculated fields that can used like any other field in the model, but are created dynamically using other values in the document.
// Mongoose Schema Transformations and Virtuals client example:
// {
//   "id": "1",
//   "name": "Beetlejuice Boots",
//   "description": "Best boots for a gothic party",
//   "formattedPrice": "$290.00",
//   "thumbnailImage": "https://raw.githubusercontent.com/Litalhag/FS-Goth-Shoes-app/main/images/beetlejuiceBoots-thumbnail.jpg",
//   "price": 290, // original price field
//   "image": "https://raw.githubusercontent.com/Litalhag/FS-Goth-Shoes-app/main/images/beetlejuiceBoots.jpg" // original image field
// }
