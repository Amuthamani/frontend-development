let a= { a:"ab",b:{a:5}}
let b={...a}  // three dought (...)means copy the variable value into new variable
console.log(b);
console.log(a);
b.b.a="amutha";
console.log(a);
console.log(b);