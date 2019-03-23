var myTime;
var arrimg = [ 
    "./img/dime1.jpg",
    "./img/dime2.jpg",
    "./img/dimespin.gif",
    "./img/quarter1.jpg",
    "./img/quarter2.jpg",
    "./img/quarterspin.gif",
    "./img/dollar1.jpg",
    "./img/dollar2.jpg",
    "./img/dollarspin.gif",
];

var element, coinType, btn;

function beginChange(coin)
{
    coinType = coin;
    element = document.getElementById(coinType);
    btn = document.getElementsByClassName("btn");
    for(var i = 0; i < btn.length; i++)
        btn[i].disabled = true;

    console.log(btn);
    switch(coinType)
    {
        case 'dime':
            element.src = arrimg[2];
            break;
        case 'quarter':
            element.src = arrimg[5];
            break;
        case 'dollar':
        element.src = arrimg[8];
            break;
    }
    myTime = setInterval(ChangeImg, 2000);
}


function ChangeImg()
{
    console.log(coinType, element);
    var num = 0;
    num = Math.floor(Math.random() * 2);
    console.log(num);
    switch(coinType)
    {
        case 'dime':
            element.src = arrimg[num];
            break;
        case 'quarter':
            element.src = arrimg[num+3];
            console.log(num+2);
            break;
        case 'dollar':
            console.log(num+6);
            element.src = arrimg[num+6];
            break;
    }
    clearInterval(myTime);
    for(var i = 0; i < btn.length; i++)
        btn[i].disabled = false;
}