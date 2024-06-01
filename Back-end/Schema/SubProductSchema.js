import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const SubProductSchema= mongoose.Schema({

_id:Number,
pname:{
    type:String,
    required: [true,"Product name is required"],
    lowerCase:true,
    trim:true,
   
},
subname:{
    type:String,
    required: [true,"Product name is required"],
    lowerCase:true,
    trim:true,
  
},
subicon:{
    type:String,
    required:[true,"Product Icon is required"],
    trim : true
}

})

SubProductSchema.plugin(uniqueValidator);

const SubProductSchemaModel = mongoose.model('subproduct' , SubProductSchema,'subproduct');


export default SubProductSchemaModel;