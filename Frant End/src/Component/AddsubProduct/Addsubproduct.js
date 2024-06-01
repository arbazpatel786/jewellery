import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { _webapiadmin } from "../webapi";

const Addsubproduct = () => {
    const [pName, setPname] = useState();
    const [SubpName, setSubpname] = useState();
    const [subproducticon, setSubproducticon] = useState();
    const [cdetails, setcdetails] = useState([]);


    useEffect(() => {
        axios.get(_webapiadmin + "addproduct").then((result) => {
            setcdetails(result.data.result);
        }).catch((err) => {

        })
    })

    const handleChange = (evt) => {
        setSubproducticon(evt.target.files[0])
    }

    const handleSubmit = (evt) => {
        console.log("form subm,it")
        evt.preventDefault();
        const formdata = new FormData();
        formdata.append("pname", pName);
        formdata.append("subname", SubpName);
        formdata.append("subicon", subproducticon);
        const config = {
            'content-type': 'multipart/form-data',
        }
        axios.post(_webapiadmin + "addsubproduct", formdata, config).then((result) => {
            // console.log(result)
            setSubpname('');
            setPname('')
        }).catch((err) => {

        })
    }


    return (
        <>

            <div class="about wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12 col-md-12">
                            <div class="about-text">
                                <h2>Add Sub Product Here!!!</h2>
                                <form onSubmit={handleSubmit} >
                                    <div class="form-group">
                                        <select value={pName} onChange={e => setPname(e.target.value)}>
                                            <option>Select Product</option>

                                            {
                                                cdetails.map((row) => (
                                                    <option>{row.catname}</option>
                                                ))
                                            }
                                        </select>



                                        <label for="email">Subproduct Name</label>
                                        <input type="name" class="form-control" value={SubpName} onChange={e => setSubpname(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="file">Sub Icon</label>
                                        <input type="file" class="form-control" onChange={handleChange} />
                                    </div>
                                    <button type="submit" class="btn btn-success">Add </button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Addsubproduct;