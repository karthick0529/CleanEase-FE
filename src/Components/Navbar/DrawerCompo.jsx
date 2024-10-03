import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Badge, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useGlobal } from "../../GlobalContext/GlobalProvider";

function DrawerCompo({ data }) {
  const { globalUserNotifications } = useGlobal();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#063970", // Background color
            color: "#fff", // Text color
            paddingRight: "2.5rem",
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
        >
          <List>
            {data.map((ele) => (
              <ListItem key={ele.name} disablePadding>
                <ListItemButton
                  onClick={() => navigate(`${ele.path}`)}
                  sx={{ fontFamily: "Times New Roman", fontSize: "18px" }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    {ele.icon}
                  </ListItemIcon>
                  <ListItemText primary={ele.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          {data.length <= 3 && (
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/login`)}
                  sx={{ fontFamily: "Times New Roman", fontSize: "18px" }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/register`)}
                  sx={{ fontFamily: "Times New Roman", fontSize: "18px" }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <AppRegistrationIcon />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </List>
          )}

          {data.length > 3 && (
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/user-notifications`)}
                  sx={{ fontFamily: "Times New Roman", fontSize: "18px" }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <Badge
                      badgeContent={globalUserNotifications.length}
                      color="secondary"
                    >
                      <NotificationsIcon />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/logout`)}
                  sx={{ fontFamily: "Times New Roman", fontSize: "18px" }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Box>
      </Drawer>

      <IconButton
        sx={{ marginLeft: "auto" }}
        color="inherit"
        size="large"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerCompo;
