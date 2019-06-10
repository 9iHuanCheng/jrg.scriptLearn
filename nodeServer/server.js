var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/
/*最初始的版本
  console.log('方方说：得到 HTTP 路径\n' + path)
  console.log('方方说：查询字符串为\n' + query)
  console.log('方方说：不含查询字符串的路径为\n' + pathNoQuery)
*/
/*原来版本  console.log('方方说：含查询字符串的路径 \n' + pathWithQuery)

  if(path === '/'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('哈哈哈')
    response.end()
  }*/
  /**这是方方老师修改的文本
  console.log('HTTP 路径为\n' + path)
  if(path == '/style'){
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body{background-color: #ddd;}h1{color: red;}')
    response.end()
  }else if(path == '/script'){
    response.setHeader('Content-Type', 'text/javascirpt; charset=utf-8')
    response.write('alert("这是JS执行的")')
    response.end()
  }else if(path == '/index'){
    response.setHeader('Content-Type','text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>' + 
	    '<head><link rel = "stylesheet" href = "/style">' + 
	    '</head><body>' + 
	    '<h1>您好</h1>' + 
	    '<script src = "/script"></script>' +
	    '</body></html>')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }
*/
  /*二次修改
  console.log('HTTP路径为\n' + path);
  if(path === '/style'){
	  response.setHeader('Content-Type', 'text/css;charset=utf-8');
	  response.write('body{' +
		  'background-color: #ddd;' +
	  '}' +
	  'h1{' +
		  'color: red;' +
	  '}');
  }
  else if(path==='/script'){
	  response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
	  response.write('alert("这是JS执行的")');
  }
  else if(path === "/"){
	response.statusCode = 200;
	response.setHeader('Content-Type','text/html;charset=utf-8');
  response.write('<!DOCTYPE>' +
	'<html>' +
	'<head>' +
	'<link rel="stylesheet" href="/style">' +
	'<meta charset = "utf-8"/>' +
	'<!--这里的meta可以不写，因为HTTP里已写---->' +
	'<title>Hello Friend</title>' +
	'</head>' +
	'<body>' +
	  '<h1>Hello Node.js</h1>' +
	  '<p>我是沂</p>' +
	  '<script src="/script"></script>' +
	'</body>' +
	'</html>');
  }
  else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('呜呜呜,找不到页面了(°ー°〃)')
    response.end()
  }
*/
/*稍微改了一点，用了下ES6的语法*/
console.log('HTTP 路径为\n' + path)
if(path == '/style'){
  response.setHeader('Content-Type', 'text/css; charset=utf-8')
  response.write(`
  body{
    background-color: #ddd;
}
  h1{
    color: red;
    }`)
  response.end()
}else if(path == '/script'){
  response.setHeader('Content-Type', 'text/javascirpt; charset=utf-8')
  response.write('alert("这是JS执行的")')
  response.end()
}else if(path == '/index'){
  response.setHeader('Content-Type','text/html; charset=utf-8')
  response.write(`
  <!DOCTYPE>
  <html>
    <head>
      <link rel = "stylesheet" href = "/style">
    </head>
    <body>
      <h1>您好</h1>
      <script src = "/script"></script>
    </body>
  </html>`)
  response.end()
}else{
  response.statusCode = 404
  response.setHeader('Content-Type', 'text/html;charset=utf-8')
  response.write('呜呜呜,找不到页面了(°ー°〃)')
  response.end()
}
  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功 \n 请用在空中转体 720 度然后用电饭煲打开 http://localhost:' + port)