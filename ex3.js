console.log("----find uppercase letter in each word-------");

let sentence = "You Re the BeST"
splitSentence=sentence.split(" ")
console.log(splitSentence);

splitSentence.forEach(senten=>{
 let upperCaseLetters=""

 for(i=0;i<senten.length;i++){
   if (senten[i]==senten[i].toUpperCase()){
    upperCaseLetters+=senten[i]
   }
 }
 console.log("capital letters",senten,upperCaseLetters);
})


console.log("-----matrix multiplication-------");

let array1=[[1,2],[3,4]]
let array2=[[2,3],[4,5]]
//1 2   2 3
//3 4   4 5
let result=[[0,0],[0,0]]
for(i=0;i<array1.length;i++){

  for(j=0;j<array1.length;j++){
    for(k=0;k<array1.length;k++){
      result[i][j]+=array1[i][k]*array2[k][j]
    }
  }``

  
}
console.log(result);




