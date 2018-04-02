var http = require('http')

var server = http.createServer((req,res)=>{
  let path = req.url
  if(path == '/'){
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.write(`
      <!DOCTYPE>
      <html>
        <head>
          <link rel='stylesheet' href='/style'>
        </head>
        <body>
          <h1>Hello World</h1>
          <h2>你好</h2>
          <script type='text/javascript' src='/main'></script>
        </body>
      </html>
    `)
    res.end()
  }else if(path == '/style'){
    res.setHeader('Content-Type','text/css')
    res.write(`
      body{
        background:#ededed;
      }
      h1{
        color:#f00;
      }
      h2{
        color:#666;
      }
    `)
    res.end()
  }else if(path == '/main'){
    res.setHeader('Content-Type','text/javascript')
    res.write(`
      alert('Hello NodeJS')
    `)
    res.end()
  }else{
    res.statusCode = 404
    res.end()
  }
})

server.listen(3000)
console.log('正在监听')