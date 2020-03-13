const fs = require("fs");
const path = require("path");

class Task {
  tags = [];
  constructor(data) {
    data = Object.assign({ _new: true }, data);
    for (let key in data) {
      if (key === "created_at") {
        this[key] = new Date(data[key]);
      } else {
        this[key] = data[key];
      }
    }
  }

  static getData(sortBy = "", order = "asc") {
    console.log(order)
    const file = fs.readFileSync(path.join(__dirname, "./data.json"), "utf8");
    const parsed = JSON.parse(file);
    const data = [];
    for (let i = 0; i < parsed.length; i++) {
      parsed[i].created_at = new Date(parsed[i].created_at);
      data.push(new this(parsed[i]));
    }

    if (sortBy.length > 0) {
      if (sortBy === "created_at") {
        if (order === "asc") {
          data.sort((a, b) => a.created_at.getTime() - b.created_at.getTime());
        } else {
          data.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
        }
      } else {
        if (order === "asc") {
          data.sort((a, b) => a[sortBy] - b[sortBy]);
        } else {
          data.sort((a, b) => b[sortBy] - a[sortBy]);
        }
      }
    }
    return data;
  }

  static getCompleted() {
    const tasks = this.getData();
    const completedTask = tasks.filter(task => task.complete === true);
    return completedTask;
  }

  static findById(id) {
    const tasks = this.getData();
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i]["id"] === id) {
        return new this({ ...tasks[i], _new: false });
      }
    }
    return false;
  }

  static all() {
    return this.getData();
  }

  static delete(id) {
    const tasks = this.getData();
    let deleted = "";
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        deleted = tasks[i].task;
        tasks.splice(i, 1);
      }
    }
    this.save(tasks);
    return deleted;
  }

  static complete(id, completed = false) {
    const tasks = this.getData();
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks[i].complete = completed;
      }
    }
    this.save(tasks);
    return tasks;
  }

  static save(data) {
    fs.writeFileSync(
      path.join(__dirname, "./data.json"),
      JSON.stringify(data, null, 2)
    );
  }

  static getDataByTags(tag) {
    const tasks = this.getData();
    let found = tasks.filter(task => task.tags.includes(tag));
    found.sort((a, b) => a.created_at.getTime() - b.created_at.getTime());
    return found;
  }

  addTags(tags) {
    this.tags = [...new Set([...this.tags, ...tags])];
    return this;
  }

  sortBy(sortField, order = "asc") {
    this.sortField = sortField;
    this.sortOrder = order;
    return this;
  }

  save() {
    const tasks = this.constructor.getData();
    if (this._new) {
      let nextId = tasks[tasks.length - 1].id + 1;
      tasks.push({
        id: nextId ? nextId : 1,
        task: this.task,
        complete: !!this.complete,
        tags: this.tags,
        created_at: new Date()
      });
    } else {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === this.id) {
          tasks[i].task = this.task;
          tasks[i].complete = !!this.complete;
          tasks[i].tags = this.tags;
        }
      }
    }
    this.constructor.save(tasks);
  }
}

module.exports = Task;
