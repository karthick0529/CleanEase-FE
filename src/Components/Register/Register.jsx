import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import http from "../../../utils/http";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../Schema/Schema";
import { useFormik } from "formik";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import CircularProgress from '@mui/material/CircularProgress';


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
      if (res.status == 200) {
        alert(`Account Verification link sent to your email - ${values.email}`);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      if (err.message === "Network Error") {
        toast.error("Connection timeout! DB not responding", { position: "top-right", autoClose: 5000 });
    } else if (err.response && err.response.status === 400) {
        toast.error(err.response.data, { position: "top-right", autoClose: 5000 });
    } else {
        toast.error(`Error while login. Try again later: ${err.message}`, { position: "top-right", autoClose: 5000 });
    }
}
  };

  useEffect(() => {
    if (loginUser) {
      navigate("/");
    }
  }, []);

  const styleErrorMsg = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="RegisterBack">
        <Container
          maxWidth="sm"
          sx={{
            marginTop: "3rem",
            marginBottom: "3rem",
            padding: "1rem",
            borderRadius: "10px",
            color: "#fff",
            border: "2px solid rgba(255,255,255,0.2)",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            backdropFilter: "blur(18px)",
          }}
        >
          <Box
            sx={{
              marginTop: 3,
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
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1, width:"100%" }}>
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
                //
                InputLabelProps={{
                  style: { color: "#fff" }, // Set label color to white
                }}
                InputProps={{
                  style: { color: "#fff" }, // Set text field text color to white
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff", // Set border color to white
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff", // Set border color on hover to white
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Set border color when focused to white
                    },
                  },
                  width: '95%', // Make TextField wider
                  maxWidth: '500px' // Limit the maximum width
                }}
                //
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
                //
                InputLabelProps={{
                  style: { color: "#fff" }, // Set label color to white
                }}
                InputProps={{
                  style: { color: "#fff" }, // Set text field text color to white
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff", // Set border color to white
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff", // Set border color on hover to white
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Set border color when focused to white
                    },
                  },
                  width: '95%', // Make TextField wider
                  maxWidth: '500px' // Limit the maximum width
                }}
                //
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
                //
                InputLabelProps={{
                  style: { color: "#fff" }, // Set label color to white
                }}
                InputProps={{
                  style: { color: "#fff" }, // Set text field text color to white
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff", // Set border color to white
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff", // Set border color on hover to white
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Set border color when focused to white
                    },
                  },
                  width: '95%', // Make TextField wider
                  maxWidth: '500px' // Limit the maximum width
                }}
                //
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
                //
                InputLabelProps={{
                  style: { color: "#fff" }, // Set label color to white
                }}
                InputProps={{
                  style: { color: "#fff" }, // Set text field text color to white
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#fff", // Set border color to white
                    },
                    "&:hover fieldset": {
                      borderColor: "#fff", // Set border color on hover to white
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Set border color when focused to white
                    },
                  },
                  width: '95%', // Make TextField wider
                  maxWidth: '500px' // Limit the maximum width
                }}
                //
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
              {!loading ? "Register" : <CircularProgress size={24}/>}           
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Register;
