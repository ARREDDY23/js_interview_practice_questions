const cart = ["shoes", "pens", "peace"];

api.createOrder(cart, function(){

    //
    //
    api.proceedToPayment(id, function(){
        //
        //
        api.showOrderSummary(
            function(){
                api.updateWallet();
            }
        )
    })
})


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