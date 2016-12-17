var express = require('express');
var path = require("path");
var app = express();

app.use(express.static('public'));
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})

app.get('/*', (req, res) => {
		res.sendfile(path.join(__dirname, 'index.html'))
	})
	/*app.use((req, res) => {
		match({
			routes,
			localtion: req.url
		}, (err, erro) => {
			console.log(xxx)
		})
	});*/
app.post("/postmessage", urlencodedParser, (req, res) => {
	let regx = /(\S*)\s(\S*\s\S*\s\S*)\s([\s\S]*)/;
	let formdate = regx.exec(req.body.datepicker)[2];
	let replacereg = /\s/g;
	response = {
		title: req.body.title,
		content: req.body.content,
		datepicker: formdate.replace(replacereg, '-')
	};
	console.log(response);
	res.end(JSON.stringify(response));
})
app.get("/sss", (req, res) => {
	console.log("xxx");
})
var server = app.listen(8081, function() {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})