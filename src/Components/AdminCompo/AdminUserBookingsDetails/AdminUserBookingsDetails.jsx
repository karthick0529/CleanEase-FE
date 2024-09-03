import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Select, MenuItem } from '@mui/material';
import './AdminUserBookingsDetails.css'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobal } from '../../../GlobalContext/GlobalProvider';
import http from '../../../../utils/http';


const AdminUserBookingsDetails = () => {
  const navigate = useNavigate();
  const {getAllUserBookings} = useGlobal();
    const [bookings,setBookings] = useState([]);

    useEffect(() => {
        getAllUserBookings();
        getUsersBookingForAdmin();
      }, []);

    const getUsersBookingForAdmin = async()=>{
        try{
            const {data} = await http.get('/admin/get-bookings');
            setBookings(data.All_Users_Bookings)
        } catch(err){
            if (err.message === "Network Error") {
                toast.error("Connection timeout! DB not responding", { position: "top-right", autoClose: 5000 });
            } else if (err.response && err.response.status === 400) {
                toast.error(err.response.data, { position: "top-right", autoClose: 5000 });
            } else {
                toast.error(`Error while getting user bookings. Try again later: ${err.message}`, { position: "top-right", autoClose: 5000 });
            }
      }
    }


    const formatDateTime = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString();
    };

    return (
        <Container maxWidth="lg" sx={{marginBottom:"1rem"}}>
            <Typography variant="h4" component="h2" gutterBottom>
                User Bookings
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{backgroundColor:"lightgray"}}>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Type of Service</TableCell>
                            <TableCell>Service Date</TableCell>
                            <TableCell>Name of Service</TableCell>
                            <TableCell>Is Paid</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Is Confirmed</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    {bookings.length > 0 && <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking._id}>
                                <TableCell>{booking.username}</TableCell>
                                <TableCell>{booking.serviceType}</TableCell>
                                <TableCell>{formatDateTime(booking.startDate)}</TableCell>
                                <TableCell>{booking.subServiceName}</TableCell>
                                <TableCell>{booking.isAmountPaid ? "Yes": "No"}</TableCell>
                                <TableCell>{booking.status}</TableCell>
                                    
                                <TableCell>{booking.isConfirmed ? "Yes" : "No"}</TableCell>
                                    
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate(`/admin-updatebooking/${booking._id}`)}
                                    >
                                        Update Booking
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>}
                </Table>
            </TableContainer>
            <ToastContainer />
            {bookings.length == 0 && (
                <>
                    <div className="UserBookingList_Error">
                        <h3>No Booking Data To Show</h3>
                    </div>
                </>
            )}
        </Container>
    );
};

export default AdminUserBookingsDetails;
