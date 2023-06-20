const fs = require("fs");

fs.writeFile("./file.txt", "krishna", "utf8", (err) => {
  if (err) {
    console.log("Error writing file:", err);
    return;
  }

  console.log("File written!");
});


let sum = 0;
for (let i = 0; i < 10000000; i++) {
    sum += i;
}
console.log(sum);