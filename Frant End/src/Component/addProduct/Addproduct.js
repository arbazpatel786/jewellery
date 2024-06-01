import { useState } from "react"
import axios from "axios";
import { _webapiadmin } from "../webapi";


const Addproduct = () => {
    const [pName, setPname] = useState();
    const [PrFile, setPrfile] = useState();
    const [product_title, setproduct_title] = useState();
    // const [disProject, setdisProject]= useState([]);

    const handleChange = (event) => {
        setPrfile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append('proName', pName);
        formdata.append('product_title', product_title);
        formdata.append('proFile', PrFile);
        const config = {

            'content-type': 'multipart/form-data',

        }


        axios.post(_webapiadmin + "addproduct", formdata, config).then((result) => {

            setPname('');
            setproduct_title('');
            setPrfile('');

            console.log(result)
        }).catch((err) => {

        })
    }

    return (

        <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="about-text">
                            <h2>Add Product Here!!!</h2>

                            <form onSubmit={handleSubmit} >
                                <div class="form-group">
                                    <label for="email">Product Name</label>
                                    <input type="name" class="form-control" value={pName} onChange={e => setPname(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="email">Product Detail</label>
                                    <input type="name" class="form-control" value={product_title} onChange={e => setproduct_title(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="pwd">Add Image</label>
                                    <input type="file" class="form-control" onChange={handleChange} />
                                </div>
                                <button type="submit" class="btn btn-success">Add </button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Addproduct;