import React, { useEffect, useState } from "react";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import CorosalCompo from "./CorosalCompo";
import CircularProgress from "@mui/material/CircularProgress";
import http from "../../../utils/http";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const { getMainServices, mainData, loginUser } = useGlobal();
  const [adminView, setAdminView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getMainServices();
  }, []);

  useEffect(() => {
    if (loginUser) {
      if (loginUser.role === "Admin") {
        setAdminView(true);
      } else {
        setAdminView(false);
      }
    }
  }, [loginUser]);

  return (
    <>
      {!adminView && (
        <>
          <CorosalCompo />
          <header className="hero-section">
            <div className="hero-content">
              <h1>✨ Your Clean Home Starts Here ✨</h1>
              <p>🧹 Professional cleaning services at your fingertips 🧽</p>
            </div>
          </header>

          <div className="Home_Header_Servies">
            <h3>🧼 Our Cleaning Service 🧽</h3>
          </div>

          <div className="Card_Container">
            {mainData.length > 0 ? (
              mainData.map((ele, index) => (
                <div
                  key={index}
                  className="Cards"
                  onClick={() => navigate(`/${ele._id}`)}
                >
                  <div>
                    <img
                      src={ele.img}
                      alt={ele.serviceName}
                      className="Card_Img"
                    />
                  </div>
                  <div className="Card_Text">
                    <h3 className="Card_Heading">{ele.serviceName}</h3>
                    <p className="Card_desc">{ele.description}</p>
                  </div>
                  <div className="Card_amount">
                    <h3 className="Card_heading">Service Charges</h3>
                    <p style={{ fontWeight: 800, color: "orangered" }}>
                      {ele.minAmount} INR - {ele.maxAmount} INR
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <header
                style={{ marginBottom: "1rem", borderRadius: "25px" }}
                className="sub-hero-section"
              >
                <div style={{ padding: "0 1rem" }} className="sub-hero-content">
                  <CircularProgress color="warning" size={54} />
                  <h1 style={{ width: "100%" }}>Loading Data Please Wait...</h1>
                </div>
              </header>
            )}
          </div>
        </>
      )}

      {adminView && (
        <>
          <div className="Admin_Dashboard">
            <AdminDashboard />
          </div>
        </>
      )}
    </>
  );
}

export default Home;

const AdminDashboard = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [userBookingsDetails, setUserBookingsDetails] = useState([]);

  useEffect(() => {
    getTotalBookingsAdmin();
    getTotalUsersAdmin();
    getUsersWithBookings();
  }, []);

  const getTotalBookingsAdmin = async () => {
    try {
      const { data } = await http.get("/admin/get-bookings");
      setTotalBookings(data.All_Users_Bookings.length);
    } catch (error) {
      console.error("Error fetching total bookings:", error);
    }
  };

  const getTotalUsersAdmin = async () => {
    try {
      const { data } = await http.get("/admin/get-total-users");
      setTotalUsers(data.TotalUsersDetail.length);
    } catch (error) {
      console.error("Error fetching total users:", error);
    }
  };

  const getUsersWithBookings = async () => {
    try {
      const { data } = await http.get("/admin/get-users-with-booking");
      setUserBookingsDetails(data.UsersWithBookingData);
    } catch (error) {
      console.error("Error fetching users with bookings:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="cards-container">
        <div className="info-card">
          <h2>Total Users</h2>
          <p>{totalUsers}</p>
        </div>
        <div className="info-card">
          <h2>Total Bookings</h2>
          <p>{totalBookings}</p>
        </div>
      </div>

      <div className="chart-container">
        {userBookingsDetails.length > 0 && (
          <UserBookingsTable data={userBookingsDetails} />
        )}
        {/* {userBookingsDetails.length > 0 && <BookingsBarChart data={userBookingsDetails} />} */}
      </div>
    </div>
  );
};

const UserBookingsTable = ({ data }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
            }}
          >
            User Name
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Total Bookings
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {item._id}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {item.total_bookings}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
