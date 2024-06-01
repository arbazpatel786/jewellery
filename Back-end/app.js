import express from "express";
import cors from 'cors';
import bodyparser from "body-parser";
import RegisterRouter from './Route/RegisterRoutes.js'
import AdminRouter from './Route/AdminRoute.js'
import fileUpload from "express-fileupload";
const port = 4001;

const app = express();
app.use(cors())
app.use(bodyparser());
app.use(fileUpload());
app.use(bodyparser.urlencoded({ extended: false }))

app.use('/webapi', RegisterRouter);
app.use('/webapiadmin', AdminRouter);
app.listen(port, () => {
    console.log("server runing");
})