import React, { useEffect, useContext, useState } from "react";
import { TasksContext } from "../../contexts/Tasks";
import Task from "../Task/";

const TaskListing = () => {
  const { tasks, setSuccess, success } = useContext(TasksContext);
  const title = 0;
  const startDate = 1;
  const endDate = 2;
  const description = 3;
  const id = 4;

  useEffect(() => {
    // @todo implement update on tasks list
  }, [success]);

  const listTasks = !tasks
    ? null
    : tasks.map((task, index) => {
        return (
          <Task
            title={task[title]}
            startDate={task[startDate]}
            endDate={task[endDate]}
            description={task[description]}
          />
        );
      });

  return listTasks;
};

export default TaskListing;
