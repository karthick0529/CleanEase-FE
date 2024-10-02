import React, { useState, useEffect } from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Avatar,
} from "@mui/material";
import BootCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";
import "./UserProfile.css"; // Import the custom CSS

function UserProfile() {
  const {
    getUserProfile,
    user,
    updateUserProfile,
    getUserBookings,
    bookingData,
  } = useGlobal();

  const [isEditing, setIsEditing] = useState(false);
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [userTotalBookings, setUserTotalBookings] = useState(0);
  const [userOngoingBooking, setUserOngoingBooking] = useState(0);
  const [userCompletedBooking, setUserCompletedBooking] = useState(0);
  const [userPendingBooking, setUserPendingBooking] = useState(0);

  useEffect(() => {
    getUserProfile();
    getUserBookings();
  }, []);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.firstname);
      setLastName(user.lastname);
    }
    if (bookingData.length > 0) {
      setUserTotalBookings(bookingData.length);
      const ongoingStat = bookingData.filter((ele) => ele.status === "Ongoing");
      setUserOngoingBooking(ongoingStat.length);
      const completedStat = bookingData.filter(
        (ele) => ele.status === "Completed"
      );
      setUserCompletedBooking(completedStat.length);
      const notCompletedStat = bookingData.filter(
        (ele) => ele.status === "Not Completed"
      );
      setUserPendingBooking(notCompletedStat.length);
    }
  }, [user, bookingData]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    if (!firstname || !lastname || !email) {
      return toast.warning("Required Fields: First Name, Last Name, Email", {
        position: "top-right",
        duration: 5000,
      });
    }
    try {
      await updateUserProfile(firstname, lastname, email);
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
          `Error while updating User Profile. Try again later: ${err.message}`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      }
    }
    setIsEditing(false);
  };

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInAnimation {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animated-container {
            animation: slideIn 1s ease-out;
          }

          .card-slide {
            animation: fadeInAnimation 0.6s ease-out;
          }

          .fadeIn-card {
            animation: fadeInAnimation 0.6s ease-out;
          }

          .scale-button {
            transition: transform 0.3s ease;
          }

          .scale-button:hover {
            transform: scale(1.05);
          }
        `}
      </style>
      <div
        className="animated-container"
        style={{
          textAlign: "center",
          margin: "20px 0",
          padding: "20px",
          fontSize: "2.5rem",
          fontWeight: "bold",
          fontFamily: `"Times New Roman", "Arial", sans-serif`,
          backgroundColor: "whitesmoke",
          borderRadius: "15px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: 0 }}>User Profile With Mini-Dashboard</h2>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "whitesmoke",
        }}
      >
        <Row xs={1} md={2} className="g-4">
          {[
            "Total Bookings",
            "Total Completed Bookings",
            "Total Ongoing Bookings",
            "Total Pending Services",
          ].map((text, index) => (
            <Col key={index}>
              <BootCard
                border="light"
                style={{
                  width: "100%",
                  margin: "0 1rem",
                  backgroundColor: "#e0f7fa", // Light blue background
                  color: "#333",
                  fontFamily: `"Roboto", "Arial", sans-serif`,
                  animation: "fadeInAnimation 0.6s ease-out",
                }}
                className="card-slide"
              >
                <BootCard.Body style={{ textAlign: "center" }}>
                  <BootCard.Text style={{ fontWeight: "bold" }}>
                    {text} :
                  </BootCard.Text>
                  <BootCard.Title>
                    <p
                      style={{
                        color: "#333",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        margin: "0",
                      }}
                    >
                      {index === 0
                        ? userTotalBookings
                        : index === 1
                        ? userCompletedBooking
                        : index === 2
                        ? userOngoingBooking
                        : userPendingBooking}
                    </p>
                  </BootCard.Title>
                </BootCard.Body>
              </BootCard>
            </Col>
          ))}
        </Row>
      </div>

      <Grid container justifyContent="center" sx={{ padding: 1 }}>
        <Card
          sx={{
            width: "100%",
            maxWidth: { xs: 340, sm: 500, md: 600 },
            m: 2,
            backgroundColor: "white",
            color: "#333",
            fontFamily: `"Roboto", "Arial", sans-serif`,
          }}
          className="fadeIn-card"
        >
          <CardContent>
            <Box display="flex" justifyContent="center" mb={2}>
              <Avatar
                alt={`${firstname} ${lastname}`}
                sx={{
                  width: 80,
                  height: 80,
                  fontSize: "2rem",
                  color: "white",
                  backgroundColor: "#333",
                }}
              >
                {firstname && firstname[0]}
                {lastname && lastname[0]}
              </Avatar>
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "900",
                textAlign: "center",
                color: "#333",
                fontSize: "1.8rem",
                marginBottom: "2rem",
                fontFamily: `"Roboto", "Arial", sans-serif`,
              }}
            >
              User Details
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="First Name"
                variant="outlined"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={!isEditing}
                InputLabelProps={{ style: { color: "#333" } }}
                InputProps={{ style: { color: "#333" } }}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                disabled={!isEditing}
                InputLabelProps={{ style: { color: "#333" } }}
                InputProps={{ style: { color: "#333" } }}
              />
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                InputLabelProps={{ style: { color: "#333" } }}
                InputProps={{ style: { color: "#333" } }}
              />
            </Box>
          </CardContent>

          <CardActions>
            {isEditing ? (
              <Button
                size="small"
                sx={{
                  backgroundColor: "#007bff", // Blue button color
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0056b3", // Darker blue on hover
                  },
                }}
                className="scale-button"
                onClick={handleSave}
              >
                Save
              </Button>
            ) : (
              <Button
                size="small"
                sx={{
                  backgroundColor: "#007bff",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
                className="scale-button"
                onClick={handleEditToggle}
              >
                Edit
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default UserProfile;
