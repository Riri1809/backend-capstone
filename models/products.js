import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantityInStock: {
    type: Number,
    required: true,
  },
  reorderLevel: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Product', productsSchema);


