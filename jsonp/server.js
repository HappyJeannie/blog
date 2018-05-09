var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.env.PORT || 8888;

var server = http.createServer((req,res)=>{
  let temp = url.parse(req.url,true);
  let path = temp.pathname;
  let query = temp.query;
  let method = req.method;

  if(path == '/'){
    let num = fs.readFileSync('./db','utf8')
    let str = fs.readFileSync('./index.html','utf8');
    str = str.replace('&&&mount&&&',num);
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.write(str);
    res.end();
  }else if(path == '/style.css'){
    let str = fs.readFileSync('./style.css','utf8');
    res.setHeader('Content-Type','text/css')
    res.write(str);
    res.end();
  }else if(path == '/main.js'){
    let str = fs.readFileSync('./main.js','utf8');
    res.setHeader('Content-Type','applocation/javascript')
    res.write(str);
    res.end();
  }else if(path === '/pay' && method.toUpperCase() === 'POST'){
    let num = fs.readFileSync('./db','utf8')
    let newNum = parseInt(num) - 1;
    fs.writeFileSync('./db',newNum);
    res.write('success');
    res.end();
  }else{
    let str = "出错";
    res.statusCode = 404
    res.write(str);
    res.end();
  }
})
server.listen(port);
console.log(
  "监听 " +
    port +
    " 成功\n打开 http://localhost:" +
    port
);
