var t1 : HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
var t2 : HTMLInputElement = <HTMLInputElement>document.getElementById("t2");
var t3 : HTMLInputElement = <HTMLInputElement>document.getElementById("t3");

function add()
{
    var c:number = parseFloat(t1.value) + parseFloat(t2.value);
    t3.value = c.toString();
}

function sub()
{
    var c:number = parseInt(t1.value) - parseInt(t2.value);
    t3.value = c.toString();
}

function mul()
{
    var c:number = parseFloat(t1.value) * parseFloat(t2.value);
    t3.value = c.toString();
}

function div()
{
    var c:number = parseFloat(t1.value) / parseFloat(t2.value);
    t3.value = c.toString();
}
