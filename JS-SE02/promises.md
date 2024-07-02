->async operations happens in js because of callback functions
->Main problems in Callback functions are 1.CallBack Hell 2.Inversion of Control
    1. Callback Function or Pyramid of Doom
   
    const cart = ["shoes", "pens", "peace"];
    api.createOrder(cart, function(id){
        //
        //
        api.proceedToPayment(id, function(paymentInfo){
            //
            //
            api.showOrderSummary(
                function(paymentInfo){
                    api.updateWallet();
                }
            )
        })
    })

    2. Inversion of Control: Once EC reaches createOrder APi, we are giving control to createOrder APi. EC might or might not execute our call function or it may call twice.


Promises :- Promise is an object that represents eventual completion or failure of an async operation.

    // passing function
    api.createOrder(cart, function(){
        proceedToPayment(orderID);
    })

    const promise = createOrder(cart);
    //attaching function
    promise.then(function(){
        proceedToPayment(orderID);
    })

->once createOrder is completed .then is definitely called once.

->Proimse will have two comp -- 1.PromiseState(Pending, Fullfilled, Rejected) 2.PromiseResult

->Promises are immutable**
-> Above callback hell can be handled with promise chaining
    createOrder(cart)
    .then((id)=>{
        return proceedToPayment(id)
    })
    .then((paymentInfo)=>{
        return showOrderSummary(paymentInfo);
    })
    .then((paymentInfo)=>{
        return updateWallet(paymentInfo);
    });

    ** add return when promise is inside one promise

Creating a promise :--
----------------------------------------------------------------
const cart = ["shoes", "tracks", "iphone"];
const promise = createOrder(cart);
console.log(promise);

promise.then((orderId)=>{
    console.log(orderId)
})
.catch((err)=>{
    console.log(err.message);
});

function createOrder(cart){

    const pr = new Promise((resolve, reject) => {

        if(!validateCart(cart)){
            const err = new Error ("");
            reject(err);
        }

        const orderId = "12345";
        // if(orderId){
        //     resolve(orderId);
        // }

        if(orderId){
            setTimeout(()=>{
                resolve(orderId);
            },5000);
        }
    });

    return pr;
}

function validateCart(cart){
    return false;
}
------------------------------------------------------------------------

-> if we have n number of .then ...if we want to execute even there is error at some point ...use catch
-> if there is .then after catch...it will be executed

Imp promise API's
    1.Promise.all()
    2.Promise.allSettled()
    3.Promise.race()
    4.Promise.any()

1. Promise.all()  --> Fail Fast

-> Promise.all() takes an iterable as an input ex. Array
-> Promise.all([p1,p2,p3]);

    p1 takes 3s to complete, p2->1s, p3->2s
    ****successcase(fullfilled) :- Promise.all() gives result after 3s ex. [val1, val2, val3] . It waits for all promises to complete

    p1 -> 3s , p2-> 1s(rejected), p3->2s
    ****rejectcase: as soon as p2 gets rejected i.e in 1s Promise.all() will throw an Error and will not wait for others to get fullfilled


2. Promise.allSettled();

    p1 takes 3s to complete, p2->1s, p3->2s
    ****successcase(fullfilled) :- Promise.allSettled() gives result after 3s ex [val1, val2, val3] . It waits for all promises to complete

    p1 -> 3s , p2-> 1s(rejected), p3->2s
    ****rejectcase: Eventhough p2 is rejected, it will wait for all promises to be settled and result will come after 3s  ...[val1, err2, val3]


3. Promise.race() :- it will return the result of first settled promise

    p1 takes 3s to complete, p2->5s, p3->2s
    ****successcase(fullfilled) :- Promise.race() gives result after 2s i.e val3

    p1 -> 1s (rejected), p2-> 4s, p3->2s
    ****rejectcase: Promise.race() gives result after 1s i.e err1

4. Promise.any() :- It will wiat for first resolved/success  promise and returns let sat val2.
    
    **What if all promises fails? --return result will be agrregate error of all promises i.e[err1, err2, err3]

-------------------------------------------------------------------------
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("P1 success");
    },3000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("P2 success");
    },2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("P3 success");
    },1000);
});

Promise.all([p1,p2,p3]).then((res)=>console.log(res));
Promise.allSettled([p1,p2,p3]).then((res)=>console.log(res));
Promise.race([p1,p2,p3]).then((res)=>console.log(res));
Promise.any([p1,p2,p3]).then((res)=>console.log(res));
-------------------------------------------------------------------------




