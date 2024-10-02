import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  TextField,
  Typography,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { toast } from "react-toastify";
import { useGlobal } from "../../GlobalContext/GlobalProvider";
import "./UserChecklist.css"; // For additional CSS

const UserChecklist = () => {
  const {
    getUserChecklist,
    checkListTask,
    editUserCheckList,
    addUserCehckList,
    deleteUserCheckList,
  } = useGlobal();
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [CheckListerror, setCheckListError] = useState("");

  useEffect(() => {
    getUserChecklist();
  }, []);

  useEffect(() => {
    if (checkListTask.length > 0) {
      setTasks(checkListTask);
    }
  }, [checkListTask]);

  const handleAddTask = async () => {
    if (!text) {
      toast.error("Required Field New-Task", {
        position: "top-right",
        duration: 5000,
      });
    }
    try {
      const newCheckListData = { text };
      await addUserCehckList(newCheckListData);
    } catch (err) {
      if (err.message == "Network Error") {
        toast.error("Connection timeout! / DB not responding", {
          position: "top-right",
          duration: 5000,
        });
      } else if (err.response.status == 400) {
        toast.error(err.response.data, {
          position: "top-right",
          duration: 5000,
        });
      } else {
        toast.error(`Error while add new task ${err.message}`, {
          position: "top-right",
          duration: 5000,
        });
      }
    }
  };

  const handleDeleteTask = async (_id) => {
    try {
      await deleteUserCheckList(_id);
      setTasks([]);
    } catch (err) {
      if (err.message == "Network Error") {
        toast.error("Connection timeout! / DB not responding", {
          position: "top-right",
          duration: 5000,
        });
      } else if (err.response.status == 400) {
        toast.error(err.response.data, {
          position: "top-right",
          duration: 5000,
        });
      } else {
        toast.error(`Error while deleting task ${err.message}`, {
          position: "top-right",
          duration: 5000,
        });
      }
    }
  };

  const handleEditTask = (index) => {
    setIsEditing(index);
    setEditedTask(tasks[index].text);
  };

  const handleSaveTask = async (index) => {
    const task = tasks[index];
    const _id = task._id;
    try {
      const updatedChecklist = {
        text: editedTask,
        completed: task.completed,
      };
      await editUserCheckList(_id, updatedChecklist);
      setIsEditing(null);
      setEditedTask("");
    } catch (err) {
      if (err.message == "Network Error") {
        toast.error("Connection timeout! / DB not responding", {
          position: "top-right",
          duration: 5000,
        });
      } else if (err.response.status == 400) {
        toast.error(err.response.data, {
          position: "top-right",
          duration: 5000,
        });
      } else {
        toast.error(`Error while editing task ${err.message}`, {
          position: "top-right",
          duration: 5000,
        });
      }
    }
  };

  const handleToggleComplete = async (index) => {
    const task = tasks[index];
    const _id = task._id;
    try {
      const updatedChecklist = {
        text: task.text,
        completed: !task.completed,
      };
      await editUserCheckList(_id, updatedChecklist);
    } catch (err) {
      if (err.message == "Network Error") {
        setCheckListError("Connection timeout! / DB not responding");
      } else if (err.response.status == 400) {
        setCheckListError(err.response.data);
      } else {
        setCheckListError(err.message);
      }
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "2rem auto",
        p: 2,
        backgroundColor: "skyblue",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            mb: 2,
            color: "black",
            fontSize: "24px",
            fontFamily: "Times New Roman",
          }}
        >
          Personalized Cleaning UserChecklist
        </Typography>
        <Box sx={{ display: "flex", mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Add a new task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
              backgroundColor: "white",
              fontFamily: "Times New Roman",
              fontSize: "16px",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTask}
            sx={{
              ml: 2,
              fontFamily: "Times New Roman",
              fontSize: "16px",
            }}
          >
            Add
          </Button>
        </Box>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={task._id}
              sx={{
                display: "flex",
                alignItems: "center",
                animation: "fadeIn 0.5s",
              }}
              className="fadeIn"
            >
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleComplete(index)}
              />
              {isEditing === index ? (
                <TextField
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  sx={{
                    flex: 1,
                    mr: 2,
                    fontFamily: "Times New Roman",
                    fontSize: "16px",
                    color: "black",
                  }}
                />
              ) : (
                <Typography
                  sx={{
                    flex: 1,
                    textDecoration: task.completed ? "line-through" : "none",
                    fontFamily: "Times New Roman",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  {task.text}
                </Typography>
              )}
              {isEditing === index ? (
                <IconButton
                  color="primary"
                  onClick={() => handleSaveTask(index)}
                >
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton
                  color="primary"
                  onClick={() => handleEditTask(index)}
                >
                  <EditIcon />
                </IconButton>
              )}
              <IconButton
                color="error"
                onClick={() => handleDeleteTask(task._id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserChecklist;
