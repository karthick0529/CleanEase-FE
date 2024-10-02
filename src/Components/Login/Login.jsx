import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import http from "../../../utils/http";
import { loginSchema } from "../../Schema/Schema";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleLoginSubmit(values);
    },
  });

  const handleLoginSubmit = async (values) => {
    try {
      setLoading(true);
      const { data } = await http.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setLoading(false);
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
        toast.error(`Error while login. Try again later: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  const styleErrorMsg = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "50%", // Adjust width as needed
          maxWidth: "1200px", // Max width for larger screens
        }}
      >
        {/* Image section */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: "url(./Login.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh", // Adjust height as needed
            width: "50%", // Adjust width as needed
            display: { xs: "none", sm: "block" }, // Hide on small screens
          }}
        />

        {/* Login container section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            color: "#fff",
            backdropFilter: "blur(10px)",
            height: "70vh", // Adjust height as needed
            width: "40%", // Reduce width for container
            maxWidth: "400px", // Maximum width for the container
          }}
        >
          <Container
            maxWidth="sm" // Adjust maxWidth as needed
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%", // Ensure container takes full height
              justifyContent: "center", // Center content vertically
              width: "100%", // Full width within the Box
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontWeight: "900",
                textAlign: "center",
                color: "#fff",
                fontSize: "1.3rem",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
                marginBottom: "1rem",
              }}
            >
              Login with Valid Credentials
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{ width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                  },
                }}
              />
              <Typography
                variant="caption"
                textAlign="center"
                display="block"
                gutterBottom
                sx={styleErrorMsg}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                  },
                }}
              />
              <Typography
                variant="caption"
                textAlign="center"
                display="block"
                gutterBottom
                sx={styleErrorMsg}
              >
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  color: "#333",
                  backgroundColor: "#fff",
                }}
              >
                {!loading ? "Login" : <CircularProgress size={24} />}
              </Button>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="text"
                  onClick={() => navigate("/forgot-password")}
                  sx={{
                    textDecoration: "underline",
                    textTransform: "none",
                    color: "#fff",
                  }}
                >
                  Forgot Password?
                </Button>
                <Button
                  variant="text"
                  onClick={() => navigate("/register")}
                  sx={{
                    textDecoration: "underline",
                    textTransform: "none",
                    color: "#fff",
                  }}
                >
                  Don't have an account? Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
