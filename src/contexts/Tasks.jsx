import React, { createContext, useState, useEffect } from "react";
import Model from "../database/Model";

export const TasksContext = createContext("");

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(new Model().getTasks());
  const [formData, setFormData] = useState();
  const [validationError, updateValidationError] = useState("initial");

  const _isFilled = (inputValue) => {
    !inputValue
      ? updateValidationError("hasError")
      : updateValidationError("hasNoError");
  };

  const _validateInputs = (formData) => {
    formData.forEach((inputValue) => {
      _isFilled(inputValue);
    });
  };

  const handleSubmit = (formData) => {
    console.log(formData);
    _validateInputs(formData);

    // // setFormData(data);
    // console.log("FormData: ", formData);
    // new Model().addTask(data);
    // setTasks([...tasks, data]);
  };

  useEffect(() => {
    console.log("Context sofreu update");
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{ allTasks: tasks, submit: handleSubmit, error: validationError }}
    >
      {children}
    </TasksContext.Provider>
  );
};
