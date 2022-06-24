import { v4 as uuidv4 } from "uuid";
export default class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.newTask = null;
  }

  createNewTaskId() {
    return (this.newTask = { 4: uuidv4(), ...newTask });
  }

  addTask() {
    this.tasks.push(this.newTask);
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  taskHasId(task) {
    return task.length > 4 ? true : false;
  }

  createTask(task) {
    console.log("creating");
    if (!this.taskHasId(task)) {
      try {
        this.newTask = task;
        this.addTask();
        this.saveTasks();
        console.log("new task: ", this.tasks);
        return true;
      } catch (error) {
        return false;
      }
    } else {
      console.log("n e nova");
    }
  }

  getTasks() {
    return this.tasks;
  }
}
