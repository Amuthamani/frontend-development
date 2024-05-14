// advance for loop
x=["+","-","*","/"]    // in this advance for loop , we dont want to put initialization,condition,operators.

for( let y of x){ // for -of
    console.log(y);
}

// for -in . we can use this for-in only objects  
let obj={
    name:"amutha",
    age:"20",
    class:"front end developer"
}
for(let a in obj){
    
    console.log(obj[a]);
}

//inbuild methods
let e="prevention is better than cure"
console.log(e.split(""));
console.log(e.split(" "));
console.log(e.split("r"));
console.log(e.charAt("12"));
console.log(e.indexOf("r",3));//we can use parameter
console.log(e.lastIndexOf("r"));
console.log(e.search(/E/i))//we cant use parameter in search
//match
console.log(e.match(/e/gi));
//matchAll
console.log(e.matchAll("e"));
let s=e.matchAll("e")
console.log("----------------------");
console.log(Array.from(s)[4][2]);
//slice
console.log(e.slice(5,15));
