/**
 * ployfill - fallback for browsers
 * if browser does not have bind method
 * we need to write custom bind method
 */

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


//bind method
// let printInfo = printFullName.bind(name1, "kadapa", "AP");
// printInfo(); //invoking function

//myBind method

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params,...args2]);
    }
}

let printInfo = printFullName.myBind(name1, "Kadapa");
console.log(printInfo);
printInfo( "AP"); //invoking function