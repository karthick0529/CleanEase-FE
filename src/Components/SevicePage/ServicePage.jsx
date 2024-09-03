import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import "./ServicePage.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";


function ServicePage() {
  const navigate = useNavigate();
  const { cleanServiceID } = useParams();
  const { getSubServices, subData, heading } = useGlobal();
  const [valueExample, setValueExample] = useState("");
  const [sortByPrice,setSortByPrice] = useState(false);
  const [sortByDuration,setSortByDuration] = useState(false);
  const [mainSubData,setMainSubData] = useState([]);
  const [searchField,setSearchField] = useState(false);

  useEffect(() => {
    getSubServices(cleanServiceID);
  }, []);

  useEffect(()=>{
    if(subData.length > 0){
      if(!sortByDuration && !sortByPrice){
        subData.sort((a,b)=> a.duration - b.duration)
        subData.sort((a,b)=> a.serviceAmount - b.serviceAmount)
        setMainSubData(subData);
      }
      if(sortByDuration && !sortByPrice){
        subData.sort((a,b)=> b.duration - a.duration)
        setMainSubData(subData)
      }
      if(!sortByDuration && sortByPrice){
        subData.sort((a,b)=> b.serviceAmount - a.serviceAmount)
        setMainSubData(subData)
      }
    }
  },[subData,sortByPrice,sortByDuration])

  useEffect(()=>{
    if(subData.length > 0){
      if(!valueExample && searchField){
        setMainSubData(subData);
        setSearchField(!searchField);
      }
      if(valueExample && searchField){
        setMainSubData(subData.filter((ele)=>ele.subServiceName == valueExample))
        setSearchField(!searchField);
      }
    }
  },[subData,searchField])


  return (
    <>
      <div className="SubData_Heading">
        <h2>{heading}</h2>
      </div>
      <div className="SubData_ActionPart">
        <div className="SubData_BackButton">
          <Button startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} variant="contained">Back</Button>
        </div>
        <div className="SubData_Search_Sort">
          <div className="SubData_Search">
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={subData.map((option) => option.subServiceName)}
              onChange={(event, newValue) => {
                setValueExample(newValue || "");
              }}
              renderInput={(params) => (
                <TextField {...params} sx={{ minWidth: '200px'}} label="Search by Name" />
              )}
            />
            <Button sx={{margin:"5px 0px 5px 20px"}} variant="contained" onClick={()=>setSearchField(true)}>
              Search
            </Button>
          </div>
          <div className="SubData_Sort">
            <Button
              sx={{margin:"5px"}}
              variant="contained"
              onClick={()=>{setSortByPrice(!sortByPrice); setSortByDuration(false)}}
              startIcon={sortByPrice ? <KeyboardDoubleArrowDownIcon /> :<KeyboardDoubleArrowUpIcon/> }
            >
              Price Sort
            </Button>
            <Button
              sx={{margin:"5px"}}
              variant="contained"
              onClick={()=>{setSortByDuration(!sortByDuration); setSortByPrice(false)}}
              startIcon={sortByDuration ? <KeyboardDoubleArrowDownIcon /> :<KeyboardDoubleArrowUpIcon/> }
            >
              Duration Sort
            </Button>
          </div>
        </div>
      </div>
      <div className="SubData_Container">
        {mainSubData.map((ele) => (
          <div className="SubData_Card" key={ele._id}>
            <div>
              <img
                src={ele.img}
                alt={ele.subServiceName}
                className="SubService_Img"
              />
            </div>
            <div className="SubData_Card_Text">
              <h3>{ele.subServiceName}</h3>
            </div>
            <div className="SubData_Card_Numbers">
              <div className="SubData_Card_Duration">
                <h5>Duration</h5>
                <p className="text">{ele.duration} hrs</p>
              </div>
              <div className="SubData_Card_Amount">
                <h5>Charges</h5>
                <p className="text1">{ele.serviceAmount}</p>
              </div>
            </div>
            <div className="Review_Page">
                <Button size="large" 
                  onClick={()=>navigate(`/user-review/${ele._id}`)}
                  sx={{
                    '&:hover': {
                      color: "#388E3C", // Cool green color on hover
                      backgroundColor: "transparent", // Ensuring background remains transparent
                    },
                  }}
                  variant="text">
                    Check User Reviews
                </Button>
            </div>
            <div
              className="Action_Button"
              onClick={() => navigate(`/user-create-booking/${ele._id}`)}
            >
              <button type="text">Book Now!</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicePage;
