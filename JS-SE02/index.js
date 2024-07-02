"use strict"

//  this in global space
    console.log(this) // globalobject(window | global)

// this inside function
    function x(){
        console.log(this);
    }