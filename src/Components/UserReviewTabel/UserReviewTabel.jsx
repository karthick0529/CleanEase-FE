import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobal } from '../../GlobalContext/GlobalProvider';
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './UserReviewTabel.css';


function UserReviewTabel() {
  const navigate = useNavigate();
    const {_id} = useParams();
    const {loginUser, getUserReview, userReviews, deleteUserReview, setUpdateUserReviews} = useGlobal();

    useState(()=>{
      getUserReview(_id);
    },[])

    const handleEdit = (_id,review) => {
      setUpdateUserReviews(review);
      navigate(`/user-update-review/${_id}`)
    };
  
    const handleDelete = async (id, _id) => {
      const deleteID = id;
      await deleteUserReview(_id,deleteID);
    };

  return (
    <>
    <div className="UserReview_Heading">
        <h2>User Reviwes</h2>
    </div>
    <div className="UserReview_BackButton">
        <Button startIcon={<ArrowBackIcon />} onClick={()=>navigate(-1)} variant="contained">Back</Button>
    </div>
      <TableContainer component={Paper}>
      <Table aria-label="review table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Username</Typography></TableCell>
            <TableCell><Typography variant="h6">Rating</Typography></TableCell>
            <TableCell><Typography variant="h6">Review</Typography></TableCell>
            <TableCell><Typography variant="h6">Created Date</Typography></TableCell>
            <TableCell align="center"><Typography variant="h6">Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        { userReviews.length > 0 ?
          <TableBody>
          {userReviews.map((review) => (
            <TableRow key={review._id}>
              <TableCell>{review.username}</TableCell>
              <TableCell>
                <Rating name="read-only" value={review.rating} readOnly />
              </TableCell>
              <TableCell>{review.text}</TableCell>
              <TableCell>{(review.date).split("T")[0]}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" disabled={!loginUser ? true : loginUser._id != review.user ?  true : false } onClick={() => handleEdit(_id,review)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" disabled={!loginUser ? true : loginUser._id != review.user ? true : false } onClick={() => handleDelete(review._id, _id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> :("")}
      </Table>
    </TableContainer>
    {userReviews.length == 0 && (
      <>
        <div className="UserReview_Error">
            <h3>No user Reviews To Show</h3>
        </div>
      </>
    )}
    </>
  )
}

export default UserReviewTabel

//loginUser._id != review.user ? true : false