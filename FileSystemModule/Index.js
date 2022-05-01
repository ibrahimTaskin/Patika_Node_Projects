const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err, data) => {
    err ? console.log(err) : console.log("Dosya eklendi");
  }
);

fs.readFile("employees.json", "utf8", (err, data) => {
  err ? console.log(err) : console.log(data);
});

fs.appendFile(
  "employees.json",
  '\n,{"name": "Employee 1 Name", "salary": 2000}',
  (err, data) => {
    err ? console.log(err) : console.log("Veri güncellendi.");
  }
);

fs.unlink("employees.json", (err, data) => {
  err ? console.log(err) : console.log("Dosya silindi.");
});
