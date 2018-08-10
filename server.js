var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var dir, arg = process.argv[2] || ''; // 命令行第三个参数，用来接收目录，可为空，相对当前server.js文件的目录名称
// 比如使用命令 node server debug，意思就是debug文件夹与server.js文件同级
// 且你想以debug文件夹启动web服务

http.createServer(function(req, res) {
	var pathname = __dirname + url.parse(req.url).pathname;
	dir = dir ? dir : pathname; // 记住dir(目录)
	pathname = dir ? pathname.replace(dir, dir + arg + '/') : pathname; // 替换文件静态路径
	if (path.extname(pathname) == "") {
		pathname += "/";
	}
	if (pathname.charAt(pathname.length - 1) == "/") {
		pathname += "index.html"; // 入口文件，此处默认index.html
	}

	fs.exists(pathname, function(exists) {
		if (exists) {
			switch (path.extname(pathname)) {
				case ".html":
					res.writeHead(200, {
						"Content-Type": "text/html"
					});
					break;
				case ".js":
					res.writeHead(200, {
						"Content-Type": "text/javascript"
					});
					break;
				case ".json":
					res.writeHead(200, {
						"Content-Type": "text/json"
					});
					break;
				case ".css":
					res.writeHead(200, {
						"Content-Type": "text/css"
					});
					break;
				case ".gif":
					res.writeHead(200, {
						"Content-Type": "image/gif"
					});
					break;
				case ".jpg":
					res.writeHead(200, {
						"Content-Type": "image/jpeg"
					});
					break;
				case ".png":
					res.writeHead(200, {
						"Content-Type": "image/png"
					});
					break;
				default:
					res.writeHead(200, {
						"Content-Type": "application/octet-stream"
					});
			}

			// res可以自己添加信息来简单交互 比如可以修改点header信息 或者修改返回的资源数据
			fs.readFile(pathname, function(err, data) {
				res.end(data);
			});
		} else {
			res.writeHead(404, {
				"Content-Type": "text/html"
			});
			res.end("<h1>404 Not Found</h1>");
		}
	});
}).listen(8080, "127.0.0.1"); // 服务器端口

console.log("server running at http://127.0.0.1:8080/");