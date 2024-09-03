//loop for, while ,do while

//for loop for(initialexpression; condition;updateExpression)

/* for( var a=0; a<10; a++)
{
    document.write(`<h1>for loop ${a}</h1>`)
}

//while loop
var b=0
while (b<10)
{
document.write(`<h1> while loop ${b} </h1>`)

b++
}   */

for(var a=0; a<10;a++)
{
    if(a==3)
    {
        document.write(`<h1> for loop 3 already </h1>`);
        //continue;
        break;
    }
    document.write(`<h1> for loop ${a} </h1>`)
}

var d=0;
do{
    document.write(`<h1> do while ${d} </h1>`)
    d++

}while(d<10)