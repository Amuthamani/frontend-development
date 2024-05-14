console.log("----------count of the vowels in sentence-------------");

function countOfVowels(str){
str=str.toLowerCase(); //Convert the string to lowercase to handle both uppercase and lowercase vowels
let count=0;  // Initialize a variable to store the count of vowels
    for(i=0;i<str.length;i++){  //Iterate through each character of the string
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            count++  //If it's a vowel, increment the count
        }
    }
    return count;  //Return the total count of vowels
}
let str="i am amutha"
console.log("number of vowel letter:",countOfVowels(str));

console.log("-----add three numbers----------");


function addNumbers(a,b,c){
    return a+b+c;
}
console.log(addNumbers(10,12,34));


console.log("-------reverse the string--------");
let sentence="hey this is amuthamani"
let splitSentence=sentence.split(" ");
console.log(splitSentence);
let revSentence=splitSentence.reverse();
let joinSentence=splitSentence.join(" ");
console.log(joinSentence);

console.log("----changing the first letter into the uppercase--------");
let Sentences="have a good day"
let splitSentences=Sentences.split(" ")
let result=" "

for(i=0;i<splitSentences.length;i++){
    if(splitSentences[i].charAt(1)==splitSentences[i].charAt(1).toLowerCase()){
        result+=splitSentences[i].charAt(1).toUpperCase()+splitSentences[i].slice(2)
    }

}
console.log(result);


console.log("------write the sentence in alphabetical order------");

let givenString=" i am  amuthamnai "  
let splitGiven=givenString. split("");
let sortString=splitGiven.sort();
console.log(sortString);
let joinString=sortString.join(" ")
console.log(joinString);
let trimString=joinString.trim(" ")
console.log(trimString);



console.log("-------anagram----------");




let word1="listen";
let word2="silent";

   word1=word1.replace(/[^a-zA-Z]/gi).split("").sort().join("");
   console.log(word1);
   word2=word2.replace(/[^a-zA-Z]/gi).toLowerCase().split("").sort().join("");
   console.log(word2);
   if(word1==word2){
    console.log("given words areanagram")

   }else{
    console.log("not an anagram");
   }
    
console.log("--------polindrome----------")
// let senten="malayalam"
// reverseSenten=senten.split("").reverse().join("")
// console.log(senten);

// if(senten===reverseSenten){
//     console.log("true");
// }else{
//     console.log("false");
// }

function polindrome(sent){
   let revSent=sent.split("").reverse().join("")
    if(sent===revSent){
        return true;
    }else{
        return false;
    }

}
let sent="madam"
console.log(polindrome(sent));


let string=" hello123$"

let numbers=" "
let symbols=" "
let alphabetic=" "

for (let char of string){
  if(!isNaN(char)){
    numbers+=char;

  }
  else if(char.match(/[^\w\s]/)){
    symbols+=char;
  }
  else{
    alphabetic+=char
  }
}

let orderString=numbers+symbols+alphabetic
console.log(orderString);



