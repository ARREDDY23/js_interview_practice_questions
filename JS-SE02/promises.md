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


-> if we have n number of .then ...if we want to execute even there is error at some point ...use catch
-> if there is .then after catch...it will be executed

