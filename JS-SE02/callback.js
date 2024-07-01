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