console.log("5. arrange the letters in accending order");
let sentence =" pls do well in test"
splitSentence=sentence.split("");

let sortSentence=splitSentence.sort();

let joinSentence=sortSentence.join("")
console.log("accending order:",joinSentence.trim());
console.log("------------------------------------------");
console.log("6 .extract name and city");

let user={name:"alice",age:25, address:{city:"wonderland", country:"fantasia"}}
         
console.log("name:",user.name);
console.log("city:",user.address.city);
console.log("------------------------------------------");

console.log("10 . map function");

const numbers=[1,2,3,4,5]

let result=numbers.map((x)=>{
    return x*2;
})
console.log("doubling each element:",result);
console.log("------------------------------------------");

console.log("9 .write the promisedelay 2 seconds");

let promise= new Promise(res=>{
    setTimeout(()=>{
        res("operation completed successfully")
    },2000);
})

console.log(promise);
console.log("------------------------------------------");

console.log("1. target");

function findTarget(arr,target){
    if(arr.indexOf(3)){
        return 4;
    }

}
let arr=[1,2,4,7,8]
let target=3
console.log(findTarget(arr,target));
console.log("------------------------------------------");

console.log("4 .find missing value in array starts from 0");
let input=[-1,0,2,3,6]
for(i=-1;i<8;i++){
    console.log(i);
}
reInput=[-1,0,1,2,3,4,5,6]
console.log("------------------------------------------");

console.log("get pair of values");

let array=[1,2,4,7,8]
  let output=array.map((a,b)=>{
  if(array[a]+array[b]==9)

  })
  console.log(output);




