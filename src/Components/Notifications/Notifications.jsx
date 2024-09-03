import React, { useEffect, useState } from 'react'
import { useGlobal } from '../../GlobalContext/GlobalProvider'
import { toast } from "react-toastify";
import './Notifications.css'

function Notifications() {
  const {getUserNotifications, globalUserNotifications, deleteUserNotification} = useGlobal();
  const [notificationData,setNotificationData] =useState([]);

  useEffect(()=>{
    getUserNotifications();
  },[])

  useEffect(()=>{
    if(globalUserNotifications.length > 0){
      setNotificationData(globalUserNotifications);
    }
  },[globalUserNotifications])

  const handleDelete = async (_id) => {
    try{
      await deleteUserNotification(_id);
      toast.success("Notification deleted successfully!",{
        position:"top-rigth",
        duration:5000,
      });
    } catch(err){
      if (err.message === "Network Error") {
        toast.error("Connection timeout! DB not responding", { position: "top-right", autoClose: 5000 });
    } else if (err.response && err.response.status === 400) {
        toast.error(err.response.data, { position: "top-right", autoClose: 5000 });
    } else {
        toast.error(`Error while deleting Notification. Try again later: ${err.message}`, { position: "top-right", autoClose: 5000 });
    }
    }
  };

  return (
    <>
      <div className="notifications-container">
      <h2>User Notifications</h2>
      {globalUserNotifications.length === 0 ? (
        <p>No notifications available</p>
      ) : (
        <div className="notifications-list">
          {notificationData.map((notification) => (
            <div key={notification._id} className="notification-card">
              <div className="notification-header">
                <h3>{notification.heading}</h3>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(notification._id)}
                >
                  Delete
                </button>
              </div>
              <p className="notification-message">{notification.msg}</p>
              <p className="notification-date">
                {new Date(notification.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Notifications
