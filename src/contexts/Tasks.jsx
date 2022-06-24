import { useToast } from "@chakra-ui/react";
import React, { createContext, useState, useEffect } from "react";
import Model from "../database/Model";

export const TasksContext = createContext("");

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(new Model().getTasks());
  const [success, updateSuccess] = useState(false);
  const [errorStatus, updateErrorStatus] = useState("initial");
  const [newTask, updateNewTask] = useState();
  const [hasNewTask, setHasNewTask] = useState(false);

  function validateInputs() {
    console.log("task beign validated: ", newTask);
    if (newTask) {
      for (let index = 0; index < newTask.length; index++) {
        console.log("field", newTask[index], newTask[index].length);
        if (!newTask[index].length > 0) {
          updateErrorStatus("hasNoError");
          updateErrorStatus("hasError");
          console.log("deu ruim");
          return false;
        }
      }
      updateErrorStatus("hasNoError");
    }
  }

  const setNewTask = (task) => {
    updateNewTask(task);
    console.log("task::: ", task);
    return true;
  };

  const saveNewTask = (task) => {
    return new Promise((resolve, reject) => {
      if (setNewTask(task)) {
        resolve();
      } else {
        reject();
      }
    });
  };

  const handleSubmitNewTask = (task) => {
    saveNewTask(task)
      .then(() => {
        if (errorStatus == "hasNoError") {
          try {
            const model = new Model();
            model.createTask(newTask);
          } catch (error) {
            console.log("errrrroooo", error);
          }
          updateSuccess(true);
          setHasNewTask(true);
        }
      })
      .catch(() => {
        updateErrorStatus("hasError");
      });
  };

  useEffect(() => {
    console.log("Context sofreu update");
    console.log("Context tasks", tasks);
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleSubmitNewTask,
        newTask,
        validateInputs,
        errorStatus,
        success,
        updateNewTask,
        hasNewTask,
        setHasNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
