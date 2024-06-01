import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './Component/Register/Register';
import Nav from './Component/nav/Nav'
import Slidebar from './Component/SideBar/Sidebar';
import New_Arrival from './Component/New-Arrival/New-Arrival';
import Product from './Component/Product/Product';
import DealOfDay from './Component/DealofTheDay/DealOfDay';
import Blog from './Component/Blog/Blog';
import Login from './Component/Register/Login';
import ResetPassword from './Component/Register/ResetPassword';
import NewPassword from './Component/Register/NewPassword';
import Footer from './Component/Footer/Footer';
import Adminpannel from './Component/adminPannel/AdminPannel';
import Userpannel from './Component/userPannel/UserPannel.js';
import Viewproduct from './Component/ViewProductComponent/ViewProduct';

import Logout from './Component/Register/Logout';
import Addproduct from './Component/addProduct/Addproduct';
import ManageUser from './Component/Manageuser/ManageUser';
import Addsubproduct from './Component/AddsubProduct/Addsubproduct';
import Viewsubproduct from './Component/ViewSubproductComponent/ViewsubProduct';
import VerifyUser from './Component/verifyUser/VerifyUser';
import Payment from './Component/Payment/Payment';
import PaymentS from './Component/Payment/PaymentS';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Slidebar />
        <Routes>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/reset-Password' element={<ResetPassword />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/newpassword/:email' element={<NewPassword />}></Route>
          <Route path='/new_arrival' element={<New_Arrival />} ></Route>
          <Route path='/dealofday' element={<DealOfDay />} ></Route>
          <Route path="/admin" element={<Adminpannel />}></Route>
          <Route path="/user" element={<Userpannel />}></Route>
          <Route path="/user/viewproduct" element={<Viewproduct />}></Route>
          <Route path="/logout" element={<Logout />}> </Route>
          <Route path="/admin/addproduct" element={<Addproduct />}> </Route>
          <Route path="/admin/manageuser" element={<ManageUser />}> </Route>
          <Route path="/admin/addsubproduct" element={<Addsubproduct />}> </Route>
          <Route path="/user/viewsubproduct/:catnm" element={<Viewsubproduct />}></Route>
          <Route path="/verifyuser/:email" element={<VerifyUser />} ></Route>
          <Route path="/user/paymentS" element={<PaymentS />}></Route>



        </Routes>

        <Footer />
      </BrowserRouter>
    </>

  );
}
export default App;