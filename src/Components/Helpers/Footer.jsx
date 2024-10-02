import React from "react";
import { Grid, Typography, Box, Link, Container } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import GitHub Icon
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function Footer({ setValue }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        width: "100%",
        fontWeight: "800",
        color: "white",
        padding: "2rem 0",
        marginTop: "auto",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* About Us section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                textAlign="center"
                variant="h6"
                gutterBottom
                sx={{ fontSize: "1.75rem", fontFamily: "'Arial', sans-serif" }}
              >
                About Us
              </Typography>
              <Typography
                textAlign="justify"
                variant="body2"
                sx={{ fontSize: "1.2rem", fontFamily: "'Arial', sans-serif" }}
              >
                We provide top-notch cleaning services with a focus on quality
                and customer satisfaction. Our professional team ensures your
                space is spotless and welcoming.
              </Typography>
              <Typography
                sx={{
                  margin: "0.8rem 0",
                  fontSize: "1.2rem",
                  fontFamily: "'Arial', sans-serif",
                }}
                variant="body2"
              >
                <b>Phone:</b> +91 123 456 7890
              </Typography>
              <Typography
                sx={{
                  margin: "0.5rem 0",
                  fontSize: "1.2rem",
                  fontFamily: "'Arial', sans-serif",
                }}
                variant="body2"
              >
                <b>Email:</b> support@sparkelpro.com
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  marginTop: "1rem",
                }}
              >
                <IconButton
                  onClick={() =>
                    window.open("https://www.facebook.com/", "_blank")
                  }
                  color="inherit"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  onClick={() => window.open("https://x.com/", "_blank")}
                  color="inherit"
                  aria-label="Twitter"
                >
                  <XIcon />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://www.instagram.com", "_blank")
                  }
                  color="inherit"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://github.com/your-repo", "_blank")
                  }
                  color="inherit"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Book Services section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              textAlign="center"
              gutterBottom
              sx={{ fontSize: "1.75rem", fontFamily: "'Arial', sans-serif" }}
            >
              Book Services
            </Typography>
            {[
              "Residential Cleaning",
              "Commercial Cleaning",
              "Specialized Cleaning",
              "Event Cleaning",
              "Green Cleaning",
              "Disinfection Services",
              "Janitorial Services",
            ].map((service, idx) => (
              <Typography
                key={idx}
                sx={{
                  margin: "0.5rem 0",
                  fontSize: "1.5rem",
                  fontFamily: "'Arial', sans-serif",
                }}
                textAlign="center"
                variant="body2"
              >
                <Link
                  onClick={() => {
                    setValue("");
                    navigate(`/66b312c43b4fc6d8eda3884${46 + idx}`);
                  }}
                  color="inherit"
                  underline="hover"
                  sx={{
                    "&:hover": {
                      color: "#3CB371",
                    },
                    cursor: "pointer",
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.4rem",
                  }}
                >
                  {service}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Quick Links section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              textAlign="center"
              gutterBottom
              sx={{ fontSize: "1.75rem", fontFamily: "'Arial', sans-serif" }}
            >
              Quick Links
            </Typography>
            {["Home", "About Us", "Contact"].map((link, idx) => (
              <Typography
                key={idx}
                sx={{
                  margin: "0.5rem 0",
                  fontSize: "2rem",
                  fontFamily: "'Arial', sans-serif",
                }}
                textAlign="center"
                variant="body2"
              >
                <Link
                  onClick={() => {
                    setValue(
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(" ", "")}`
                    );
                    navigate(
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(" ", "")}`
                    );
                  }}
                  color="inherit"
                  underline="hover"
                  sx={{
                    "&:hover": {
                      color: "#3CB371",
                    },
                    cursor: "pointer",
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.5rem",
                  }}
                >
                  {link}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Box
          mt={4}
          textAlign="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          <Typography
            variant="body2"
            color="inherit"
            sx={{ fontSize: "1.5rem" }}
          >
            © {new Date().getFullYear()} Cleaning Service. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
