if (process.argv.length < 3) {
	//checking if input passed
  console.error("Please add file: node read <filename>");
} else {
  const fs = require("fs").promises,
    l_filename = process.argv[2],// reading first argument
	mylog = (input) => {
		if(input) {
			console.log("|" + input.replaceAll("\n", "\n|"));
		} 
		else {
			console.log("|".padEnd(150,"~")+"|");
		}
	}; 
	mylog();
	mylog();
  mylog("Script:" + process.argv[1]); // printing path of js file
  mylog("Filename:" + l_filename); // printing the filename
  mylog();
  fs.readFile(l_filename, "utf8")
    .then((list) => {mylog(list);
	mylog()})
    .catch((error) => console.log(error));
}
