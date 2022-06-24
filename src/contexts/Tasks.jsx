import { useToast } from "@chakra-ui/react";
import React, { createContext, useState, useEffect } from "react";
import Model from "../database/Model";

export const TasksContext = createContext("");

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(new Model().getTasks() || []);
  const [success, updateSuccess] = useState(false);
  const [errorStatus, updateErrorStatus] = useState("initial");
  const [newTask, updateNewTask] = useState();

  function setSuccess(boolValue) {
    updateSuccess(boolValue);
  }

  function saveNewTask(task) {
    if (errorStatus == "hasNoError" || errorStatus == "initial") {
      const model = new Model();
      model.createTask(task) ? updateSuccess(true) : updateSuccess(false);
    }
    console.log("sucessoaaa", success);
  }

  function setNewTask(task, callback) {
    updateNewTask(task);
    callback(task);
  }

  function handleSubmitNewTask(task) {
    setNewTask(task, saveNewTask);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        submit: handleSubmitNewTask,
        setSucc: setSuccess,
        newTask,
        errorStatus,
        success,
        updateNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
