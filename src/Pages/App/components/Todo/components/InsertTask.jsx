import React from 'react'
import { Input, Button } from '@nextui-org/react';

const InsertTask = ({task, setTask, insertTask}) => {
  return (
    <>
       <div className="row">
          <Input
          clearable
          type="text"
          placeholder="Task name"
          value={task}
          aria-label="set task name"
          onChange={(e) => setTask(e.target.value)}
          />
          <Button auto css={{backgroundColor: "#00adb5", fontSize: "1rem", fontWeight: "300"}} onClick={insertTask}>Add Task</Button>
        </div>
    </>
  )
}

export default InsertTask