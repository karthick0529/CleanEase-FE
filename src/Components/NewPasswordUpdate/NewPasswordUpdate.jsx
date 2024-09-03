import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import http from "../../../utils/http";
import { resetPassSchema } from "../../Schema/Schema";
import { useFormik } from "formik";
import "./NewPasswordUpdate.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

function NewPasswordUpdate() {
  const { passResetToken } = useParams();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { confirmPassword: "", newPassword: "" },
    validationSchema: resetPassSchema,
    onSubmit: (values) => {
      handleUpdatePassSubmit(values);
    },
  });

  const styleErrorMsg = {
    color: "red",
    fontWeight: "bold",
  };

  const handleUpdatePassSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords did not match", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    try {
      setLoading(true);
      const { data } = await http.put(
        `/auth/updatePass/${passResetToken}`,
        values
      );

      toast.success("Your password has been updated successfully.",{
        position: "top-right",
        autoClose: 5000,
      });

      localStorage.setItem("token", data.token);
      window.location = "/";
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

  return (
    <>
      <div className="NewPasswordUpdateBack">
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            marginTop: "3rem",
            marginBottom: "3rem",
            marginRight: "10px",
            marginLeft: "10px",
            padding: "1rem",
            borderRadius: "5px",
            color: "#fff",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
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
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
              }}
            >
              Update Password
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                id="new-password"
                label="New Password"
                name="newPassword"
                autoComplete="new-password"
                value={formik.values.newPassword}
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
                {formik.touched.newPassword && formik.errors.newPassword
                  ? formik.errors.newPassword
                  : ""}
              </Typography>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                id="confirm-password"
                label="Confirm Password"
                name="confirmPassword"
                autoComplete="confirm-password"
                value={formik.values.confirmPassword}
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
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""}
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, color: "#333", backgroundColor: "#fff" }}
              >
              {!loading ? "Update Password" : <CircularProgress size={24}/>}  
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default NewPasswordUpdate;
