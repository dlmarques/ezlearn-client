import React, { useState } from "react";
import { useEffect } from "react";
import {  Button } from '@nextui-org/react';
import "./todo.scss";
import InsertTask from "./components/InsertTask";

const Todo = ({ userID }) => {
  const [task, setTask] = useState();
  const [inserted, setInserted] = useState(0);
  const [tasksList, setTasksList] = useState();

  async function insertTask() {
    setInserted(inserted + 1);
    try {
      fetch("http://localhost:3001/api/todo/addTask", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: userID,
          task: task,
        }),
      });
      setTask("");
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTask(_id){
    setInserted(inserted - 1);
    try {
      fetch("http://localhost:3001/api/todo/deleteTask", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: _id,
        }),
      });
      setTask("");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/todo/userTask", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: userID,
      }),
    })
    .then((response) => response.json())
    .then((actualData) => setTasksList(actualData))
  }, [inserted]);

  return (
    <>
      <div className="todo-container">
        <h1>Todo List</h1>
        <InsertTask task={task} setTask={setTask} insertTask={insertTask} />
        <div className="tasks-list">
        {tasksList &&
          tasksList.map((task) => 
          <div className="task">
            <h2 key={task._id}> {task.task} </h2>
            <Button auto onClick={() => deleteTask(task._id)} color="error">Delete</Button>
          </div>          
          )
        }
        </div>

      </div>
    </>
  );
};

export default Todo;
