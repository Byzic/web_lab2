function drawCanv(){
    let canv = document.getElementById("canvas");
    let ctx = canv.getContext('2d');
    ctx.fillStyle="#000000";
    const HEIGHT=400;
    const WIDTH=800;
    const EDOTREZOK=70;
    canv.width=WIDTH;
    canv.height=HEIGHT;

    //прямоугольник
    ctx.fillStyle="#FFCB74";
    ctx.fillRect(WIDTH/2, HEIGHT/2, EDOTREZOK, 2*EDOTREZOK);

    //треугольник
    ctx.beginPath();
    ctx.moveTo(WIDTH/2,HEIGHT/2);
    ctx.lineTo(WIDTH/2,HEIGHT/2-EDOTREZOK);
    ctx.lineTo(WIDTH/2-2*EDOTREZOK,HEIGHT/2);
    ctx.fill();
    ctx.stroke();

    //окружность
    ctx.beginPath();
    ctx.arc(WIDTH/2,HEIGHT/2,2*EDOTREZOK,Math.PI/2,Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle="#000000";
    //ось ординат

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,20);
    ctx.lineTo(WIDTH/2,HEIGHT-20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,20);
    ctx.lineTo(WIDTH/2-10,35);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,20);
    ctx.lineTo(WIDTH/2+10,35);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,20);
    ctx.lineTo(WIDTH/2+10,35);
    ctx.stroke();

        //4 палочки на оси
        ctx.beginPath();
        ctx.moveTo(WIDTH/2-5,HEIGHT/2+EDOTREZOK);
        ctx.lineTo(WIDTH/2+5,HEIGHT/2+EDOTREZOK);
        ctx.stroke();
        ctx.strokeText("-R/2",WIDTH/2+5,HEIGHT/2+EDOTREZOK);

        ctx.beginPath();
        ctx.moveTo(WIDTH/2-5,HEIGHT/2-EDOTREZOK);
        ctx.lineTo(WIDTH/2+5,HEIGHT/2-EDOTREZOK);
        ctx.stroke();
        ctx.strokeText("R/2",WIDTH/2+5,HEIGHT/2-EDOTREZOK);
        ctx.beginPath();
        ctx.moveTo(WIDTH/2-5,HEIGHT/2+2*EDOTREZOK);
        ctx.lineTo(WIDTH/2+5,HEIGHT/2+2*EDOTREZOK);
        ctx.stroke();
        ctx.strokeText("-R",WIDTH/2+5,HEIGHT/2+2*EDOTREZOK);
        ctx.beginPath();
        ctx.moveTo(WIDTH/2-5,HEIGHT/2-2*EDOTREZOK);
        ctx.lineTo(WIDTH/2+5,HEIGHT/2-2*EDOTREZOK);
        ctx.stroke();
        ctx.strokeText("-R",WIDTH/2+5,HEIGHT/2-2*EDOTREZOK);

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

        //4 палочки на оси
        ctx.beginPath();
        ctx.moveTo(WIDTH/2-EDOTREZOK,HEIGHT/2+5);
        ctx.lineTo(WIDTH/2-EDOTREZOK,HEIGHT/2-5);
        ctx.stroke();
        ctx.strokeText("-R/2",WIDTH/2-EDOTREZOK,HEIGHT/2-5);
        ctx.beginPath();
        ctx.moveTo(WIDTH/2+EDOTREZOK,HEIGHT/2+5);
        ctx.lineTo(WIDTH/2+EDOTREZOK,HEIGHT/2-5);
        ctx.stroke();
        ctx.strokeText("-R",WIDTH/2-2*EDOTREZOK,HEIGHT/2-5);
        ctx.beginPath();
        ctx.moveTo(WIDTH/2-2*EDOTREZOK,HEIGHT/2+5);
        ctx.lineTo(WIDTH/2-2*EDOTREZOK,HEIGHT/2-5);
        ctx.stroke();
        ctx.strokeText("R/2",WIDTH/2+EDOTREZOK,HEIGHT/2-5);
        ctx.beginPath();
        ctx.moveTo(WIDTH/2+2*EDOTREZOK,HEIGHT/2+5);
        ctx.lineTo(WIDTH/2+2*EDOTREZOK,HEIGHT/2-5);
        ctx.stroke();
        ctx.strokeText("R",WIDTH/2+2*EDOTREZOK,HEIGHT/2-5);



}
