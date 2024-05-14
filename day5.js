//padStart and padEnd
x="universal"
console.log(x.padStart(15,"my"));  //pad start
console.log(x.padEnd(11,"my"));    //pad end

//trim

s="  amuthamani"
console.log(s.length);    //lenth of the string ,space is also consider a character or whatever
console.log(s.trim().length);
console.log(s.trim()); 

//replace
let a="hello amutha"
// console.log(a.replace("amutha","kayal"));
a=a.replace(/Amutha/i,"kayal") //i- incase sensitive
console.log(a);

let b="hello amutha are you amutha"
b=b.replace(/amutha/ig,"kayal")  //global
console.log(b)
console.log(b.length);
//startsWith and endsWith
console.log(b.startsWith("hello"));
console.log(b.endsWith("tha"));  //doubt
 

//substring
let m="frontend developer"
console.log(m.substring(6,10));
 //substring is similar to slize.

 console.log(m.slice(-6));                // in slice we can put (-) value
console.log(m.substring(-6));             //in substring  we cant use (-) value

n="frontend developer"
console.log(n.substring(4,8));

console.log(n.substr(5,3)); //in this suubstr,instead of using starting point and ending point , we can use starting poing and number of nex letters
//repeat
console.log(n.repeat(3)); //repeating the string

let c=[5,10,15]
console.log(c+5);