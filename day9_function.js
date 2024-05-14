//named function
function evenNumber(a){
    if(a%2==0){
        console.log
     ("given number is even");   
    }
    else{
        console.log
      ("given number is odd");
    }
   
}
evenNumber(10);
evenNumber(0);
evenNumber(11);
console.log("-----------")
//arrow function
let even=(a)=>{
    if(a%2==0){
        console.log
     ("given number is even");   
    }
    else{
        console.log
      ("given number is odd");
    }

}
even(77)
console.log("------------");
//anonymous function
let anonym=(function (){
    console.log("myself amutha");
}())
console.log("------------");

//date

let date=new Date()
console.log(date);
// get methods 
console.log(date.getDate());
console.log(date.getMonth()+1);
console.log(date.getFullYear());
console.log(date.getHours());
console.log("-----------");
//modify the date month ,etc
date.setMonth(3)
date.setDate(0)
date.setHours(date.getHours()+5)
date.setMinutes(date.getMinutes()+30)
console.log(date);

dateFormat= date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
console.log(dateFormat);

