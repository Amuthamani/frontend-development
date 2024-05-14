console.log("-------------alphabetical order----------");
let string="webmaster"
function alphabet(){
    let splitString=string.split("")
    console.log(splitString);
    let sortString=splitString.sort()
    console.log(sortString);

    let joinString=sortString.join("")
    console.log(joinString);
   
}
alphabet("webmaster")

console.log("-------every words first letter will be uppercase (capital)--------- ");
let word="Write a javascript program"

let splitWord=word.split(" ")
console.log(splitWord);
let result=" "
for(i=0;i<splitWord.length;i++){
    if(splitWord[i].charAt(0)==splitWord[i].charAt(0).toUpperCase()){
        result+=splitWord[i].charAt(0).toUpperCase()+splitWord[i].slice(1);
    }else{
        result+=splitWord[i].charAt(0).toUpperCase()+splitWord[i].slice(1);
    }
    result+=" "
}
console.log(result);



console.log("--------find character repeatation in the string--------");
let sentence="prevension is better than cure"

let resRep=sentence.match(/e/ig)
console.log(resRep);




console.log("------number of vowels within the string--------");
let givenString="the quick brown fox"
let vowels=["a","e","i","o","u"]
count=0

function vowelsCount(){
    if(givenString[i]==vowels){
        count+=givenString[i]
    }else{
        
    }
    
}
vowelsCount("the quick brown box")

