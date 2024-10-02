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
  FormControl,
  InputLabel,
  NativeSelect,
  Button,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Ensure you have this for toast notifications

function UserBooking() {
  const navigate = useNavigate();
  const { getUserBookings, razorPayBooking, bookingData, deleteBooking } =
    useGlobal();

  const [sortByServiceType, setSortByServiceType] = useState("All");
  const [filterByStatus, setFilterByStatus] = useState("All");
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    getUserBookings();
  }, [getUserBookings]);

  const handleSelect = (e) => {
    setSortByServiceType(e.target.value);
  };

  const handleSelectStatus = (e) => {
    setFilterByStatus(e.target.value);
  };

  useEffect(() => {
    if (bookingData && bookingData.length > 0) {
      let filteredData = bookingData;

      if (sortByServiceType !== "All") {
        filteredData = filteredData.filter(
          (ele) => ele.serviceType === sortByServiceType
        );
      }

      if (filterByStatus !== "All") {
        filteredData = filteredData.filter(
          (ele) => ele.status === filterByStatus
        );
      }

      setMainData(filteredData);
    } else {
      setMainData([]); // Set mainData to an empty array if bookingData is undefined or empty
    }
  }, [bookingData, sortByServiceType, filterByStatus]);

  const UpdateRazorPayBooking = async (amount, uniqueBookingID) => {
    try {
      await razorPayBooking(amount, uniqueBookingID);
      getUserBookings();
    } catch (err) {
      if (err.message === "Network Error") {
        toast.error("Connection timeout! DB not responding", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (err.response && err.response.status === 400) {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error(`Error while Payment. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <>
      <div
        className="UserBooking_Heading"
        style={{
          animation: "fadeIn 1s ease-in-out",
          fontSize: "24px",
          marginBottom: "1rem",
        }}
      >
        <h2>User Booking Data</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div style={{ flex: 1, padding: "0 10px" }}>
          <Box sx={{ minWidth: 120 }}>
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
        </div>
        <div style={{ flex: 1, padding: "0 10px" }}>
          <Box sx={{ minWidth: 120 }}>
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
      </div>
      <TableContainer
        sx={{
          marginBottom: "1rem",
          backgroundColor: "#87CEEB", // Sky blue color for the container
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="responsive table">
          <TableHead
            sx={{
              backgroundColor: "#B0E0E6", // Lighter sky blue color for the header
            }}
          >
            <TableRow>
              <TableCell style={{ fontSize: "16px" }}>Service Name</TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Service Date
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Service Time
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Service Type
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Address
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Amount
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Is Paid
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Is Confirmed
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Status
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Pay Now
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          {mainData.length > 0 ? (
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
                  <TableCell align="center">
                    {row.isConfirmed ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color={row.isAmountPaid ? "success" : "error"}
                      onClick={() =>
                        UpdateRazorPayBooking(row.amount, row.uniqueBookingID)
                      }
                      style={{
                        animation: !row.isAmountPaid
                          ? "pulse 1.5s infinite"
                          : "none",
                      }}
                    >
                      {row.isAmountPaid ? "Paid" : "Pay Now!"}
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <div className="icon-button-container">
                      <IconButton
                        className="icon-button"
                        style={{ color: "black" }} // Default black color
                        disabled={
                          row.status === "Ongoing" || row.status === "Completed"
                        }
                        onClick={() =>
                          navigate(`/user-booking/edit/${row._id}`)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        className="icon-button"
                        style={{ color: "black" }} // Default black color
                        disabled={row.status === "Ongoing"}
                        onClick={() => deleteBooking(row._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        className="icon-button"
                        style={{ color: "black" }} // Default black color
                        onClick={() =>
                          navigate(`/user-create-review/${row.serviceID}`)
                        }
                        disabled={
                          row.status === "Ongoing" ||
                          row.status === "Not Completed"
                        }
                      >
                        <ReviewsIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={11} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "2rem",
                      fontSize: "20px",
                    }}
                  >
                    No Data Found
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}

export default UserBooking;
