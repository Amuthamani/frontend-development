// if or if else

if(40>50){
    console.log("amutha");
}
else{
    console.log("kayal");
}
//another way

if(10>20){
    console.log("amutha");
}
else if(10<=20){
    console.log("world");
}
else if(10>20){
    console.log("kayal");
}
else{
    console.log("hello");
}

let array=["sunday","monday","tuesday","wednesday"]
for(i=0;i<array.length;i++){     //if you know the stating and ending point ,you can use for loop
    console.log(array[i]);
}

let a=10;
for(i=0;i<a;i++){
    console.log(i);
}

// do while loop

do{
    console.log("this is amutha");   //even the condition is false, the do statement will run
    
}while(2<1)        

//switch

//jumping statement-BREAK and CONTINUE

switch("march"){
    case "january":
    console.log("first month of the year");
    // break;
    case "february":
    console.log("second month of the year");
    // break;
    case "march":
    console.log("third month of the year");
    // break;
    case "april":
    console.log("fourth month of the year");
    // break;
    
    case "may":
    console.log("fifth month of the year");
    break;

    default:
        console.log("wrong input");
        break
}