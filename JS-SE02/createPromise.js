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