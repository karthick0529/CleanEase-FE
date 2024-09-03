import React, { useEffect, useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DrawerCompo from "./DrawerCompo";
import {useNavigate} from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useGlobal } from '../../GlobalContext/GlobalProvider';
import ChecklistIcon from '@mui/icons-material/Checklist';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


function Navbar({value,setValue}) {
    const { loginUser, globalUserNotifications } = useGlobal();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    const userNavigatePath = [
        {icon:<HomeIcon/>,name:"Home",path:"/"},
        {icon:<InfoIcon/>,name:"About",path:"/about"},
        {icon:<PermContactCalendarIcon/>,name:"Contact",path:"/contact"},
        {icon:<AccountCircleIcon/>,name:"User",path:"/user-profile"},
        {icon:<CollectionsBookmarkIcon/>,name:"Bookings",path:"/user-bookings"},
        {icon:<ChecklistIcon/>,name:"CheckList",path:"/user-cehcklist"}
    ]
    
    const noUserNavigatePath = [
        {icon:<HomeIcon/>,name:"Home",path:"/"},
        {icon:<InfoIcon/>,name:"About",path:"/about"},
        {icon:<PermContactCalendarIcon/>,name:"Contact",path:"/contact"},
    ]

    const AdminNavigatePath = [
      {icon:<HomeIcon/>,name:"Home",path:"/"},
      {icon:<CollectionsBookmarkIcon/>,name:"Manage Bookings", path:"/admin-managebooking"},
      {icon:<InfoIcon/>,name:"About",path:"/about"},
      {icon:<PermContactCalendarIcon/>,name:"Contact",path:"/contact"},
    ]
    
    return (
        <>
            <AppBar position="static" sx={{ background: "#063970" }}>
        <Toolbar>
          <Typography sx={{display:"flex"}}>
            CleanEase <CleaningServicesIcon size='large' sx={{paddingLeft:"3px",paddingBottom:"5px"}}/>
          </Typography>

          {isMatch ? (
            <>
              <DrawerCompo data = {!loginUser ? noUserNavigatePath : loginUser.role == "User" ? userNavigatePath : AdminNavigatePath }/>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "5px" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                  navigate(`${value}`)
                }}
                indicatorColor="secondary"
              >

                {!loginUser ?  noUserNavigatePath.map((ele)=>(
                    <Tab sx={{fontSize:"12px"}} key={ele.name} value={`${ele.path}`} icon={ele.icon} label={ele.name}/>
                )) : loginUser.role == "User" ? userNavigatePath.map((ele)=>( 
                        <Tab sx={{fontSize:"12px"}} key={ele.name} value={`${ele.path}`} icon={ele.icon} label={ele.name} />
                )) : AdminNavigatePath.map((ele)=>( 
                  <Tab sx={{fontSize:"12px"}} key={ele.name} value={`${ele.path}`} icon={ele.icon} label={ele.name} />
                ))
              }

             </Tabs>
             {!loginUser ? <>
             <Button sx={{ marginLeft: "auto" }} onClick={()=>{setValue('');navigate('/login')}} variant="contained">
                LogIn
              </Button>
              <Button sx={{ marginLeft: "10px" }} onClick={()=>{setValue('');navigate('/register')}} variant="contained">
                SignUp
              </Button>
             </> : loginUser.role == "User" ?
             <>
              <IconButton sx={{ marginLeft: "auto", color:"inherit" }} onClick={()=>{setValue('');navigate('/user-notifications')}} aria-label="notification" size="large">
                <Badge badgeContent={globalUserNotifications.length} color="secondary">
                  <NotificationsIcon fontSize="inherit" />
                </Badge>   
              </IconButton>
              <Button sx={{ marginLeft: "10px" }} onClick={()=>{setValue('/');navigate('/logout')}} variant="contained">
                Logout
              </Button>
             </> : 
             <>
              <Button sx={{ marginLeft: "auto" }} onClick={()=>{setValue('/');navigate('/admin-logout')}} variant="contained">
                Logout
              </Button>
             </>
             }
            </>
          )}
        </Toolbar>
      </AppBar>
      </>
    )
}

export default Navbar