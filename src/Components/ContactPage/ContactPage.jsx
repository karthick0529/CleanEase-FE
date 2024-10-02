import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContactOnClick = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");

    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "32px", // Increased font size
            fontFamily: "'Georgia', serif", // Changed font family
            color: "#333",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            marginBottom: 3,
            fontSize: "20px", // Increased font size
            fontFamily: "'Georgia', serif", // Changed font family
            color: "#666",
          }}
        >
          We'd love to hear from you! Whether you have a question about our
          services, pricing, or anything else, our team is ready to answer all
          your questions.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                padding: 3,
                height: "100%",
                borderRadius: 1,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: "28px", // Increased font size
                  fontFamily: "'Georgia', serif", // Changed font family
                  color: "#333",
                }}
              >
                Get In Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  fontSize: "18px", // Increased font size
                  fontFamily: "'Georgia', serif", // Changed font family
                  color: "#555",
                }}
              >
                <strong>Email:</strong> support@sparkelpro.com
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  fontSize: "18px", // Increased font size
                  fontFamily: "'Georgia', serif", // Changed font family
                  color: "#555",
                }}
              >
                <strong>Phone:</strong> +91 123 456 7890
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 2,
                  fontSize: "18px", // Increased font size
                  fontFamily: "'Georgia', serif", // Changed font family
                  color: "#555",
                }}
              >
                <strong>Address:</strong> 123 Northern St, Luciana 100, City,
                State, 12345
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "justify",
                  fontSize: "18px", // Increased font size
                  fontFamily: "'Georgia', serif", // Changed font family
                  color: "#666",
                }}
              >
                Our team is available from Monday to Friday, 9:00 AM - 6:00 PM.
                Feel free to reach out to us during these hours, and we'll get
                back to you as soon as possible.
              </Typography>
              {/* Embed Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8534096211455!2d-74.00601568459557!3d40.71277577933145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a317e7baffb%3A0x6272cfdf02d03b8!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1637771872645!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "8px", marginTop: "20px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={2}
              sx={{
                padding: 3,
                height: "100%",
                borderRadius: 1,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: "28px", // Increased font size
                  fontFamily: "'Georgia', serif", // Changed font family
                  color: "#333",
                }}
              >
                Send Us a Message
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  label="Full Name"
                  variant="outlined"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  sx={{ width: "100%", fontSize: "18px" }} // Increased font size
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ width: "100%", fontSize: "18px" }} // Increased font size
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  required
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  sx={{ width: "100%", fontSize: "18px" }} // Increased font size
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ width: "100%", fontSize: "18px" }} // Increased font size
                />
                <Button
                  variant="contained"
                  onClick={handleContactOnClick}
                  color="primary"
                  sx={{ mt: 2, width: "100%", fontSize: "18px" }} // Increased font size
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ContactPage;
