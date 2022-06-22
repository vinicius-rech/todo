export default class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }
  addTask(data) {
    this.tasks.push(data);
    this.saveTasks();
    console.log("new task added and saved", this.getTasks());
  }
  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  getTasks() {
    return !this.tasks ? null : this.tasks;
  }
}
