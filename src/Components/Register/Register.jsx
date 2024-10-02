import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import http from "../../../utils/http";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../Schema/Schema";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

function Register() {
  const navigate = useNavigate();
  const { loginUser } = useGlobal();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      handleRegisterSubmit(values);
    },
  });

  const handleRegisterSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await http.post("/auth/register", values);
      if (res.status === 200) {
        alert(`Account Verification link sent to your email - ${values.email}`);
        setLoading(false);
      }
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
        toast.error(
          `Error while registering. Try again later: ${err.message}`,
          { position: "top-right", autoClose: 5000 }
        );
      }
    }
  };

  useEffect(() => {
    if (loginUser) {
      navigate("/");
    }
  }, [loginUser, navigate]);

  const styleErrorMsg = {
    color: "red",
    fontWeight: "bold",
  };

  // Updated styles for both image and form
  const containerStyle = {
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "100vh", // Full viewport height
    overflow: "hidden", // Hide overflow
  };

  const sharedSizeStyle = {
    flex: 1,
    height: "600px", // Set a consistent height for both
    width: "600px", // Set a consistent width for both
    maxWidth: "100%", // Ensure it scales down on smaller screens
    borderRadius: "10px", // Optional: keep the border-radius for rounded corners
  };

  const imageStyle = {
    ...sharedSizeStyle,
    background: "url(./Register.jpg) no-repeat center center",
    backgroundSize: "cover", // Ensure image covers the div fully
  };

  const formStyle = {
    ...sharedSizeStyle,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: 1, // Ensure form stays on top of the image
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle} />
      <div style={formStyle}>
        <Container maxWidth="sm" disableGutters>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Sign Up with Valid Credentials
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstname"
                autoComplete="given-name"
                autoFocus
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
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
                {formik.touched.firstname && formik.errors.firstname
                  ? formik.errors.firstname
                  : ""}
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastname"
                autoComplete="family-name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
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
                {formik.touched.lastname && formik.errors.lastname
                  ? formik.errors.lastname
                  : ""}
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
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
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
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
                sx={{ mt: 2, mb: 2, color: "#333", backgroundColor: "#fff" }}
              >
                {!loading ? "Register" : <CircularProgress size={24} />}
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Register;
