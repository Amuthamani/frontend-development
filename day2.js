//operators
//Arithmetic operator-  +,-.*,/,%
console.log(10+30);
console.log(10-30);
console.log(10*30);
console.log(10/30);
console.log(10%30);
//comparison operators- you'll get output true or false only
//  >,<,<=,>=,==,!=

console.log(10<30);
console.log(10>30);
console.log(10<=30);
console.log(10>=30);
console.log(10==30);
console.log(10==10);
console.log(10!=30);
console.log(30!=30);

console.log(10===10);
console.log(10==="10"); // numbers are same but you'll get false. reason is "==="checks the data type as well
console.log(10=="10");//"=="not checks the data type only the value
//logical operator-depending operator
// &&,|| 
console.log(10>20&&10<20)   // if one statement is wrong , the output will be false
console.log(10>20||10<20)   // if one statement is right , the output will be true

//ternary operator
// syntax is "condition?if true:if false"
let a = 30 > 20 ? 40 : 50;

// increment operator -++
c=5
let d=c++
console.log(d);

e=5
let f=++e
console.log(f);

g=10
let h=++g + g++
console.log(h);























