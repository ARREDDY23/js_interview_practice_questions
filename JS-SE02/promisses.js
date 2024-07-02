// const cart = ["shoes", "pens", "peace"];

// const GITHUB_API = "https://api.github.com/users/ARREDDY23";

// const user = fetch(GITHUB_API);

// console.log(user);

//Promise.all()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1 success");
    reject("P1 fail");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 success");
    reject("P2 fail");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 success");
    reject("P3 fail");
  }, 1000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.error(err.errors);
  });
