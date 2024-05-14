//array methods
//push
a=[10,20,30]
a.push([50,60,70])
console.log(a);
console.log(a[3][0]);
console.log("---------------------------");
//pop
b=[1,2,3,4]     //pop only deletes the last value only and we can't put parameters 
b.pop()
console.log(b);
console.log("---------------------------");
//unshift
b.unshift(0)
console.log(b);  //if you wanna add numbers in front you can use unshift method,we can add many numbers
console.log("---------------------------");
//shift- remove one number from first
c=[1,2,3]
c.shift()
console.log(c);
console.log("---------------------------");
//slice
d=[1,2,3,4]
console.log(d.slice(0,1));
console.log("---------------------------");
//splice - we can remove and replace the word in the middle or wherever you want
e=[50,100,150,200]
console.log(e.splice(2,1,110,120));
console.log(e);
console.log("---------------------------");
console.log(e.length);
console.log("---------------------------");
//copywithin
m=[10,20,30,40,50]
m.copyWithin(3,0,2)  // 3 is "which place you want to copy",copy the elements 0,2)
console.log(m);
//join
console.log(m.join("x"));
console.log(m.join(" "));
console.log("---------------------------");
//includes
l=[10,20,30,50]
console.log(l.includes(10));
console.log(l.includes(100));
console.log("---------------------------");
//sort
k=[50,40,30,60]
k.sort((x,y)=>{
    return x-y
})
console.log(k);
