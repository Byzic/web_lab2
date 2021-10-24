function drawCanv(){
    let canv = document.getElementById("canvas");
    let ctx = canv.getContext('2d');
    ctx.fillStyle="#000000";
    const HEIGHT=400;
    const WIDTH=800;
    const EDOTREZOK=(HEIGHT-50)/10;
    canv.width=WIDTH;
    canv.height=HEIGHT;
    //прямоугольник
    ctx.fillStyle="#FFCB74";
    ctx.fillRect(WIDTH/2, HEIGHT/2, EDOTREZOK, 2*EDOTREZOK);

    //треугольник
    ctx.moveTo(WIDTH/2,HEIGHT/2);
    ctx.lineTo(WIDTH/2,HEIGHT/2-EDOTREZOK);
    ctx.lineTo(WIDTH/2-2*EDOTREZOK,HEIGHT/2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,HEIGHT/2);
    ctx.lineTo(WIDTH/2,HEIGHT/2+2*EDOTREZOK);
    ctx.lineTo(WIDTH/2-2*EDOTREZOK,HEIGHT/2);
    ctx.fill();

    //окружность

    ctx.arc(WIDTH/2,HEIGHT/2,2*EDOTREZOK,Math.PI/2,Math.PI);
    ctx.fill();

    ctx.fillStyle="#000000";
    //ось ординат

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,0);
    ctx.lineTo(WIDTH/2,HEIGHT);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,0);
    ctx.lineTo(WIDTH/2-10,15);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,0);
    ctx.lineTo(WIDTH/2+10,15);
    ctx.stroke();

    //10 палочек на оси
    for (let i=-5;i<=5;i++ ){
        ctx.beginPath();
        ctx.moveTo(WIDTH/2-5,HEIGHT/2+i*EDOTREZOK);
        ctx.lineTo(WIDTH/2+5,HEIGHT/2+i*EDOTREZOK);
        ctx.stroke();
        ctx.strokeText(String(i),WIDTH/2+5,HEIGHT/2+i*EDOTREZOK);
    }


    //ось абсцисс
    ctx.beginPath();
    ctx.moveTo(WIDTH*2/10,HEIGHT/2);
    ctx.lineTo(8*WIDTH/10,HEIGHT/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH*8/10,HEIGHT/2);
    ctx.lineTo(8*WIDTH/10-15,HEIGHT/2-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH*8/10,HEIGHT/2);
    ctx.lineTo(8*WIDTH/10-15,HEIGHT/2+10);
    ctx.stroke();

    //10 палочек на оси
    for (let i=-5;i<=5;i++ ){
        ctx.beginPath();
        ctx.moveTo(WIDTH/2-i*EDOTREZOK,HEIGHT/2+5);
        ctx.lineTo(WIDTH/2-i*EDOTREZOK,HEIGHT/2-5);
        ctx.stroke();
        ctx.strokeText(String(-i),WIDTH/2-i*EDOTREZOK,HEIGHT/2-5);

    }





}
