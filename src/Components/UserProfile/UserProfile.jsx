import React, { useState, useEffect } from 'react';
import { useGlobal } from '../../GlobalContext/GlobalProvider';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Avatar
} from '@mui/material';
import BootCard from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './UserProfile.css'
import { toast } from 'react-toastify';

function UserProfile() {
  const {getUserProfile, user, updateUserProfile, getUserBookings, bookingData } = useGlobal();

  const [isEditing, setIsEditing] = useState(false);
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [userTotalBookings,setUserTotalBookings] = useState(0);
  const [userOngoingBooking,setUserOngoingBooking] = useState(0);
  const [userCompletedBooking,setUserCompletedBooking] = useState(0);
  const [userPendingBooking,setUserPendingBooking] = useState(0);

  useEffect(()=>{
    getUserProfile();
    getUserBookings();
  },[])


  useEffect(()=>{
    if(user){
      setEmail(user.email);
      setFirstName(user.firstname);
      setLastName(user.lastname);
    }
    if(bookingData.length > 0){
      setUserTotalBookings(bookingData.length);
      const ongoingStat = bookingData.filter((ele)=>ele.status == "Ongoing")
      setUserOngoingBooking(ongoingStat.length);
      const completedStat = bookingData.filter((ele)=>ele.status == "Completed")
      setUserCompletedBooking(completedStat.length);
      const notCompletedStat = bookingData.filter((ele)=>ele.status == "Not Completed")
      setUserPendingBooking(notCompletedStat.length);
    }
  },[user,bookingData])


  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async() => {
    if(!firstname || !lastname || !email){
      return toast.warning("Required Fields First Name, Last Name, Email",{
        position:"top-right",
        duration:5000,
      })
    }
    try{
      await updateUserProfile(firstname, lastname, email);
    } catch(err){
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
          `Error while Update User Profile. Try again later: ${err.message}`,
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
    <div className="UserProfile_Heading">
        <h2>User Profile With Mini-Dashdoard</h2>
    </div>
    <div className='BootCard_UserDetails'>
    <Row xs={1} md={2} className="g-4">
      
        <Col>
          <BootCard border="light" bg="primary" text='light' style={{width:"100%", margin:"0 1rem"}}>
            <BootCard.Body>
              <BootCard.Text>
              Total Bookings :
              </BootCard.Text>
              <BootCard.Title>
                <p style={{color:"blue"}} className='UserBootPara'>{userTotalBookings}</p>
              </BootCard.Title>
            </BootCard.Body>
          </BootCard>
        </Col>

        <Col>
          <BootCard border="light" bg="success" text='light' style={{width:"100%", margin:"0 1rem"}}>
            <BootCard.Body>
              <BootCard.Text>
              Total Completed Bookings :
              </BootCard.Text>
              <BootCard.Title>
                <p style={{color:"green"}} className='UserBootPara'>{userCompletedBooking}</p>
              </BootCard.Title>
            </BootCard.Body>
          </BootCard>
        </Col>

        <Col>
          <BootCard border="light" bg="warning" text='light' style={{width:"100%", margin:"0 1rem"}}>
            <BootCard.Body>
              <BootCard.Text>
                Total Ongoing Bookings :
              </BootCard.Text>
              <BootCard.Title>
                <p style={{color:"orange"}} className='UserBootPara'>{userOngoingBooking}</p>
              </BootCard.Title>
            </BootCard.Body>
          </BootCard>
        </Col>

        <Col>
          <BootCard border="light" bg="dark" text='light' style={{width:"100%", margin:"0 1rem"}}>
            <BootCard.Body>
              <BootCard.Text>
                Total Pending Services :
              </BootCard.Text>
              <BootCard.Title>
                <p style={{color:"black"}} className='UserBootPara'>{userPendingBooking}</p>
              </BootCard.Title>
            </BootCard.Body>
          </BootCard>
        </Col>

    </Row>
    </div>

<Grid container justifyContent="center" sx={{ padding: 1 }}>
      <Card sx={{ 
        width: '100%', 
        maxWidth: { xs: 340, sm: 500, md: 600 },  // Adjust widths based on screen size
        m: 2, 
         
      }}>
        <CardContent>
          {/* Avatar */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar
              alt={`${firstname} ${lastname}`}
              sx={{ width: 80, height: 80 }}
            >
              {firstname && firstname[0]}{lastname && lastname[0]}
            </Avatar>
          </Box>
          
          {/* User Details Heading */}
          <Typography 
            variant="h5" 
            component="div"  
            sx={{
              fontWeight: "900", 
              textAlign: "center", 
              color: "#333", 
              fontSize: "1.6rem", 
              marginBottom: "2rem",  
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)"
            }} 
            gutterBottom
          >
            User Details
          </Typography>
          
          {/* Form Fields */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              label="First Name"
              variant="outlined"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!isEditing}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              disabled={!isEditing}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
            />
          </Box>
        </CardContent>

        {/* Action Buttons */}
        <CardActions>
          {isEditing ? (
            <Button size="small" color="primary" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button size="small" color="primary" onClick={handleEditToggle}>
              Edit
            </Button>
          )}
          {isEditing && (
            <Button
              size="small"
              color="secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
    </>
  )
}

export default UserProfile
