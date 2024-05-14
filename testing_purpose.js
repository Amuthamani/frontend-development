let string="same same but different"
let arrStr=string.split(" ")
console.log(arrStr);
result=" "

for(i=0;i<arrStr.length;i++){
    if(arrStr[i].charAt(0)==arrStr[i].charAt(0).toLowerCase()){
        result+=arrStr[i].charAt(0).toUpperCase()+arrStr[i].slice(1)
           
    }
  result+=" "
}

console.log(result);


