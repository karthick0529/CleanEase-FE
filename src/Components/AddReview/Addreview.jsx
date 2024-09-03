import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
  duration,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import "./Addreview.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddReview() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { loginUser, createReview } = useGlobal();

  const [username, setUsername] = useState(
    `${loginUser.firstname}, ${loginUser.lastname}`
  );
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !rating) {
      return toast.warning("Required Fields User Name, Rating", {
        position: "top-rigth",
        duration: 5000,
      });
    }
    try {
      const userReview = {
        username,
        text,
        rating,
      };
      await createReview(_id, userReview);
      setSubmitted(true);

      setUsername(`${loginUser.firstname}, ${loginUser.lastname}`);
      setText("");
      setRating(0);

      setTimeout(() => setSubmitted(false), 3000);
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
        toast.error(`Error while Adding Review. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <>
      <div className="UserAddReview_Heading">
        <h2>User Reviews</h2>
      </div>
      <div className="UserAddReview_BackButton">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          variant="contained"
        >
          Back
        </Button>
      </div>

      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Add Your Review
          </Typography>
          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Thank you for your review!
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
                  Submit Review
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default AddReview;
