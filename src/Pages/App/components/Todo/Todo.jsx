import React, { useState } from "react";
import { useEffect } from "react";
import "./todo.scss";

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
        <div className="row">
          <input
            type="text"
            placeholder="Digit task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={insertTask}>Insert</button>
        </div>
        <div>
        {tasksList &&
          tasksList.map((task) => <h2 key={task._id}> {task.task} </h2>)
        }
        </div>

      </div>
    </>
  );
};

export default Todo;
