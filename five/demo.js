var fs = require('fs');
var dirName = process.argv[2];
if (dirName == undefined){
	console.log("没有输入目录")
	process.exit(0);
}
fs.exists(dirName, function(exists) {
  if(exists){
     console.log("目录存在");
	 process.exit(0);
  }
  if(!exists){
	fs.mkdirSync("./" + dirName);  //mkdir $1
	process.chdir("./" + dirName); //cd $1 
	fs.mkdirSync("./css");         //mkdir ./css
	fs.mkdirSync("./js");          //mkdir ./js
	fs.writeFileSync("./index.html",`<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>
`);
	fs.writeFileSync("./css/style.css",`h1{color: red;}`);
	fs.writeFileSync("./js/main.js",`var string = "Hello World"
alert(string)
`);
	process.exit(0);
	}
});