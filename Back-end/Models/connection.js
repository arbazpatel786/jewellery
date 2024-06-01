
import mongoose from "mongoose";
const url = "mongodb://localhost:27017/reactbatch910";
mongoose.set('strictQuery', true);
mongoose.connect(url);
console.log("Successfully connected to mongodb database....");