
let errorX1= document.createElement("p");
errorX1.textContent = "Значение X не является числом";
let errorX2= document.createElement("p");
errorX2.textContent = "Значение X не входит в интервал (-5,5)";
let errorX3= document.createElement("p");
errorX3.textContent = "Введите значение X";
let errorY=document.createElement("p");
errorY.textContent = "Значение Y не выбрано";
let errorR= document.createElement("p");
errorR.textContent = "Значение R  не выбрано";
//$('#button_and_errors').append(errorX,errorY1,errorY2,errorR);
let inputY;
let inputX;
let inputR;

let canvas=document.getElementById("canvas");
let ctx = canvas.getContext('2d');
const Y_VALUES = [-3.0,-2.0, -1.0,  0.0,  1.0,  2.0, 3.0, 4.0, 5.0];
let yFromCanvas;
let xFromCanvas;
const HEIGHT=400;
const WIDTH=800;
const EDOTREZOK=(HEIGHT-50)/10;


//$('button').slideUp( 'slow');
//$('button').slideDown( 'slow');
// start();
$(document).ready(function(){
    $('.r-button').click(function(){
        $('.r-button').removeClass("active");
        $(this).addClass("active");
        inputR=document.getElementsByClassName("active")[0].value;
        errorR.remove();
        removeError($('#r'));
        drawFigures();
        drawPoints();
    });



    canvas.addEventListener("mousedown",function (event) {

        if (!validateR()){
            window.scrollBy(0,300);
            return;
        }
        xFromCanvas=(event.offsetX-canvas.width/2)/EDOTREZOK;
        yFromCanvas=-(event.offsetY-canvas.height/2)/EDOTREZOK;
        drawPoint(event.offsetX,event.offsetY);
        if(xFromCanvas <= -3||yFromCanvas<-3||xFromCanvas>=5||yFromCanvas>5){
            return;
        }
        inputX=xFromCanvas.toFixed(2);
        findNearestY();

        sendCheckAreaRequest(inputX,inputY,inputR);


    });

    $('#main-form').on('submit', function(event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        } else {

             massivWithY.forEach(function (inputY){
                 sendCheckAreaRequest(inputX,inputY,inputR);
                 drawPoint(inputX*EDOTREZOK+canvas.width/2,-inputY*EDOTREZOK+canvas.height/2);
             })


        }
        $('#main-form').trigger('reset');
    });


});
function findNearestY(){
    let minDifference=Infinity;
    for (let i = 0; i < Y_VALUES.length; i++) {
        if (Math.abs(yFromCanvas - Y_VALUES[i]) < minDifference) {
            minDifference = Math.abs(yFromCanvas - Y_VALUES[i]);
            inputY = Y_VALUES[i];
        }
    }
}
function drawPoints(){

    let pointX = Array.from(document.getElementsByClassName("coordX")).map(v => v.innerHTML);
    let pointY = Array.from(document.getElementsByClassName("coordY")).map(v => v.innerHTML);
    for (let i=0;i<pointX.length;i++){
        drawPoint(pointX[i]*EDOTREZOK+canvas.width/2,-pointY[i]*EDOTREZOK+canvas.height/2);
    }
}
function drawPoint(x,y){
    ctx.fillStyle="#4F8A8B";
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(x, canvas.height/2);
    ctx.lineTo(x, y);
    ctx.moveTo(canvas.width/2, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = "#e38585";
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.setLineDash([]);
}
function clearCanvas(){
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}
function drawFigures(){
    clearCanvas();
    const RADIUS=(HEIGHT-50)/10*inputR/2;
    //прямоугольник
    ctx.fillStyle="#FFCB74";
    ctx.fillRect(WIDTH/2, HEIGHT/2, RADIUS, 2*RADIUS);

    //треугольник
    ctx.beginPath();
    ctx.moveTo(WIDTH/2,HEIGHT/2);
    ctx.lineTo(WIDTH/2,HEIGHT/2-RADIUS);
    ctx.lineTo(WIDTH/2-2*RADIUS,HEIGHT/2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(WIDTH/2,HEIGHT/2);
    ctx.lineTo(WIDTH/2,HEIGHT/2+2*RADIUS);
    ctx.lineTo(WIDTH/2-2*RADIUS,HEIGHT/2);
    ctx.fill();


    //окружность
    ctx.arc(WIDTH/2,HEIGHT/2,2*RADIUS,Math.PI/2,Math.PI);
    ctx.fill();


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
        ctx.strokeText(String(-i),WIDTH/2+5,HEIGHT/2+i*EDOTREZOK);
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
function validateX() {
    const X_MIN = -3;
    const X_MAX = 5;
    let xField = $('#x_text_field');
    inputX = xField.val().replace(',', '.');
    if(inputX==""){
        errorX1.remove();
        errorX2.remove();
        $('#errors').append(errorX3);
        error($('#x'));
        return false;
    }else{
        if ((/[^0-9.-]/i.test(inputX))){
            errorX2.remove();
            errorX3.remove();
            $('#errors').append(errorX1);
            error($('#x'));
            return false;
        }else{
            if (inputX > X_MIN && inputX < X_MAX){
                errorX1.remove();
                errorX2.remove();
                errorX3.remove();
                removeError($('#x'));
                return true;
            }else{
                errorX1.remove();
                errorX3.remove();
                $('#errors').append(errorX2);
                error($('#x'));
                return false;
            }
        }

    }


}
function validateY() {
    let checkboxes=document.getElementsByName('y');
    massivWithY=[];
    if ($('.y-checkbox').is(':checked')) {
        checkboxes.forEach(checkbox=> {
            if (checkbox.checked){
                massivWithY.push(checkbox.value);
            }
        });
        errorY.remove();
        removeError($('#y'));
        return true;
    } else {
        error($('#y'));
        $('#errors').append(errorY);
        return false;
    }

}
function validateR() {
    if (inputR){
        return true;
        errorR.remove();
        removeError($('#r'));
    }
    else {
        error($('#r'));
        $('#errors').append(errorR);
        return false;
    }
}
function validateForm() {
    if (validateX() & validateY() & validateR()){
        removeError($('#errors'));
        //window.scrollBy(0,-400);
        return true;
    }else{
        $('#errors p').css("text-align","center");
        error($('#errors'));
        window.scrollTo(window.innerHeight,window.innerWidth);
        return false;
    }



}
function error(elem){
    elem.css("border","5px solid #e38585");
    elem.css("box-shadow", "inset 0px 0 5px 3px #e38585");
}
function removeError(elem){
    elem.css("border","");
    elem.css("box-shadow", "");
}
function sendCheckAreaRequest(x, y, r) {
    return $.post("process", {
        'x': x,
        'y': y,
        'r': r
    }).done(function (data) {
        if (data === "INVALID VALUES" || data == null || data==="") {
            console.log("INVALID VALUES");
        }
        else {
            //console.log(data);
            $("#result-table tr:gt(0)").remove();
            let result = JSON.parse(data);
            console.log(data);
            for (let i in result.response){
                    let newRow = '<tr>';
                    newRow += '<td class="coordX">' + result.response[i].xval + '</td>';
                    newRow += '<td class="coordY">' + result.response[i].yval + '</td>';
                    newRow += '<td>' + result.response[i].rval + '</td>';
                    newRow += '<td>' + result.response[i].executeTime + '</td>';
                    newRow += '<td>' + result.response[i].currentTime + '</td>';
                    newRow += '<td>' + result.response[i].result + '</td>';
                    $('#result-table').append(newRow);
            }
            }
    })
        .fail(function (err) {
            alert(err);
        });



}












