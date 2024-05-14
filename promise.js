newPromise = new Promise ((result,reject)=>{
    if(12>10){
        result("correct");

    }else{
        reject("wrong")
    }
})
console.log(newPromise);
// newPromise.then((result)=>{
//     console.log(result);
// }).catch((reject)=>{
//     console.log(reject);
// })


async function getData(){
    try{
   let data=await newPromise
   console.log(data);
    }catch(error){
        console.log(error);
    }
}
getData();
console.log("hello im amutha");



console.log(x);
var x=5;
const numbers=[1,2,3,4,5]
let result=numbers.map((x)=>{
    return x*2
})
console.log(result);

//shallow copy
let z={name:"amutha", age:{age1:20}}
let y={...z}
console.log(y);
console.log(z);
y.age.age1=21
console.log(z);



"use strict"

 a=56;
 console.log(a);
