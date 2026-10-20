import { Task, TypeStatusTask } from "./types/task.types";

let tasks: Task[] = [];

let nextId: number = 0;

function addTask(title: string, description?: string): Task {
  const newTask: Task = {
    id: ++nextId,
    title: title,
    description: description,
    status: "todo",
  };
  tasks.push(newTask);
  return newTask;
}
function changeTask(id: number, status: TypeStatusTask): Task | undefined {
  const selectedTask = tasks.find((task) => task.id === id);
  if (selectedTask === undefined) {
    return undefined;
  }
  if (selectedTask.status === status) {
    console.log("درحال حاضر تسکی با این id وجود دارد");
    return selectedTask;
  }
  selectedTask.status = status;

  return selectedTask;
}

function editTask(
  id: number,
  title?: string,
  description?: string,
  status?: TypeStatusTask,
): Task | undefined {
  const item = tasks.find((task) => task.id === id);
  if (!item) {
    console.log("task not found");
    return undefined;
  }
  if (title !== undefined) item.title = title;
  if (description !== undefined) item.description = description;
  if (status !== undefined) item.status = status;
  return item;
}

function deleteTask(id: number) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    console.log("Task not found!");
    return undefined;
  }
  const removeItem = tasks.splice(index, 1)[0];

  return removeItem;
}

addTask("learn node.js");
addTask("learn node.js", "test");
addTask("learn node", "test");

changeTask(1, "doing");
deleteTask(3);
editTask(2, undefined, "in class", "doing");
console.table(tasks);
