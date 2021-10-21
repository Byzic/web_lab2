let elemWithErrors=document.getElementById('button_and_errors')
let errorY1= document.createElement("p");
errorY1.textContent = "Значение Y не является числом";
let errorY2= document.createElement("p");
errorY2.textContent = "Значение Y не входит в интервал (-5,5)";
let errorY3= document.createElement("p");
errorY3.textContent = "Введите значение Y";
let errorX=document.createElement("p");
errorX.textContent = "Значение X не выбрано";
let errorR= document.createElement("p");
errorR.textContent = "Значение R  не выбрано";
//$('#button_and_errors').append(errorX,errorY1,errorY2,errorR);
let inputY;
let inputX;
let canvas=document.getElementById("canvas");

$('button').slideUp( 'slow');
$('button').slideDown( 'slow');
// start();
$(document).ready(function(){
    $('.r-button').click(function(){
        $('.r-button').removeClass("active");
        $(this).addClass("active");
    });






});




function validateX() {
    if ($('.x-radio').is(':checked')) {
        inputX=document.querySelector('input[name="x"]:checked').value;
        errorX.remove();
        removeError($('#x'));
        //document.getElementById('x').classList.remove('red');
        return true;
    } else {
        $('#errors').append(errorX);
        error($('#x'));
        //document.getElementById('x').classList.add('red');
        return false;
    }
}
function validateY() {
    const Y_MIN = -5;
    const Y_MAX = 5;

    let yField = $('#y-textfield');
    inputY = yField.val().replace(',', '.');
    if(inputY==""){
        errorY1.remove();
        errorY2.remove();
        $('#errors').append(errorY3);
        error($('#y'));
        //document.getElementById('y').classList.add('red');
        return false;
    }else{
        if ((/[^0-9.-]/i.test(inputY))){
            errorY2.remove();
            errorY3.remove();
            $('#errors').append(errorY1);
            error($('#y'));
            //document.getElementById('y').classList.add('red');
            return false;
        }else{

            if (inputY > Y_MIN && inputY < Y_MAX){
                errorY1.remove();
                errorY2.remove();
                errorY3.remove();
                removeError($('#y'));
                //document.getElementById('y').classList.remove('red');
                return true;
            }else{
                errorY1.remove();
                errorY3.remove();
                $('#errors').append(errorY2);
                error($('#y'));
                //document.getElementById('y').classList.add('red');
                return false;
            }
        }

    }


}
let massivWithR;
function validateR() {
    let checkboxes=document.getElementsByName('r');
    massivWithR=[];
    if ($('.r-checkbox').is(':checked')) {
        checkboxes.forEach(checkbox=> {
            if (checkbox.checked){
                massivWithR.push(checkbox.value);
            }
        });
        errorR.remove();
        removeError($('#r'));
        //document.getElementById('r').classList.remove('red');
        return true;
    } else {
        error($('#r'));
        //document.getElementById('r').classList.add('red');
        $('#errors').append(errorR);
        return false;
    }
}
function validateForm() {
    // if (validateX() & validateY() & validateR()){
    //     removeError($('#errors'));
    //     //document.getElementById('errors').classList.remove("red");
    //     window.scrollBy(0,-400);
    //     return true;
    // }else{
    //     $('#errors p').css("text-align","center");
    //     error($('#errors'));
    //     window.scrollTo(window.innerHeight,window.innerWidth);
    //     return false;
    // }
    alert("Валидируем");
    return true;

}
function error(elem){
    elem.css("border","5px solid #e38585");
    elem.css("box-shadow", "inset 0px 0 5px 3px #e38585");
}
function removeError(elem){
    elem.css("border","");
    elem.css("box-shadow", "");
}



function drawPoint(x,y){
    let ctx = canvas.getContext('2d');
    ctx.fillStyle="#4F8A8B";
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(x, canvas.height/2);
    ctx.lineTo(x, y);
    ctx.moveTo(canvas.width/2, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = "#e38585";
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();
}

canvas.addEventListener("mousedown",function (event) {
    if (!validateR()) return;
    let xFromCanvas=(event.offsetX-canvas.width/2)/140*massivWithR[0];
    let yFromCanvas=-(event.offsetY-canvas.height/2)/140*massivWithR[0];
    console.log(xFromCanvas,yFromCanvas);
    drawPoint(event.offsetX,event.offsetY);
    sendCheckAreaRequest(xFromCanvas,yFromCanvas,massivWithR[0]);
    console.log('пришло');

});


function sendCheckAreaRequest(x, y, r) {
    return $.post("/process", {
        'x': x,
        'y': y,
        'r': r
    }).done(function (result, status, xhr) {
        alert("ответ с сервера пришел")
        if (xhr.getResponseHeader('isValid') === "true") {
            //$('#result-table tr:first').after(result);
            alert(result);
            return true;
        }
    })}



// function start(){
//     // var xhr = new XMLHttpRequest();
//     // xhr.open('GET', 'https://se.ifmo.ru/~s311701/php/main.php',true);
//     // xhr.send();
//
//     xhr.onload = function () {
//         if (xhr.status != 200) {
//             alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//             alert(xhr.responseText);
//         } else {
//             console.log(xhr.responseText);
//             let result = JSON.parse(xhr.responseText);
//
//             for (let i in result.response){
//                 if (result.response[i].validate) {
//                     let newRow = '<tr>';
//                     newRow += '<td>' + result.response[i].xval + '</td>';
//                     newRow += '<td>' + result.response[i].yval + '</td>';
//                     newRow += '<td>' + result.response[i].rval + '</td>';
//                     newRow += '<td>' + result.response[i].curtime + '</td>';
//                     newRow += '<td>' + result.response[i].scripttime + '</td>';
//                     newRow += '<td>' + result.response[i].inarea + '</td>';
//                     $('#result-table').append(newRow);
//                 }
//             }
//
//         }
//     };
// }




$('#main-form').on('submit', function(event) {
    event.preventDefault();
    alert('нажали на "отправить"');
    if (!validateForm()) {
        return;
    } else {
        let data= 'x='+inputX+'&y='+inputY;
        for (let i=0;i<massivWithR.length;i++){
            data+='&r[]='+massivWithR[i];

        }
        data += '&timezone=' + new Date().getTimezoneOffset();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://se.ifmo.ru/~s311701/php/main.php'+'?'+data,true);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                alert(xhr.responseText);
            } else {
                console.log(xhr.responseText);
                let result = JSON.parse(xhr.responseText);

                for (let i in result.response){
                    if (result.response[i].validate) {
                        let newRow = '<tr>';
                        newRow += '<td>' + result.response[i].xval + '</td>';
                        newRow += '<td>' + result.response[i].yval + '</td>';
                        newRow += '<td>' + result.response[i].rval + '</td>';
                        newRow += '<td>' + result.response[i].curtime + '</td>';
                        newRow += '<td>' + result.response[i].scripttime + '</td>';
                        newRow += '<td>' + result.response[i].inarea + '</td>';
                        $('#result-table').append(newRow);
                    }
                }

            }
        };

    }
    $('#main-form').trigger('reset');
});



