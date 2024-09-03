import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./UserBookingEdit.css";
import { toast } from "react-toastify";

function UserBookingEdit() {
  const navigate = useNavigate();
  const { bookingData, editUserBooking } = useGlobal();
  const { id } = useParams();
  const [editData, setEditData] = useState({
    houseNo: "",
    streetName: "",
    district: "",
    landmark: "",
    serviceName: "",
    serviceAmount: "",
    userBookingID: "",
  });

  const [editTime, setEditTime] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editServiceType, setEditServiceType] = useState("");
  const [editServicStatus, setEditServiceStatus] = useState("");

  useEffect(() => {
    const newData = bookingData.filter((ele) => ele._id == id);
    const datetime = new Date(newData[0].startDate + 19800000).toISOString();
    const datetimeArr = datetime.split("T");
    setEditDate(datetimeArr[0]);
    setEditTime(datetimeArr[1].slice(0, 5));
    setEditServiceType(newData[0].serviceType);
    setEditServiceStatus(newData[0].status);

    const addressArr = newData[0].address.split(", ");
    setEditData((prev) => {
      return {
        ...prev,
        houseNo: addressArr[0],
        streetName: addressArr[1],
        district: addressArr[2],
        landmark: addressArr[3],
        serviceName: newData[0].subServiceName,
        serviceAmount: newData[0].amount,
        userBookingID: newData[0]._id,
      };
    });
  }, []);

  const handleEditClick = async (e) => {
    e.preventDefault();

    if (!editData.houseNo || !editData.streetName || !editData.district) {
      return toast.warning("Required House No, Street Name, District", {
        position: "top-right",
        duration: 5000,
      });
    }

    const editBookingDate = `${editDate}T${editTime}`;
    const editStringDate = new Date(editBookingDate).toString();
    const editStartDate = Date.parse(editStringDate);
    const address = `${editData.houseNo}, ${editData.streetName}, ${editData.district}, ${editData.landmark}`;

    const updatedContent = {
      address,
      date: editStartDate,
      serviceType: editServiceType,
      status: editServicStatus,
      userBookingID: editData.userBookingID,
    };

    if (editStartDate < Date.now()) {
      toast.error("Cant Edit to past date", {
        position: "top-right",
        duration: 5000,
      });
    } else {
      try {
        await editUserBooking(updatedContent);
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
          toast.error(
            `Error while Edit Booking. Try again later: ${err.message}`,
            {
              position: "top-right",
              autoClose: 5000,
            }
          );
        }
      }
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div className="UserBookingEdit_Heading">
        <h2>User Booking Edit</h2>
      </div>
      <div className="UserBookingEdit_BackButton">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="contained"
        >
          Back
        </Button>
      </div>

      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          marginBottom: "1rem",
          p: 3,
          mt: 5,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography
          textAlign="center"
          sx={{ fontSize: "2rem", fontWeight: "600" }}
          variant="h4"
          gutterBottom
        >
          Edit Booked Service
        </Typography>
        <form onSubmit={handleEditClick}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Service Name"
                value={editData.serviceName}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Service Charges"
                value={editData.serviceAmount}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="House No."
                value={editData.houseNo}
                name="houseNo"
                onChange={handleEditChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Street"
                value={editData.streetName}
                name="streetName"
                onChange={handleEditChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="District"
                value={editData.district}
                name="district"
                onChange={handleEditChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Landmark"
                value={editData.landmark}
                name="landmark"
                onChange={handleEditChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="service-type-label">Service Type</InputLabel>
                <Select
                  labelId="service-type-label"
                  value={editServiceType}
                  onChange={(e) => setEditServiceType(e.target.value)}
                  label="Service Type"
                  required
                >
                  <MenuItem value="one-time">One Time</MenuItem>
                  <MenuItem value="recurring">Recurring</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="service-status-label">
                  Service Status
                </InputLabel>
                <Select
                  labelId="service-status-label"
                  value={editServicStatus}
                  onChange={(e) => setEditServiceStatus(e.target.value)}
                  label="Service Status"
                  required
                >
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Ongoing">Ongoing</MenuItem>
                  <MenuItem value="Not Completed">Not-Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="Date_lab" htmlFor="Date">
                Date
              </label>
              <div className="Date">
                <input
                  style={{ cursor: "pointer" }}
                  id="Date"
                  type="date"
                  required
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <label className="Time_lab" htmlFor="Time">
                Time
              </label>
              <div className="Time">
                <input
                  style={{ cursor: "pointer" }}
                  id="Time"
                  type="time"
                  required
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Update Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

export default UserBookingEdit;
