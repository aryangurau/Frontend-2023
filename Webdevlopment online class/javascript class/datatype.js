//primitive data types(number, string, boolean null, undefined, bigint symbol)
console.log('aryan')
console.log(typeof 'aryan')

console.log(2)
console.log(typeof 2)

console.log(true)
console.log(typeof true)

console.log(typeof a)

console.log(null)
console.log(typeof null)

console.log(Symbol('sajan')=='sajan')

//non-primitive data types (array and objects)
console.log(typeof ['ram','sita'])
console.log(typeof {husband: 'ram',wife: 'sita'})


//variables in jS= data storage for re-suseable
 var fName='ram'
 var lName='gurau'
 console.log('hello i am', fName , 'and last name is' ,lName)

document.write(`<h1> hello i am ${fName} and last name is ${lName} </h1>`)

//var can be redeclared and re-assigned
var a='kumar'
console.log(a)
var a='hari'
console.log(a)

//let  cannot be redeclared and can be re-assigned
let b='aryan'
console.log(b)
b='gurau'
console.log(b)

//const cannot be redeclared and cannot be re-assigned
const c='kumar'
console.log(c)

//local scope variable(var) and block scope variables (let,const)
 var a = 2 
 console.log(a)
 if(true)
 {
    var a=3
    console.log(a)
 }
 console.log(a)

 //block scope variables

 let std = 2
 console.log(std)
 if(true)
 {
let std=3
console.log(std)
 }
 console.log(std)

                 //operators in JS

 //arithmetic operator( +,-,*,/,%,++,--,**)
 console.log(2+3)
 console.log(2-1)  
 console.log(2*3) 
 console.log(2%1) 
 console.log(5/2) 
 var a=3; var bb=4;
 console.log(++a)   //a=a+1  //4
 console.log(a--)    //4
 console.log(a) //3
 console.log(a**bb)  //3*3*3*3


//taking data from user using prompt
  
// var data1= parseInt(prompt("enter first number"))    //parseInt converts string data into number    
// var data2= parseInt(prompt("enter second number"))    
// console.log(data1+data2)

