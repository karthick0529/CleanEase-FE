import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../Home/Home';
import Register from '../Register/Register';
import RegisterCheck from '../RegisterCheck/RegisterCheck';
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PasswordTokenCheck from '../PasswordTokenCheck/PasswordTokenCheck';
import NewPasswordUpdate from '../NewPasswordUpdate/NewPasswordUpdate';
import UserBooking from '../UserBooking/UserBooking';
import UserProfile from '../UserProfile/UserProfile';
import Notifications from '../Notifications/Notifications';
import Logout from '../Logout/Logout';
import ServicePage from '../SevicePage/ServicePage';
import BookingPage from '../BookingPage/BookingPage';
import UserBookingEdit from '../UserBookingEdit/UserBookingEdit';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ContactPage from '../ContactPage/ContactPage';
import UserReviewTabel from '../UserReviewTabel/UserReviewTabel';
import AddReview from '../AddReview/Addreview';
import UpdateReview from '../UpdateReview/UpdateReview';
import UserCheckList from '../ChecklistCompo/UserChecklist';
import AdminRoute from './AdminRoute';
import AdminUserBookingsDetails from '../AdminCompo/AdminUserBookingsDetails/AdminUserBookingsDetails';
import AdminUserBookingEdit from '../AdminCompo/AdminUserBookingEdit/AdminUserBookingEdit';
import AdminLogOut from '../AdminCompo/AdminLogOut/AdminLogOut';


function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>  {/* //CHART//URL COUNT//TOTAK CLICK COUNT//URL CREATED PER DAY FOR PAST MONTH// */}
        <Route path='/:cleanServiceID' element={<ServicePage/>}/>
        <Route path='/user-review/:_id' element={<UserReviewTabel/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path='/register' element={<Register/>}/> {/* //FORM--> firstname, lastname, email, password --> register auth to email */}
        <Route path='/verify-register-token/:registerToken' element={<RegisterCheck/>}/> {/* // VERIFY registerToken --> Login message */}
        <Route path='/login' element={<Login/>}/> {/* //Login form --> email, password. check for active status --> set token in header */}
        <Route path='/forgot-password' element={<ForgotPassword/>}/> {/* // Password reset form --> email auth passtoken */}
        <Route path='/verify-password-token/:passResetToken' element={<PasswordTokenCheck/>}/> {/* //VERIFY passResetToken redirect to new password */}
        <Route path='/forgot-password/reset-pass/:passResetToken' element={<NewPasswordUpdate/>}/> {/* //FORM --> newPassword, re-enter newPassword --> Login msg */}
        <Route element={<PrivateRoute />}>
          <Route path='/user-profile' element={<UserProfile/>}/> 
          <Route path='/user-notifications' element={<Notifications/>}/> 
          <Route path='/user-bookings' element={<UserBooking/>}/>
          <Route path='/user-booking/edit/:id' element={<UserBookingEdit/>}/>
          <Route path='/user-create-booking/:cleanSubCategoriesID' element={<BookingPage/>}/>
          <Route path='/user-create-review/:_id' element={<AddReview/>}/>
          <Route path='/user-cehcklist' element={<UserCheckList/>}/>
          <Route path='/user-update-review/:_id' element={<UpdateReview/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path="/admin-managebooking" element={<AdminUserBookingsDetails/>}/>
          <Route path="/admin-updatebooking/:bookingID" element={<AdminUserBookingEdit/>}/>
          <Route path='/admin-logout' element={<AdminLogOut/>}/>
        </Route>
      </Routes>
    </>
  )
}


export default Routing
