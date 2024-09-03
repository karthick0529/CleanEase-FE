import React, { useEffect, useState } from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./UserBooking.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


function UserBooking() {
  const navigate = useNavigate();

  const { getUserBookings, razorPayBooking, bookingData, deleteBooking } = useGlobal();

  const [sortByServiceType, setSortByServiceType] = useState("All");
  const [filterByStatus, setFilterByStatus] = useState("All");
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    getUserBookings();
  }, []);

  const handleSelect = (e) => {
    setSortByServiceType(e.target.value);
  };

  const handleSelectStatus = (e) => {
    setFilterByStatus(e.target.value);
  };

  useEffect(() => {
    if (bookingData.length > 0) {
      if (sortByServiceType == "All" && filterByStatus == "All") {
        setMainData(bookingData);
      }
      if (sortByServiceType == "one-time" && filterByStatus == "All") {
        const newData = bookingData.filter(
          (ele) => ele.serviceType == "one-time"
        );
        setMainData(newData);
      }
      if (sortByServiceType == "recurring" && filterByStatus == "All") {
        const newData = bookingData.filter(
          (ele) => ele.serviceType == "recurring"
        );
        setMainData(newData);
      }
      if (sortByServiceType == "All" && filterByStatus == "Completed") {
        const newData = bookingData.filter((ele) => ele.status == "Completed");
        setMainData(newData);
      }
      if (sortByServiceType == "All" && filterByStatus == "Ongoing") {
        const newData = bookingData.filter((ele) => ele.status == "Ongoing");
        setMainData(newData);
      }
      if (sortByServiceType == "All" && filterByStatus == "Not Completed") {
        const newData = bookingData.filter(
          (ele) => ele.status == "Not Completed"
        );
        setMainData(newData);
      }
      if (sortByServiceType == "one-time" && filterByStatus == "Completed") {
        const newData = bookingData.filter(
          (ele) => ele.status == "Completed" && ele.serviceType == "one-time"
        );
        setMainData(newData);
      }
      if (sortByServiceType == "one-time" && filterByStatus == "Ongoing") {
        const newData = bookingData.filter(
          (ele) => ele.status == "Ongoing" && ele.serviceType == "one-time"
        );
        setMainData(newData);
      }
      if (
        sortByServiceType == "one-time" &&
        filterByStatus == "Not Completed"
      ) {
        const newData = bookingData.filter(
          (ele) =>
            ele.status == "Not Completed" && ele.serviceType == "one-time"
        );
        setMainData(newData);
      }
      if (sortByServiceType == "recurring" && filterByStatus == "Completed") {
        const newData = bookingData.filter(
          (ele) => ele.status == "Completed" && ele.serviceType == "recurring"
        );
        setMainData(newData);
      }
      if (
        sortByServiceType == "recurring" &&
        filterByStatus == "Not Completed"
      ) {
        const newData = bookingData.filter(
          (ele) =>
            ele.status == "Not Completed" && ele.serviceType == "recurring"
        );
        setMainData(newData);
      }
      if (sortByServiceType == "recurring" && filterByStatus == "Ongoing") {
        const newData = bookingData.filter(
          (ele) => ele.status == "Ongoing" && ele.serviceType == "recurring"
        );
        setMainData(newData);
      }
    }
  }, [bookingData, sortByServiceType, filterByStatus]);

  const UpdateRazorPayBooking = async (amount, uniqueBookingID) => {
    try{
      await razorPayBooking(amount, uniqueBookingID);
      getUserBookings();
    } catch (err){
      if (err.message === "Network Error") {
        toast.error("Connection timeout! DB not responding", { position: "top-right", autoClose: 5000 });
    } else if (err.response && err.response.status === 400) {
        toast.error(err.response.data, { position: "top-right", autoClose: 5000 });
    } else {
        toast.error(`Error while Payment. Try again later: ${err.message}`, { position: "top-right", autoClose: 5000 });
    }
    }
  }

  return (
    <>
    <div className="UserBooking_Heading">
        <h2>User Booking Data</h2>
    </div>
      <div className="Table_Top">
        <Box sx={{ minWidth: 120, padding: "0 5px" }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Filter by service type
            </InputLabel>
            <NativeSelect
              defaultValue="All"
              onChange={handleSelect}
              inputProps={{
                name: "filter",
                id: "selectTag",
              }}
            >
              <option value="All">All</option>
              <option value="one-time">One-Time</option>
              <option value="recurring">Recurring</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, padding: "0 5px" }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Filter by Status
            </InputLabel>
            <NativeSelect
              defaultValue="All"
              onChange={handleSelectStatus}
              inputProps={{
                name: "filterStatus",
                id: "selectTag",
              }}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Not Completed">Not Completed</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </div>
      <TableContainer sx={{marginBottom:"1rem"}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="responsive table">
          <TableHead sx={{ backgroundColor: "lightgray" }}>
            <TableRow>
              <TableCell>Service Name</TableCell>
              <TableCell align="center">Service Date</TableCell>
              <TableCell align="center">Service Time</TableCell>
              <TableCell align="center">Service Type</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Is Paid</TableCell>
              <TableCell align="center">Is Confirmed</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Pay Now</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          {bookingData.length > 0 ? (
            <TableBody>
              {mainData.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.subServiceName}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(row.startDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(row.startDate).toLocaleTimeString()}
                  </TableCell>
                  <TableCell align="center">{row.serviceType}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">
                    {row.isAmountPaid ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="center">{row.isConfirmed ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center"><Button variant="contained" disabled={row.isAmountPaid ? true : false} onClick={()=>UpdateRazorPayBooking(row.amount,row.uniqueBookingID)} >Pay Now!</Button></TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      disabled={row.status == "Ongoing" || row.status == "Completed" ? true : false}
                      onClick={() => navigate(`/user-booking/edit/${row._id}`)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      disabled={row.status == "Ongoing" ? true : false}
                      onClick={() => deleteBooking(row._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={()=>navigate(`/user-create-review/${row.serviceID}`)}
                      color="secondary"
                      disabled={
                        row.status == "Ongoing" || row.status == "Not Completed"
                          ? true
                          : false
                      }
                    >
                      <ReviewsIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            ""
          )}
        </Table>
      </TableContainer>
      {bookingData.length == 0 && (
        <>
          <div className="UserBooking_Error">
            <h3>No Booking Data To Show</h3>
          </div>
        </>
      )}
    </>
  );
}

export default UserBooking;
