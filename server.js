const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Web Server</title>

<style>

body{
    margin:0;
    font-family:Arial,sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:linear-gradient(-45deg,#c8ecff,#a7ddff,#7bc8ff,#b8f1ff);
    background-size:400% 400%;
    animation:bg 10s ease infinite;
    overflow:hidden;
}

@keyframes bg{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

.card{
    width:700px;
    max-width:90%;
    background:rgba(255,255,255,.9);
    border-radius:20px;
    padding:35px;
    text-align:center;
    box-shadow:0 10px 30px rgba(0,0,0,.2);
    animation:float 3s ease-in-out infinite;
}

@keyframes float{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-12px);}
}

.icon{
    font-size:90px;
    animation:rotate 8s linear infinite;
}

@keyframes rotate{
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}
}

h1{
    color:#0088cc;
}

h2{
    color:#0099ff;
}

p{
    font-size:18px;
}

button{
    margin-top:20px;
    padding:15px 30px;
    border:none;
    border-radius:30px;
    background:#00aaff;
    color:white;
    font-size:18px;
    cursor:pointer;
    transition:.3s;
}

button:hover{
    transform:scale(1.1);
    background:#0088cc;
}

.circle{
position:absolute;
border-radius:50%;
background:rgba(255,255,255,.3);
animation:move 8s infinite alternate;
}

.c1{
width:120px;
height:120px;
left:5%;
top:10%;
}

.c2{
width:180px;
height:180px;
right:10%;
bottom:10%;
}

@keyframes move{
from{transform:translateY(0);}
to{transform:translateY(50px);}
}

</style>

</head>

<body>

<div class="circle c1"></div>
<div class="circle c2"></div>

<div class="card">

<div class="icon">💻</div>

<h1>Web Server ของ</h1>

<h2>นางสาวศิริลักษณ์ อบนวล</h2>

<p><b>รหัสนักศึกษา :</b> 69319010399</p>

<p>🚀 เครื่องแม่ข่ายทำงานปกติบน Railway แล้ว</p>

<button onclick="alert('ยินดีต้อนรับเข้าสู่ Web Server')">
Welcome
</button>

</div>

</body>
</html>
`);
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
