import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Badge,
} from "@mui/material";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  PermContactCalendar as PermContactCalendarIcon,
  AccountCircle as AccountCircleIcon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  Checklist as ChecklistIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DrawerCompo from "./DrawerCompo";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import "./Navbar.css";

function Navbar({ value, setValue }) {
  const { loginUser, globalUserNotifications } = useGlobal();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // Navigation paths for different roles
  const userNavigatePath = [
    { icon: <HomeIcon />, name: "Home", path: "/" },
    { icon: <InfoIcon />, name: "About", path: "/about" },
    { icon: <PermContactCalendarIcon />, name: "Contact", path: "/contact" },
    { icon: <AccountCircleIcon />, name: "User", path: "/user-profile" },
    {
      icon: <CollectionsBookmarkIcon />,
      name: "Bookings",
      path: "/user-bookings",
    },
    // { icon: <ChecklistIcon />, name: "Checklist", path: "/user-checklist" },
  ];

  const noUserNavigatePath = [
    { icon: <HomeIcon />, name: "Home", path: "/" },
    { icon: <InfoIcon />, name: "About", path: "/about" },
    { icon: <PermContactCalendarIcon />, name: "Contact", path: "/contact" },
  ];

  const adminNavigatePath = [
    { icon: <HomeIcon />, name: "Home", path: "/" },
    {
      icon: <CollectionsBookmarkIcon />,
      name: "Manage Bookings",
      path: "/admin-managebooking",
    },
    { icon: <InfoIcon />, name: "About", path: "/about" },
    { icon: <PermContactCalendarIcon />, name: "Contact", path: "/contact" },
  ];

  const getNavItems = () => {
    if (!loginUser) return noUserNavigatePath;
    return loginUser.role === "User" ? userNavigatePath : adminNavigatePath;
  };

  const handleLogout = () => {
    setValue("/");
    navigate(loginUser.role === "User" ? "/logout" : "/admin-logout");
  };

  return (
    <AppBar position="static" className="MuiAppBar-root">
      <Toolbar className="MuiToolbar-root">
        <Typography style={{ fontSize: "2em", fontFamily: "Times New Roman" }}>
          SparklePro{" "}
          <span
            role="img"
            aria-label="sparkles"
            style={{ paddingLeft: "3px", color: "#f4d03f", fontSize: "1.1em" }}
          >
            ✨
          </span>
        </Typography>

        {isMatch ? (
          <DrawerCompo data={getNavItems()} />
        ) : (
          <>
            <Tabs
              className="MuiTabs-root"
              textColor="inherit"
              value={value}
              onChange={(e, value) => {
                setValue(value);
                navigate(`${value}`);
              }}
              indicatorColor="secondary"
            >
              {getNavItems().map((ele) => (
                <Tab
                  className="MuiTab-root"
                  key={ele.name}
                  value={ele.path}
                  icon={ele.icon}
                  label={ele.name}
                />
              ))}
            </Tabs>

            {!loginUser ? (
              <>
                <Button
                  className="MuiButton-root MuiButton-contained"
                  onClick={() => {
                    setValue("");
                    navigate("/login");
                  }}
                >
                  LogIn
                </Button>
                <Button
                  className="MuiButton-root MuiButton-contained"
                  onClick={() => {
                    setValue("");
                    navigate("/register");
                  }}
                >
                  SignUp
                </Button>
              </>
            ) : loginUser.role === "User" ? (
              <>
                <IconButton
                  className="MuiIconButton-root"
                  onClick={() => {
                    setValue("");
                    navigate("/user-notifications");
                  }}
                  aria-label="notification"
                  size="large"
                >
                  <Badge
                    badgeContent={globalUserNotifications.length}
                    color="secondary"
                  >
                    <NotificationsIcon fontSize="inherit" />
                  </Badge>
                </IconButton>
                <Button
                  className="MuiButton-root MuiButton-contained"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                className="MuiButton-root MuiButton-contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
