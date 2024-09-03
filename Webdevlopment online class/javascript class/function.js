//Declaring a function
/*
function hello()
{
    console.log("Declaring a function")
}
//calling  a function
hello()


//function with parameters
function add(a)
{
    console.log(a*a)

}
add(2)
add(3)
add(10)
add(11)

function detail( name,ph)
{
    console.log(`hello ${name} and phone is ${ph} `)
}
detail('aryan', 9809241661)
detail('gurau', 981134323)
detail('abisha',9830303323)

//function with return value
function multi(w)
{
    return w*w
}
var data= multi(4)
console.log("multi",data)

function sum(num1, num2)
{
    return num1+num2
}
let data1=parseInt(prompt("1no"))
let data2=parseInt(prompt("2no"))
console.log("sum is",sum(data1,data2))


//function expression (anonymous fuction)
let abc=function(a)
{
    return a*a
}
console.log(abc(5))

*/

//ES6 arrow => function
let data1= a=>a*a
console.log(data1(4))

let data2=(a,b)=>a*b
console.log(data2(4,5))

let data3=(a,b)=>
    {
        return a*b
    }
    console.log(data3(3,5))