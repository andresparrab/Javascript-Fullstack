var myGlobal = 10;

function fun1()
{
     oopsGlobal = 5; // if not put the var keyword it will become global by default
}

function fun2()
{
    var output = "";
    if (typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined")
    {
        output += "\noopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();