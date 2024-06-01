
import RegisterschemaModel from "../Schema/Schema.js";
import ProductSchemaModel from "../Schema/ProductSchema.js";
import SubProductSchemaModel from "../Schema/SubProductSchema.js";

import './connection.js'

class AdminModel {
    manageUsersStatusModel(urlobj) {
        return new Promise((resolve, reject) => {
            if (urlobj.s == "block") {
                RegisterschemaModel.updateOne({ "_id": parseInt(urlobj.regid) }, { "status": 0 }, (err, result) => {
                    err ? reject(err) : resolve(result);
                })
            }
            else if (urlobj.s == "verify") {
                RegisterschemaModel.updateOne({ "_id": parseInt(urlobj.regid) }, { "status": 1 }, (err, result) => {
                    err ? reject(err) : resolve(result);
                })
            }
            else {
                RegisterschemaModel.deleteOne({ "_id": parseInt(urlobj.regid) }, (err, result) => {
                    err ? reject(err) : resolve(result);
                })
            }
        })
    }


    addProductModel(pDetails) {
        return new Promise((resolve, reject) => {
            let obj = new ProductSchemaModel(pDetails);
            obj.save((err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }
    addsubProductModel(subDetails){
        return new Promise((resolve,reject)=>{
            let obj= new SubProductSchemaModel(subDetails);
            obj.save((err,result)=>{
                err?reject(err):resolve(result);
            })
        })
    }
    fetchProduct(condition_obj) {
        return new Promise((resolve, reject) => {
            ProductSchemaModel.find(condition_obj, (err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }
    fetchsubProduct(urlobj) {
        return new Promise((resolve, reject) => {
            SubProductSchemaModel.find(urlobj,(err,result)=>{
                err ? reject(err) : resolve(result);  
            })

        })
    }

}

export default new AdminModel();