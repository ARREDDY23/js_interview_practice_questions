// -----------using bind method

let multiply = function(a,b){
    return console.log(a*b);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

// --------------using closures

let multiply = function(a){
    return function(b){
        console.log(a*b)
    };
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree = multiply(3);
multiplyByThree(6);