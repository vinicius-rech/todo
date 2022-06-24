import { v4 as uuidv4 } from "uuid";
export default class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.newTask = null;
  }

  createNewTaskId(task) {
    return (task = { 4: uuidv4(), ...task });
  }

  addTask(task) {
    this.newTask = this.createNewTaskId(task);
    this.tasks.push(this.newTask);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  taskHasId(task) {
    return task.length > 4 ? true : false;
  }

  createTask(task) {
    if (!this.taskHasId(task)) {
      this.addTask(task);
    } else {
      // @todo implement old task edit
    }
  }

  getTasks() {
    return this.tasks;
  }
}
