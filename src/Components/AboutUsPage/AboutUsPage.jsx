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
        <div class="slideshow-container">
          <div class="slideshow">
            <img
              src="./About.jpg"
              alt="About Us Hero"
              class="slideshow-image"
            />
            <img
              src="./About1.jpg"
              alt="About Us Hero"
              class="slideshow-image"
            />
            <img
              src="./About2.jpg"
              alt="About Us Hero"
              class="slideshow-image"
            />
          </div>
        </div>

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

        <Typography
          variant="subtitle1"
          style={{
            fontSize: "1.5rem" /* Adjust font size as needed */,
            fontWeight: 400 /* Adjust font weight as needed */,
            color: "#0e0d0d" /* Set text color */,
            textAlign: "center" /* Center-align the text */,
            marginTop: "20px" /* Add margin to the top */,
            marginBottom: "20px" /* Add margin to the bottom */,
            lineHeight: "1.6" /* Adjust line height for readability */,
            fontFamily: "Arial, sans-serif" /* Set the font family */,
          }}
        >
          We are dedicated to providing the best cleaning services to our
          customers.
        </Typography>

        <Grid container spacing={4}>
          {/* Our Mission Section */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={2}
              sx={{ padding: 3, height: "100%" }}
              className="mission-paper"
              style={{
                fontFamily: "'Roboto', sans-serif",
                padding: "24px",
                backgroundColor: "#e0f7fa" /* Light teal */,
                borderRadius: "8px",
                boxShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.1)" /* Shadow for depth */,
              }} // Set the font family
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                className="section-title"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center",
                  marginBottom: "16px",
                }} // Font family for heading
              >
                Our Mission
              </Typography>
              <Typography
                className="section-content"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                Our mission is to deliver top-notch cleaning services that
                ensure a safe and clean environment for all our clients. We
                strive for excellence in every project we undertake.
              </Typography>
              {/* Image centered */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <img
                  src="./About3.jpg"
                  alt="Mission"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    maxWidth: "300px", // Adjust the max width to control image size
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
              className="vision-paper"
              style={{
                fontFamily: "'Roboto', sans-serif",

                padding: "24px",
                backgroundColor: "#fff3e0" /* Light orange */,
                borderRadius: "8px",
                boxShadow:
                  "0 4px 8px rgba(0, 0, 0, 0.1)" /* Shadow for depth */,
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                className="section-title"
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
                className="section-content"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                To become the leading provider of cleaning services in the
                industry, known for our quality, reliability, and customer
                satisfaction.
              </Typography>
              {/* Image centered */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <img
                  src="./About4.jpg"
                  alt="Vision"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    maxWidth: "300px", // Adjust the max width to control image size
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
              className="team-title"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "40px",
                color: "#333",
              }} // Center-align heading
            >
              Meet Our Team
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {/* Team Member 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)", // Scale the card on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition effect
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
                      transition: "box-shadow 0.3s ease-in-out", // Add transition for shadow
                      "&:hover": {
                        boxShadow: "0 6px 18px rgba(0,0,0,0.15)", // Shadow effect on hover
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
                      }} // Increased size of the avatar
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
                      John is passionate about maintaining high standards in
                      cleaning services and leading the team to success.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>

              {/* Repeat for other team members with the same Box component */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)", // Scale the card on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition effect
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
                      transition: "box-shadow 0.3s ease-in-out", // Add transition for shadow
                      "&:hover": {
                        boxShadow: "0 6px 18px rgba(0,0,0,0.15)", // Shadow effect on hover
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
                      }} // Increased size of the avatar
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
                      Operations Manager
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "18px",
                        color: "#777",
                      }}
                    >
                      Jane ensures that all operations run smoothly and
                      efficiently, ensuring customer satisfaction at every step.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>

              {/* Team Member 3 */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)", // Scale the card on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition effect
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
                      transition: "box-shadow 0.3s ease-in-out", // Add transition for shadow
                      "&:hover": {
                        boxShadow: "0 6px 18px rgba(0,0,0,0.15)", // Shadow effect on hover
                      },
                    }}
                  >
                    <Avatar
                      alt="Michael Johnson"
                      src="./Ceo1.jpg"
                      style={{
                        margin: "0 auto",
                        width: "150px",
                        height: "150px",
                      }} // Increased size of the avatar
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
                      Michael Johnson
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#555",
                      }}
                    >
                      Lead Technician
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "'Arial', sans-serif",
                        fontSize: "18px",
                        color: "#777",
                      }}
                    >
                      Michael brings years of experience and expertise to ensure
                      every cleaning job is done to perfection.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: 5 }}>
          <Paper
            elevation={2}
            sx={{
              padding: 3,
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
            }}
          >
            <style>
              {`
            @keyframes scaleUp {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .scaleUp {
              animation: scaleUp 1s ease-out;
            }
          `}
            </style>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontWeight: "bold",
                fontSize: "28px",
                color: "#333",
                textAlign: "center",
                animation: "scaleUp 1s ease-out",
              }}
              className="scaleUp"
            >
              Why Us?
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "20px",
                color: "#241212da",
                marginBottom: "20px",
                textAlign: "center",
                animation: "scaleUp 1s ease-out",
              }}
              className="scaleUp"
            >
              Why would you choose SparkePro? We make the following promises to
              you:
            </Typography>
            <ul
              style={{
                paddingLeft: "20px",
                listStyleType: "disc",
                margin: "16px 0",
              }}
            >
              {whyUsText.map((item, index) => (
                <li key={index}>
                  <Typography
                    sx={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: "18px",
                      color: "#171616",
                      animation: "scaleUp 1s ease-out",
                    }}
                    className="scaleUp"
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "20px",
                color: "#2ec1f7",
                marginTop: "16px",
                textAlign: "center",
                animation: "scaleUp 1s ease-out",
              }}
              className="scaleUp"
            >
              Like what we offer? You can easily book SparklePro cleaning
              services based on the size of your home, or your available time
              and make bookings online! Of course, you can also feel free to
              contact us. The information is present in the Contact tab. So go
              book our service online now and say hello to a beautiful,
              professionally cleaned home!
            </Typography>
          </Paper>
        </Grid>
      </Paper>
    </Container>
  );
}

export default AboutUsPage;
