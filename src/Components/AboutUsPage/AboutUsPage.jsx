import React from 'react';
import { Container, Grid, Paper, Typography, Box, Avatar } from '@mui/material';

function AboutUsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="subtitle1" textAlign="justify" sx={{ textAlign: 'center', marginBottom: 3 }}>
          We are dedicated to providing the best cleaning services to our customers.
        </Typography>

        <Grid container spacing={4}>
          {/* Our Mission Section */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ padding: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Mission
              </Typography>
              <Typography textAlign="justify" variant="body1">
                Our mission is to deliver top-notch cleaning services that ensure a safe and clean environment for all
                our clients. We strive for excellence in every project we undertake.
              </Typography>
            </Paper>
          </Grid>

          {/* Our Vision Section */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ padding: 3, height: '100%' }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Vision
              </Typography>
              <Typography textAlign="justify" variant="body1">
                To become the leading provider of cleaning services in the industry, known for our quality, reliability,
                and customer satisfaction.
              </Typography>
            </Paper>
          </Grid>

          {/* Team Section */}
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mt: 5 }}>
              Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {/* Team Member 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{ padding: 3, textAlign: 'center' }}>
                  <Avatar
                    alt="John Doe"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    CEO & Founder
                  </Typography>
                  <Typography textAlign="justify" variant="body1" sx={{ mt: 1 }}>
                    John is passionate about maintaining high standards in cleaning services and leading the team to
                    success.
                  </Typography>
                </Paper>
              </Grid>

              {/* Team Member 2 */}
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{ padding: 3, textAlign: 'center' }}>
                  <Avatar
                    alt="Jane Smith"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    Jane Smith
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Operations Manager
                  </Typography>
                  <Typography textAlign="justify" variant="body1" sx={{ mt: 1 }}>
                    Jane ensures that all operations run smoothly and efficiently, ensuring customer satisfaction at every step.
                  </Typography>
                </Paper>
              </Grid>

              {/* Team Member 3 */}
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} sx={{ padding: 3, textAlign: 'center' }}>
                  <Avatar
                    alt="Michael Johnson"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    Michael Johnson
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lead Technician
                  </Typography>
                  <Typography textAlign="justify" variant="body1" sx={{ mt: 1 }}>
                    Michael brings years of experience and expertise to ensure every cleaning job is done to perfection.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: 5 }}>
            <Paper elevation={2} sx={{ padding: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                Why Us ?
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Why would you choose CleanEase? We make the following promises to you:
              </Typography>
              <ul>
                <li><Typography variant="body1">Care of your house, furniture, and items like it's our own!</Typography></li>
                <li><Typography variant="body1">Use quality cleaning tools and supplies of our own (vacuum cleaners, mops, etc.).</Typography></li>
                <li><Typography variant="body1">Clean out major as well the smallest parts of a room. No "only surface" cleaning when it comes to Perfection!</Typography></li>
                <li><Typography variant="body1">Cater to loyal/regular clients with discounts.</Typography></li>
                <li><Typography variant="body1">Provide full customer service through various communication mediums.</Typography></li>
                <li><Typography variant="body1">Only professional and trained maids and cleaners will be entering your home.</Typography></li>
                <li><Typography variant="body1">Work by your requirements and special instructions. (Don't want that heirloom vase touched? No problem!)</Typography></li>
                <li><Typography variant="body1">Easy online booking.</Typography></li>
                <li><Typography variant="body1">Cleaning services that will leave a smile on your face. :)</Typography></li>
              </ul>
              <Typography textAlign="justify" variant="body1" sx={{ mt: 2 }}>
                Like what we offer? You can easily book CleanEase cleaning services based on the size of your home, or your available time and make bookings online! Of course, you can also feel free to contact us. The information is present in the Contact tab. So go book our service online now and say hello to a beautiful, professionally cleaned home!
              </Typography>
            </Paper>
          </Grid>
      </Paper>
    </Container>
  );
}

export default AboutUsPage;

