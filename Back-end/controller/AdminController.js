import RegisterModel from "../Models/RegisterModel.js";
import AdminModel from "../Models/AdminModel.js";
import * as url from 'url';
import * as path from 'path';
import file from "@babel/core/lib/transformation/file/file.js";
import { resolve } from "path";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

class AdminController {


    manageUsers(condition_obj) {
        return new Promise((resolve, reject) => {
            RegisterModel.fetchUsers(condition_obj).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err)
            })
        })
    }

    manageUsersStatus(urlobj) {
        return new Promise((resolve, reject) => {
            AdminModel.manageUsersStatusModel(urlobj).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    addProductController(catname, product_title, fileobj) {
        return new Promise((resolve, reject) => {
            AdminModel.fetchProduct({}).then((result) => {


                let catfilename = catname + Date.now() + "_" + fileobj.name;
                let l = result.length;
                let _id = l == 0 ? 1 : result[l - 1]._id + 1;
                let productDetails = { _id: _id, "catname": catname, "product_title": product_title, "catfilename": catfilename };
                AdminModel.addProductModel(productDetails).then((result) => {
                    let upload_path = path.join(__dirname, "../../Bootstrap/public/assets/uploads/producticons", catfilename);
                    fileobj.mv(upload_path);
                    resolve(result)
                }).catch((err) => {
                    reject(err);
                })
            }).catch((err) => {
                reject(err);
            })

        })
    }
    fetchsubproduct(urlobj) {
        return new Promise((resolve, reject) => {
           
            AdminModel.fetchsubProduct(urlobj).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        })
    }
    fetchproduct() {
        return new Promise((resolve, reject) => {
            var condition_obj = {};
            AdminModel.fetchProduct(condition_obj).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    addsubProductController(pname, subname, subfileobj) {
        return new Promise((resolve, reject) => {
            AdminModel.fetchsubProduct({}).then((result) => {


                let l = result.length;
                let _id = l == 0 ? 1 : result[l - 1]._id + 1;
                let subcatfilename = Date.now() + "_" + subfileobj.name;
                let subproductdetails = {"_id":_id, "pname": pname, "subname": subname, "subicon": subcatfilename };

                AdminModel.addsubProductModel(subproductdetails).then((result) => {
                    let upload_path = path.join(__dirname, "../../Bootstrap/public/assets/uploads/SubProducticon", subcatfilename);
                    subfileobj.mv(upload_path);
                    resolve(result)
                }).catch((err) => {
                    reject(err);
                })


                resolve(result)

            }).catch((err) => {
                reject(err);
            })



        })
    }

}

export default new AdminController();