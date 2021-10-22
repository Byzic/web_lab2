<%--
  Created by IntelliJ IDEA.
  User: Пользователь
  Date: 15.10.2021
  Time: 14:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html lang="ru">
<head>
    <link rel="icon" href="img/icon.png">
    <link  rel="stylesheet" href="css/style1.css">
    <title>Лабораторная №1</title>
    <meta charset="UTF-8">
</head>
<body onload="drawCanv()">
<table width=100%>
    <!-- Header -->
    <tr class="header" >
        <td  width="20%">
            <img src="img/котик.jpg" alt="Картинка куда-то исчезла :( " class="headerimg">

        </td>
        <td class="header__text" width="80%" >
            <p >Бызова Валерия Сергеевна</p>
            <p id="group" >группа 3212</p>
            <p>Вариант: 12004</p>
        </td>
    </tr>

    <tr class="task">
        <td class="task__img" colspan=2 >
            <h2>Область попадания</h2>
            <div class="canvas">
                <canvas id="canvas" ></canvas>

            </div>

        </td>
    </tr>


    <form id="main-form" action='/~s311701/php/main.php' >
        <tr class="choice">
            <td id="x"  colspan=2>
                <p class="choice__values">
                    <span class="value">Значение X</span>
                    <input type="text" name="x" value="" id="x_text_field" >
                    значение должно быть в интервале (-3;5)
                </p>
            </td>
        </tr>
        <tr class="choice">
            <td id="y" colspan=2>
                <p class="choice__values">
                    <span class="value">Значение Y</span>
                    <input class="y-checkbox" type="checkbox" name="y" value="-3">-3
                    <input class="y-checkbox" type="checkbox" name="y" value="-2">-2
                    <input class="y-checkbox" type="checkbox" name="y" value="-1">-1
                    <input class="y-checkbox" type="checkbox" name="y" value="0">0
                    <input class="y-checkbox" type="checkbox" name="y" value="1">1
                    <input class="y-checkbox" type="checkbox" name="y" value="2">2
                    <input class="y-checkbox" type="checkbox" name="y" value="3">3
                    <input class="y-checkbox" type="checkbox" name="y" value="4">4
                    <input class="y-checkbox" type="checkbox" name="y" value="5">5
                </p>


            </td>
        </tr >
        <tr class="choice">
            <td id="r" colspan=2>
                <p class="choice__values">
                    <span class="value">Значение R</span>
                    <input type="button" class="r-button" name="r" value="1">
                    <input type="button" class="r-button" name="r" value="1.5">
                    <input type="button" class="r-button" name="r" value="2">
                    <input type="button" class="r-button" name="r" value="2.5">
                    <input type="button" class="r-button" name="r" value="3">
                </p>
            </td>
        </tr>
        <tr class="choice__button">
            <td id="button_and_errors"  colspan=2>
                <button type="submit" id="button_submit">Отправить</button>
            </td>
        </tr>
        <tr >
            <td id="errors"  colspan=2>

            </td>
        </tr>


    </form>
    <tr>
        <td class="task__result" colspan=2 >
            <h2>Таблица запросов</h2>
            <div class="scroll-container">
                <table id="result-table" width=100%>
                    <tr class="table-header">
                        <th class="coords-col">X</th>
                        <th class="coords-col">Y</th>
                        <th class="coords-col">R</th>
                        <th class="time-col">Текущее время</th>
                        <th class="time-col">Время работы скрипта</th>
                        <th class="hitres-col">Результат</th>
                    </tr>
                </table>
            </div>

        </td>
    </tr>



</table>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script  src="js/main.js"></script>
<script src="js/canv.js"></script>
</body>
</html>
