//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const PaymentSchema = mongoose.Schema({
  _id: Number,
  uid: String,
  amount: String,
  info: String
});

// Apply the uniqueValidator plugin to RegisterSchema.
PaymentSchema.plugin(uniqueValidator);

// compile schema to model
const PaymentSchemaModel = mongoose.model('p_tmp', PaymentSchema ,'payment');

export default PaymentSchemaModel