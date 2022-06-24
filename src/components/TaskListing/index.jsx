import React, { useEffect, useContext, useState, useCallback } from "react";
import { TasksContext } from "../../contexts/Tasks";
import Task from "../Task/";
import TaskErrorBoundary from "../../ErrorBoundaries/TaskErrorBoundary";

const TaskListing = () => {
  const { tasks, hasNewTask, setHasNewTask } = useContext(TasksContext);
  const [isNew] = useState(hasNewTask);
  const [updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const title = 0;
  const startDate = 1;
  const endDate = 2;
  const description = 3;
  const id = 4;

  useEffect(() => {
    // console.log("has", hasNewTask);
    if (hasNewTask) {
      forceUpdate;
      console.log("force");
    }
  }, [hasNewTask]);

  const listTasks = !tasks
    ? null
    : tasks.map((task, index) => {
        return (
          <Task
            // hasNewTask={hasNewTask}
            title={task[title]}
            startDate={task[startDate]}
            endDate={task[endDate]}
            description={task[description]}
            internalKey={index.toString()}
          />
        );
      });

  return listTasks;
};

export default TaskListing;
