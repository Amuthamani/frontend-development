let a= "welcome to my home"
let sentence=a.split(" ")
// console.log(sentence[0][0])


let result=""
for(i=0;i<sentence.length;i++){
    if(sentence[i].charAt(0)==sentence[i].charAt(1).toUpperCase()){
   result+=sentence[i].charAt(0).toLowerCase()+ sentence[i].slice(1);
    }
else{
   result+=sentence[i].charAt(0).toUpperCase()+ sentence[i].slice(1);
}
result+=" "
}
console.log(result)
let reversetheword=result.split(" ").reverse().join( " ")  //reverse
console.log(reversetheword);

let u="myself amuthamani"
console.log(u.endsWith("n"));