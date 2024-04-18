import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import RoutesPage from '../pages/allRoutes';
import StationsPage from '../pages/stations';
import DestinationPage from '../pages/destination';
import SearchPage from '../pages/search';
import Bookings from '../pages/bookings';
import NotFound from '../pages/notFound';
import LoginPage from '../pages/login';
import SignUp from '../pages/signUp';
import ForgotPassword from '../pages/forgotPassword';
import Unauthorized from '../pages/unauthorized';
import ProtectedRoute from '../config/ProtectedRoute';
import ProfilePage from '../pages/profile';
import EditProfile from '../pages/editProfile';
import ChangePassword from '../pages/changePassword';


const RoutePage = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
            <Route path="/edit-profile" element={<ProtectedRoute element={<EditProfile />} />} />
            <Route path="/change-password" element={<ProtectedRoute element={<ChangePassword />} />} />
            <Route path="/pages/routes" element={<RoutesPage />} />
            <Route path="/pages/station" element={<StationsPage />} />
            <Route path="/pages/destination" element={<DestinationPage/>} />
            <Route path="/pages/search" element={<SearchPage/>} />
            <Route path="/pages/bookings" element={<Bookings />} />
        </Routes>
      
    </BrowserRouter>
  )
}

export default RoutePage
