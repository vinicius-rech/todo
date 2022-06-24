import { useToast } from "@chakra-ui/react";
import React, { createContext, useState, useEffect } from "react";
import Model from "../database/Model";

export const TasksContext = createContext("");

export const TasksProvider = ({ children }) => {
  const [tasks] = useState(new Model().getTasks() || []);
  const [success, updateSuccess] = useState(false);
  const [errorStatus] = useState("initial");
  const [newTask, updateNewTask] = useState();

  function setSuccess(boolValue) {
    updateSuccess(boolValue);
  }

  function saveNewTask(task) {
    if (errorStatus == "hasNoError" || errorStatus == "initial") {
      const model = new Model();
      model.createTask(task);
      updateSuccess(true);
    }
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
        setSuccess,
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
