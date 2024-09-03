import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import http from "../../../utils/http";
import "./PasswordTokenCheck.css";

function PasswordTokenCheck() {
  let navigate = useNavigate();
  const { passResetToken } = useParams();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    navigate(`/forgot-password/reset-pass/${passResetToken}`);
  };

  const checkToken = async () => {
    try {
      await http.get(`auth/resetPass-check/${passResetToken}`);
      handleClick();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.message == "Network Error") {
        setError("Connection timeout! / DB not responding");
      } else if (err.response.status == 400) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, [passResetToken]);

  return (
    <>
      <div className="PassresetCheckBack">
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Verifyed Token Succesfully! You will redirected to next page in 5s
          </Alert>
        </Snackbar>
        {loading && !error ? (
          <div className="PassVerify_Container">
            <Box
              className="PassVerify_Box_loading"
              component="div"
              sx={{ m: 1, maxWidth: "300px", height: "30vh" }}
            >
              <CircularProgress />
              <Typography
                variant="body2"
                className="Msg"
                sx={{ fontWeight: "700", fontSize: "18px" }}
                gutterBottom
              >
                Verifying token please wait
              </Typography>
            </Box>
          </div>
        ) : (
          ""
        )}

        {!loading && error ? (
          <>
            <Box
              className="PassVerify_Box_Error"
              component="div"
              sx={{ m: 1, maxWidth: "300px", height: "30vh", display:"flex", justifyContent:"center" }}
            >
              <Typography
                variant="body2"
                className="Msg"
                sx={{ fontWeight: "700", fontSize: "18px" }}
                gutterBottom
              >
                {error}
              </Typography>
            </Box>
          </>
        ) : (
          ""
        )}
        {!loading && !error ? (
          <>
            <div className="PassresetCheckBack">
              <Box
                className="PassVerify_Box_Msg"
                component="div"
                sx={{ m: 1, maxWidth: "300px", height: "30vh" }}
              >
                <Typography
                  variant="body2"
                  className="Msg"
                  sx={{ fontWeight: "700", fontSize: "18px" }}
                  gutterBottom
                >
                  If you didnt redirect to next page, please click below button
                  to redirect
                </Typography>
                <Button
                  onClick={() =>
                    navigate(`/forgot-password/reset-pass/${passResetToken}`)
                  }
                >
                  Click here
                </Button>
              </Box>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default PasswordTokenCheck;
