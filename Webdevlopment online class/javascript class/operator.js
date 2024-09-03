//Assignment operators ( =, +=, -=, *=, /=, **=)
var a=2
var b=3
console.log(a+=b)   //a=a+b 2+3 // 5
console.log(a-=b)  //a=a-b  5-3 //2
console.log(a*=b)  //a=a*b  2*3 //6
console.log(a/=b)  //a=a/b  6/3 //2

//comparison operator (==, ===, >,<, >=, <= ,!=)

console.log(2=='2')  //only value
console.log(2==='2') //Value &datatype
console.log(2>3)     
console.log(2<3)
console.log(3>=3)
console.log(1<=2)
console.log(2!=3)

//logical operator( &&,||,!)
console.log( ('admin'=='admin') && ('pass'=='pass'))  //both must be true
console.log( ('admin'=='admin1') || ('pass'=='pass')) //atleast one true
console.log(!false)


//conditional operator if
if(2=='2')
{
    console.log('2  equal to 2')
}
else if(1==='1')
{
    console.log("same")
}
else
{
    console.log('false')
}

//switch case
 var c=8
 switch(c)
 {
    case 1: console.log("today is sunday"); break;
    case 2: console.log("today is monday"); break;
    case 3: console.log("today is tuesday"); break;
    case 4: console.log("today is wednesday"); break; 
     case 5: console.log("today is thursday"); break;
    case 6: console.log("today is friday"); break;
    case 7: console.log("today is saturday"); break;
    default: console.log("please enter valid day");

 }
 //ternary operator <condition> ? <value1> : <value2>;
 console.log ((2>1) ? "its true" : "its false")

