// reduce - when you want to manipulate all the continued element , we can use reduce 

let a=[1,2,3]
let red=a.reduce((a,b)=>{
     return a+b;
})
console.log(red);


// uding map instead of reduce
 let b=[10,20,30]
 let map=b.map((b,c)=>{
     return b+c
 })
 console.log(map);

 // promise 
 // 1) synchronous or sequential process - give the output step by step
 // 2)Asynchronous- give the out put unorderly 

 let prom=new Promise ((resolve, reject)=>{
    if(10>50){
        resolve("correct answer")
    }else{
        reject("wrong answer")
    }
 })
 prom.then((res)=>{   //.then  handles the posstive result
    console.log(res);
 }).catch((error)=>{  // .catch handles the negative result
    console.log(error);
 })
 console.log("i'm amutha");

 //simplest way
 
 
console.log("------------");

 // another simplified method
 async function getData(){
    try{
    let data= await prom
    console.log(data);
    }catch(err) {
        console.log(err);
    }
    
 }
 getData()
// class and constructor 

//class
  let  time="ten"
class  morning{
    time="nine"
    constructor(a){
       this. time =a
    }
}
let take= new morning("hi ,how are you")
console.log(take.time);

console.log(time);

