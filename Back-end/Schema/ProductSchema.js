import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const ProductSchema = mongoose.Schema({
    _id:Number,
    catname:{
        type:String,
        required: [true,"Product name is required"],
        lowerCase:true,
        trim:true,
        unique:true
    },
    product_title:{
        type:String,
        required: [true,"Product name is required"],
        lowerCase:true,
        trim:true,
        unique:true
    },
    catfilename:{
        type:String,
        required:[true,"Product Icon is required"],
        trim : true
    }
});

ProductSchema.plugin(uniqueValidator);

const ProductSchemaModel = mongoose.model('product',ProductSchema,"product");

export default ProductSchemaModel
