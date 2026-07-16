// 1. เรียกใช้งาน Express ซึ่งเป็นเครื่องมือสร้าง Web Server
const express = require("express");
const app = express();

// 2. สร้าง Route หรือเส้นทาง เมื่อมีคนพิมพ์ URL เข้ามาที่หน้าแรก (/)
app.get("/", (request, response) => {
    // สิ่งที่ Server จะตอบกลับไป (Response)
    response.send(`
        <div style="font-family: 'Segoe UI', sans-serif; text-align: center; margin-top: 50px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); min-height: 100vh; padding: 40px 20px;">
            <div style="background: white; max-width: 500px; margin: 0 auto; padding: 30px; border-radius: 20px; box-shadow: 0 10px 30px rgba(147, 51, 234, 0.2); border: 2px solid #c084fc;">
                <h1 style="color: #7e22ce;">ยินดีต้อนรับสู่ Server ของหนู</h1>
                <p style="color: #9333ea;">นี่คือ Web Server เครื่องแรกที่สร้างขึ้นเองค่ะ</p>
                <hr style="width: 50%; margin: 20px auto; border: 1px solid #c084fc;">
                <h2 style="color: #6b21a8;">ข้อมูลนักศึกษา</h2>
                <p style="color: #581c87;"><strong>รหัสนักศึกษา:</strong> 69319010399</p>
                <p style="color: #581c87;"><strong>ชื่อ-นามสกุล:</strong> นางสาวศิริลักษณ์ อบนวล</p>
                <p style="color: #581c87;"><strong>ชื่อเล่น:</strong> ปาร์ค</p>
                <p style="color: #581c87;"><strong>สาขาวิชา:</strong> เทคโนโลยีสารสนเทศ HIT1M</p>
                <p style="color: #581c87;"><strong>สถานศึกษา:</strong> วิทยาลัยเทคโนโลยีชลบุรี</p>
                <p style="color: #581c87;"><strong>วันเกิด:</strong> 17/04/2551</p>
            </div>
        </div>
    `);
});

// 3. สั่งให้ Server เริ่มทำงานและรอรับข้อมูลที่ Port (Render จะกำหนด PORT มาให้เองอัตโนมัติ)
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Server กำลังทำงานที่ Port " + listener.address().port);
});
