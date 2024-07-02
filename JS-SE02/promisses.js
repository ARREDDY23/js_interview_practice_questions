// const cart = ["shoes", "pens", "peace"];


// const GITHUB_API = "https://api.github.com/users/ARREDDY23";

// const user = fetch(GITHUB_API);

// console.log(user);

//Promise.all()

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