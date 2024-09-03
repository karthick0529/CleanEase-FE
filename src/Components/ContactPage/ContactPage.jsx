import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

function ContactPage() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContactOnClick = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');

    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  }


  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', marginBottom: 3 }}>
          We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ padding: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Get In Touch
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> support@cleanease.com
              </Typography>
              <Typography variant="body1">
                <strong>Phone:</strong> +91 123 456 7890
              </Typography>
              <Typography variant="body1">
                <strong>Address:</strong> 123 CleanEase St, Suite 100, City, State, 12345
              </Typography>
              <Typography variant="body1" textAlign="justify" sx={{ mt: 2 }}>
                Our team is available from Monday to Friday, 9:00 AM - 6:00 PM. Feel free to reach out to us during these hours, and we'll get back to you as soon as possible.
              </Typography>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ padding: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Send Us a Message
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
              >
                <TextField
                  label="Full Name"
                  variant="outlined"
                   name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  required
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
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
                />
                <Button variant="contained" onClick={handleContactOnClick} color="primary" sx={{ mt: 2 }}>
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

