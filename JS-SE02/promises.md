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
-> Above callback hell can be handled with promises
    createOrder(cart)
    .then((id)=>{
        proceedToPayment(id)
    })
    .then((paymentInfo)=>{
        showOrderSummary(paymentInfo);
    })
    .then((paymentInfo)=>{
        updateWallet(paymentInfo);
    });
