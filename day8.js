// //fill
// array=[10,20,30,40,50]
// array.fill(20,0,3)   //20- is which value you wanna fill ,0-3 is how many place you wanna fill that value(20)
// console.log(array);
// console.log("----------------");
// //map     - when you want update all the elements in array, we can use map,after the update the array have the same value 
// b=[100,200,300] //declare a new variable(result)
// let result=b.map((x,i,b)=>{  //2nd parameter is printing the index value, 3 rd parameter is printing the original array with index
//     console.log(i);
//     console.log(b);
//     return x+2;
// })
// console.log("-----------");
// console.log(result);// updated value
// console.log(b);     //after the update the array (b)have a same value         
// console.log("--------------");
// // filter
// c=[5,6,5,8]
// let res=c.filter((y,i,c1)=>{

// return c.indexOf(y)!=c.lastIndexOf(y)  
// })
// console.log(res);     

// d=[1,2,3,4,3,2]
// let resd=d.filter((x)=>{     
//     return d. lastIndexOf(x)==d.indexOf(x)
// })
// console.log(resd);
// console.log("--------------------");
// //find
// let result1=d.find((z)=>{
//     return d.lastIndexOf(z)!=d.indexOf(z)

// })
// console.log(result1);
// console .log("-----------------")
// //some- when one condition is correct means, the output will be true
// amutha=[55,56,57,58]
// let amu=amutha.some((x)=>{
//     return x>10;
// })

// console.log(amu);
// //every - when all the conditions is correct means, the output will be true otherwise the output will be false
// let ammu=amutha.every((x)=>{
//     return x>10
// })
// console.log(ammu);
// console.log("----------")
// //flat- flaten the array into new array
// let kayal=[10,20,[30,40,[50,60]]]

// console.log(kayal.flat(1))
// console.log("------------");
// kayal=kayal.flat(1)
// console.log(kayal);
// console.log("-----------");

// //flatmap
// kayal_1=[10,20,[30,40,[50,60]]]
//  flatMap=kayal_1.flatMap((p)=>{
//     return [p*2]
// }
// )
// console.log(flatMap);
// //map
// resmap=kayal_1.map((x=>{
//     return [x*2]
// }))
// console.log(resmap);

// console.log("-----------");
//  //manipulating
// kayal_1.flat(2)
// console.log(kayal_1.flat(2));
// kayal_1=kayal_1.flat(2);
// q=kayal_1.map((x)=>{
//     return x*2
// })
// console.log(q);

for(let i=0;i<5;i++)
  

console.log(i);


