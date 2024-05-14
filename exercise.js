//anagram
let a="AAB";
let b="BBA";

let arra=a.split("")
let arrb=b.split("")
console.log(arra);
console.log(arrb);
for(i=0;i<arra.length;i++){
    for(j=0;j<arrb.length;j++){
       if(arra[i]==arrb[j]){
        arrb.splice(j,1)
       }
    }
}
console.log(arrb);




console.log("5"+-2);
console.log("5"-+2);
console.log("----------------");

let array=[10,11,12,13]

for(i=1;i<=array.length;i++){
    if(i%2===0){
        console.log(i);
    }
}

console.log("--------------");



