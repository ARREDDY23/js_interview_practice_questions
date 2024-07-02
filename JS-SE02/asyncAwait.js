/** 
 * ************ async always returns promise *************
 * async and await are used to handle promises
 * await can only be used inside async function
 * */ 


// ********settimeout will start here before reaching await
const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Promise resolved! p1");
    },10000);
}); 

const p2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Promise resolved! p2");
    },5000);
}); 


async function handlePromise(){
    /**
     *   JS Engine will wait for promise to be resolved
     */
    // const p1 = new Promise((resolve,reject) =>{
    //     setTimeout(()=>{
    //         resolve("Promise resolved! p1");
    //     },10000);
    // }); 

    const val1 = await p1;
    console.log(val1);
    console.log("Alluru in async p1");
    
    // const p2 = new Promise((resolve,reject) =>{
    //     setTimeout(()=>{
    //         resolve("Promise resolved! p2");
    //     },10000);
    // });

    const val2 = await p2;
    console.log(val2);
    console.log("Alluru in async p2");
}
handlePromise();


// async function getData(){
//     // JS Engine will not wait for promise to be resolved
//     p1.then((res) => console.log(res));
//     console.log("Alluru in then");
// }
// getData();


// dataPromise.then((res) => console.log(res));