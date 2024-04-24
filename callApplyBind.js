let name1 = {
    first: "Alluru",
    last: "Reddy"
}
let name2 ={
    first:"ARR",
    last:"ARR"
}
let printFullName = function(hometown, state){
    console.log(this.first + " " + this.last + " " + hometown+ " " + state);
}

//function borrowing
printFullName.call(name1, "kadapa", "AP");
printFullName.apply(name2, ["kadapa", "AP"]);

//bind method
let printInfo = printFullName.bind(name1, "kadapa", "AP");
console.log(printInfo);  // prints function()........
printInfo(); //invoking function