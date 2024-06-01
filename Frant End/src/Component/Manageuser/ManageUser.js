import { useEffect, useState } from 'react';
import './ManageUser.css';
import axios from 'axios';
import { _webapiadmin } from '../webapi';

const ManageUser = () => {
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        axios.get(_webapiadmin + "manageuser").then((result) => {
            setUserDetails(result.data.userDetails);
        })
    }, []);

    const manageuserstatus = (_id, s) => {
        let apiurl = _webapiadmin + "manageuserstatus?s=" + s + "&regid=" + _id;
        axios.get(apiurl).then((result) => {
            // window.location.reload();


        })
    }

    return (
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="about-text">
                            <h2>View & Manage User Details</h2>
                            <br />



                            <table class="table table-dark table-striped">
                                <thead>
                                    <tr >
                                        <th scope="col">id</th>

                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Info</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userDetails.map((row) => (
                                            <tr>
                                                <td scope='row'>{row._id}</td>
                                                <td >{row.name}</td>
                                                <td>{row.email}</td>
                                                <td>{row.mobile}</td>
                                                <td>{row.address}</td>
                                                <td>{row.city}</td>
                                                <td>{row.gender}</td>
                                                <td>{row.info}</td>
                                                <td >

                                                    {
                                                        row.status === 0 &&
                                                        <button className='btn btn-success' onClick={() => { manageuserstatus(row._id, 'verify') }}>Verify</button>
                                                    }
                                                    {
                                                        row.status === 1 &&
                                                        <button className='btn btn-primary' onClick={() => { manageuserstatus(row._id, "block"); }}>Block</button>
                                                    }
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => { manageuserstatus(row._id, "delete") }}>Delete</button>
                                                </td>
                                            </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ManageUser;