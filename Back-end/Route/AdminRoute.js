import express from 'express';
import * as url  from 'url';
import AdminController from '../controller/AdminController.js';

const router =  express.Router();


router.get('/manageuser',(req,res)=>{
    AdminController.manageUsers({"role":"user"}).then((result)=>{
res.json({"userDetails":result})
    }).catch((err)=>{
console.log(err)
    })
})

router.get('/manageuserstatus',(req,res)=>{
const urlobj= url.parse(req.url , true).query;
AdminController.manageUsersStatus(urlobj).then((result)=>{
    res.json({"status":1})
}).catch((err)=>{
    console.log(err);
})
})

router.post('/addproduct',(req,res)=>{
 
    AdminController.addProductController(req.body.proName,req.body.product_title,req.files.proFile).then((result)=>{
        res.json({"result":"SuccessFully send"})
    }).catch((err)=>{

    })
    
})
router.get('/fetchsubproduct',(req,res)=>{
    let urlobj = url.parse(req.url,true).query;
    AdminController.fetchsubproduct(urlobj).then((result)=>{
        res.json({"result":result})
    }).catch((err)=>{

    })
})

router.get('/addproduct',(req,res)=>{
    AdminController.fetchproduct().then((result)=>{
        res.json({"result":result})
    }).catch((err)=>{

    })
})

router.post('/addsubproduct', (req,res)=>{
    AdminController.addsubProductController(req.body.pname,req.body.subname,req.files.subicon).then((result)=>{
        res.json({"result":"Succesfully"})
    }).catch((err)=>{
res.json({"Error":err})

    })
})

export default router