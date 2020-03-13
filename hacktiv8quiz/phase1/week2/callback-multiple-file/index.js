const fs = require("fs");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, "utf8", function(err, data) {
    if (err) {
      console.log(err);
    } else {
      sleep(5000);
      const parentsData = JSON.parse(data);
      fs.readFile(children_file, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          sleep(5000);
          const childrenData = JSON.parse(data);
          for (let i = 0; i < parentsData.length; i++) {
            for (let j = 0; j < childrenData.length; j++) {
              if (!parentsData[i].children) {
                parentsData[i].children = [];
              }
              if (parentsData[i].last_name === childrenData[j].family) {
                parentsData[i].children.push(childrenData[j].full_name);
              }
            }
          }
          console.log(parentsData);
        }
      });
    }
  });
}

match_data("./parents.json", "./children.json");
console.log("Notification : Data sedang diproses !");
