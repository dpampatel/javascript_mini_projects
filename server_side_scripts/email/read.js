if (process.argv.length < 3) {
	//checking if input passed
  console.error("Please add file: node read <filename>");
} else {
  const fs = require("fs").promises,
    l_filename = process.argv[2]; // reading first argument
  console.log("\n\nScript:", process.argv[1]); // printing path of js file
  console.log("Filename:", l_filename); // printing the filename
  console.log("========================================");
  fs.readFile(l_filename, "utf8")
    .then((list) => console.log(list))
    .catch((error) => console.log(error));
}
