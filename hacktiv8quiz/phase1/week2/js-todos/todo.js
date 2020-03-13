const commands = process.argv;
const Task = require("./model/task");
const TodoView = require("./view/todoview");
let data;

if (commands[2] === "help") {
  return console.log(
    `$ node todo.js\n$ node todo.js help\n$ node todo.js list\n$ node todo.js add <task_content>\n$ node todo.js findById <task_id>\n$ node todo.js delete <task_id>\n$ node todo.js complete <task_id>\n$ node todo.js uncomplete <task_id>`
  );
}

if (commands[2] === "list") {
  data = Task.all();
  return console.log(TodoView.viewList(data));
}

if (commands[2] === "list:completed") {
  data = Task.getCompleted();
  return console.log(TodoView.viewList(data));
}

if (commands[2] === "list") {
  data = Task.all();
  return console.log(TodoView.viewList(data));
}

let listmatch = commands[2].match(/list:(?<param>\w+)/);
if (listmatch !== null && listmatch.length === 2) {
  return console.log(
    TodoView.viewList(
      Task.getData(listmatch.groups.param, commands[3] ? commands[3] : "asc")
    )
  );
}

let filtermatch = commands[2].match(/filter:(?<param>\w+)/);
if (filtermatch !== null && filtermatch.length === 2) {
  return console.log(
    TodoView.viewList(Task.getDataByTags(filtermatch.groups.param))
  );
}

if (commands[2] === "complete") {
  data = Task.complete(Number(commands[3]), true);
  return console.log(TodoView.viewList(data));
}

if (commands[2] === "tag") {
  let task = Task.findById(Number(commands[3]));
  commands.splice(0, 4);
  task.addTags(commands);
  task.save();
  return console.log(`Tagged task ${task.task} with tags: ${commands}`);
}

if (commands[2] === "uncomplete") {
  data = Task.complete(Number(commands[3]), false);
  return console.log(TodoView.viewList(data));
}

if (commands[2] === "add") {
  let task = new Task({ task: commands[3] });
  task.save();
  return console.log(`Added ${commands[3]} to your TODO list...`);
}
if (commands[2] === "findById") {
  data = Task.findById(Number(commands[3]));
  return console.log(TodoView.viewTask(data));
}
if (commands[2] === "delete") {
  let deleted = Task.delete(Number(commands[3]));
  return console.log(`Deleted ${deleted} from your TODO list...`);
}
