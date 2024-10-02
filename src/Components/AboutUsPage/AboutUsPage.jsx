import React from "react";
import { Container, Grid, Paper, Typography, Avatar, Box } from "@mui/material";
import "./AboutUsPage.css";

function AboutUsPage() {
  const whyUsText = [
    "Care of your house, furniture, and items like it's our own! 🏠",
    "Use quality cleaning tools and supplies of our own (vacuum cleaners, mops, etc.). 🧹",
    "Clean out major as well as the smallest parts of a room. No 'only surface' cleaning when it comes to Perfection! ✨",
    "Cater to loyal/regular clients with discounts. 💸",
    "Provide full customer service through various communication mediums. 📞",
    "Only professional and trained maids and cleaners will be entering your home. 👷‍♀️",
    "Work by your requirements and special instructions. (Don't want that heirloom vase touched? No problem!) 🏺",
    "Easy online booking. 💻",
    "Cleaning services that will leave a smile on your face. 😊",
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={3} sx={{ padding: 4 }} className="main-paper">
        {/* Slideshow Section */}
        <div className="slideshow-container">
          <div className="slideshow">
            <img src="./About.jpg" alt="About Us Hero" className="slideshow-image" />
            <img src="./About1.jpg" alt="About Us Hero" className="slideshow-image" />
            <img src="./About2.jpg" alt="About Us Hero" className="slideshow-image" />
          </div>
        </div>

        {/* Main Heading */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            paddingTop: "50px",
            letterSpacing: "1.5px",
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          About Us
        </Typography>

        {/* Subtext */}
        <Typography
          variant="subtitle1"
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "#0e0d0d",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
            lineHeight: "1.6",
            fontFamily: "Arial, sans-serif",
          }}
        >
          We are dedicated to providing the best cleaning services to our customers.
        </Typography>

        <Grid container spacing={4}>
          {/* Our Mission Section */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={2}
              sx={{ padding: 3, height: "100%" }}
              style={{
                fontFamily: "'Roboto', sans-serif",
                padding: "24px",
                backgroundColor: "#e0f7fa",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                Our Mission
              </Typography>
              <Typography
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                Our mission is to deliver top-notch cleaning services that ensure a safe and clean environment for all our clients. We strive for excellence in every project we undertake.
              </Typography>
              {/* Image */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                <img
                  src="./About3.jpg"
                  alt="Mission"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    maxWidth: "300px",
                  }}
                />
              </div>
            </Paper>
          </Grid>

          {/* Our Vision Section */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={2}
              sx={{ padding: 3, height: "100%" }}
              style={{
                fontFamily: "'Roboto', sans-serif",
                padding: "24px",
                backgroundColor: "#fff3e0",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                Our Vision
              </Typography>
              <Typography
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                To become the leading provider of cleaning services in the industry, known for our quality, reliability, and customer satisfaction.
              </Typography>
              {/* Image */}
              <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                <img
                  src="./About4.jpg"
                  alt="Vision"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    maxWidth: "300px",
                  }}
                />
              </div>
            </Paper>
          </Grid>

          {/* Team Section */}
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "40px",
                color: "#333",
              }}
            >
              Meet Our Team
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {/* Team Member 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    height: "100%",
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      padding: 3,
                      textAlign: "center",
                      height: "100%",
                      transition: "box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Avatar
                      alt="John Doe"
                      src="Ceo3.jpg"
                      style={{
                        margin: "0 auto",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      John Doe
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#555",
                      }}
                    >
                      CEO & Founder
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "18px",
                        color: "#777",
                      }}
                    >
                      John is passionate about maintaining high standards in cleaning services and leading the team to success.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>

              {/* Team Member 2 */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    height: "100%",
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      padding: 3,
                      textAlign: "center",
                      height: "100%",
                      transition: "box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Avatar
                      alt="Jane Smith"
                      src="Ceo2.jpg"
                      style={{
                        margin: "0 auto",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      Jane Smith
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#555",
                      }}
                    >
                      COO & Co-Founder
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "18px",
                        color: "#777",
                      }}
                    >
                      Jane brings operational expertise to ensure every project runs smoothly from start to finish.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>

              {/* Team Member 3 */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    height: "100%",
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      padding: 3,
                      textAlign: "center",
                      height: "100%",
                      transition: "box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Avatar
                      alt="Sam Wilson"
                      src="Ceo1.jpg"
                      style={{
                        margin: "0 auto",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      Sam Wilson
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#555",
                      }}
                    >
                      Head of Marketing
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "18px",
                        color: "#777",
                      }}
                    >
                      Sam oversees marketing strategies that propel our company to new heights.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Why Us Section */}
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              Why Choose Us?
            </Typography>

            {whyUsText.map((text, index) => (
              <Typography
                key={index}
                className="scaleUp"
                style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "18px",
                  color: "#555",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default AboutUsPage;
