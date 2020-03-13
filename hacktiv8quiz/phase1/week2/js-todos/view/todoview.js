function viewList(data) {
  let buffer = [];
  for (let i = 0; i < data.length; i++) {
    buffer.push(viewTask(data[i]));
  }
  return buffer.join("\n");
}

function viewTask(data) {
  return `${data.id}. [${data.complete ? "x" : " "}] ${
    data.task
  } [${data.tags.join(", ")}] created at: ${data.created_at.toDateString()}`;
}

module.exports = { viewList, viewTask };
