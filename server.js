// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http'
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Web Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>My Web Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background:linear-gradient(135deg,#dff6ff,#bdeaff,#8fd3ff);
}

/* พื้นหลังเคลื่อนไหว */
body::before{
    content:"";
    position:absolute;
    width:200%;
    height:200%;
    background:
        radial-gradient(circle,#ffffff55 2px,transparent 2px);
    background-size:60px 60px;
    animation:bgMove 20s linear infinite;
}

@keyframes bgMove{
    from{transform:translate(0,0);}
    to{transform:translate(-100px,-100px);}
}

/* กล่องหลัก */
.container{
    position:relative;
    z-index:2;
    width:80%;
    max-width:700px;
    background:rgba(255,255,255,.8);
    backdrop-filter:blur(12px);
    border-radius:25px;
    padding:40px;
    text-align:center;
    box-shadow:0 15px 35px rgba(0,140,255,.3);
    animation:float 3s ease-in-out infinite;
}

@keyframes float{
    0%{transform:translateY(0);}
    50%{transform:translateY(-12px);}
    100%{transform:translateY(0);}
}

.icon{
    font-size:90px;
    animation:spin 8s linear infinite;
}

@keyframes spin{
    from{transform:rotate(0deg);}
    to{transform:rotate(360deg);}
}

h1{
    color:#0077cc;
    margin-top:15px;
    font-size:32px;
}

h2{
    color:#0099ff;
    margin:15px 0;
}

p{
    color:#333;
    font-size:18px;
    line-height:1.8;
}

.info{
    margin-top:25px;
    padding:20px;
    border-radius:15px;
    background:#eef9ff;
    border:2px solid #8fd3ff;
}

.btn{
    display:inline-block;
    margin-top:25px;
    padding:15px 35px;
    background:#00aaff;
    color:white;
    border-radius:30px;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
    animation:glow 2s infinite alternate;
}

.btn:hover{
    transform:scale(1.08);
    background:#0088dd;
}

@keyframes glow{
    from{
        box-shadow:0 0 10px #6ed6ff;
    }
    to{
        box-shadow:0 0 25px #00bfff;
    }
}

/* วงกลมตกแต่ง */
.circle{
    position:absolute;
    border-radius:50%;
    background:rgba(255,255,255,.3);
    animation:move 8s infinite alternate;
}

.c1{
    width:120px;
    height:120px;
    top:10%;
    left:10%;
}

.c2{
    width:180px;
    height:180px;
    bottom:10%;
    right:10%;
    animation-duration:10s;
}

@keyframes move{
    from{
        transform:translateY(0);
    }
    to{
        transform:translateY(40px);
    }
}

footer{
    margin-top:20px;
    color:#555;
}
</style>

</head>
<body>

<div class="circle c1"></div>
<div class="circle c2"></div>

<div class="container">

<div class="icon">💻</div>

<h1>ยินดีต้อนรับสู่ Web Server</h1>

<h2>🌐 Computer Technology</h2>

<div class="info">

<p><strong>ชื่อ - สกุล</strong><br>
นางสาวศิริลักษณ์ อบนวล</p>

<br>

<p><strong>รหัสนักศึกษา</strong><br>
69319010399</p>

<br>

<p>🚀 เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้ว</p>

</div>

<a class="btn" href="#">💙 Welcome</a>

<footer>
<p>💻 Node.js Web Server | HTML + CSS Animation</p>
</footer>

</div>

</body>
</html>
`);

});

// 4. เปิดใช้งาน Server
server.listen(port, () => {
    console.log(\`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: \${port}\`);
});
