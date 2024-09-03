import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Rating,
  Grid,
  Paper,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import { toast } from "react-toastify";

function UpdateReview() {
    const navigate = useNavigate();
    const {_id} = useParams();
    const {updateUserReviews, UpdateReviewFunction} = useGlobal();

    const [username, setUsername] = useState(updateUserReviews.username);
    const [text, setText] = useState(updateUserReviews.text);
    const [rating, setRating] = useState(updateUserReviews.rating);
    
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!username || !rating ){
           return toast.warning("Required Fields User Name, Rating",{
            position:"top-right",
            duration:5000,
           })
        }
        try{
            const reviewID = updateUserReviews._id;
            const updatedReview = {
                username,
                text,
                rating
            }
            await UpdateReviewFunction(_id,reviewID,updatedReview)
            setSubmitted(true);
    
            setUsername('');
            setText("");
            setRating(0);
        
            setTimeout(() => {
                setSubmitted(false);
                navigate(-1);
            }, 4000);
    
        } catch (err){
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
            toast.error(`Error while Update Review. Try again later: ${err.message}`, {
              position: "top-right",
              autoClose: 5000,
            });
          } 
        }
      };

  return (
    <>
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Button startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} variant="contained">Back</Button>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Update Review
          </Typography>
          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Succesfully Updated your review!
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Review"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <Typography component="legend">Rating</Typography>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  size="large"
                  sx={{ ml: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Update Review
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default UpdateReview;
