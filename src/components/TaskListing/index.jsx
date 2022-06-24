import React, { useEffect, useContext, useState, useCallback } from "react";
import { TasksContext } from "../../contexts/Tasks";
import Task from "../Task/";
import TaskErrorBoundary from "../../ErrorBoundaries/TaskErrorBoundary";

// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue((value) => value + 1); // update state to force render
//   console.log("updated");
// }

const TaskListing = () => {
  const { tasks, hasNewTask, setSucc, success } = useContext(TasksContext);
  const [forceRender, updateForceRender] = useState(false);
  const title = 0;
  const startDate = 1;
  const endDate = 2;
  const description = 3;
  const id = 4;

  useEffect(() => {
    if (success) {
      !forceRender ? setSucc(true) : setSucc(false);
    }
  }, [success]);

  const listTasks = !tasks
    ? null
    : tasks.map((task, index) => {
        return (
          <Task
            forceUpdate={forceRender}
            title={task[title]}
            startDate={task[startDate]}
            endDate={task[endDate]}
            description={task[description]}
            internalKey={index}
          />
        );
      });

  return listTasks;
};

export default TaskListing;
