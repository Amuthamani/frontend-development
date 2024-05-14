//take any stringwith capital and small letter and count of capital and small letters
let a="FuLlStAkDevelopeR"
let capital=0;
let small=0;
for(i=0;i<a.length;i++){
    if(a[i]==a[i].toUpperCase()){
        capital++;
    }
    else {
        small++

    }
}
console.log("capital letters:",capital);
console.log("small letters:",small);


console.log("----------------");
//sum of digits

b="9876"
result=0
for (let i = 0; i < b.length; i++) {
    result+=parseInt(b[i])

}

console.log("sum of digits:",result);
console.log("-----------------");
//reverse
  let x="focus on your goals"
for(i=x.length-1;i>=0;i--){
    console.log(x[i]);
}
console.log("--------");
let output = 'a';
output = output + 'kayal'
console.log(output);
//given number is a perfect square


