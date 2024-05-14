//using object and updating the key
let obj={
    name:"amutha",
    class:"9am",
    location:"chennai"
  
  }
  console.log(obj.name);
  console.log(obj.name);
  console.log(obj["class"]);
  console.log(obj["name"])
  console.log(obj.location);
  
  obj["name"]="kayal"
  obj["class"]="9am"
  obj["location"]="avadi"
  
  console.log(obj);

   
   //seal
     Object.seal(obj)
      
      obj["name"]="amutha"
      console.log(obj);
      //extract keys,values,entries
      console.log(Object.keys(obj)); //if you want all keys 
      console.log(Object.values(obj)); //if you want all values 
      console.log(Object.entries(obj)); // if you want all keys and values
     
  //freeze
    // Object.freeze(obj) 
    // obj["name"]="amutha"
    // console.log(obj);

   // increment operators
   a=15
   b=a--
console.log(a);
console.log(b);

// s=150
// t=--s
// console.log(s);
// console.log(t);

m=55
n=m-- - --m
console.log(n);
// console.log(m);

i=5
do{
  console.log("hey this is amutha");
}while(5>12)
 

//switch case
o=100
p=120


switch("subtraction"){
  case "add":
  console.log(o+p);
  break;
  case "subtraction":
    console.log(o-p);
    break;
    case "division":
      console.log(o/p);
      break;
      case "multiplication":
        console.log(o*p);
        break;
        case "modulus":
          console.log(o%p);
          break;
          default:
          console.log("invalid input")
          break;
        

}




 
  