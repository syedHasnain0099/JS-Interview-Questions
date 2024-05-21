// Promise Methods
// Promise All:
// "Promise.all()" takes an array of Promises and returns a single Promise that resolve when all the promises in tha array have resolved, or rejects if any of the
// promises reject

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); //[3,42,'foo])
});

// Promise.race()
// "Promise.race()" returns a Promise that resolve or rejects as soon as one of the prmoises in the array resolves or rejects

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});
Promise.race([promise5, promise6]).then((value) => {
  console.log(value); // two
});

//Promise.allSettled()
// "Promise.allSettled()" returns a Promise that resolves after all of the given promises have either resolved or rejected, with an
// array of objects describing the outcome of each promise

const promise7 = Promise.resolve(3);
const promise8 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});
Promise.allSettled([promise7, promise8]).then((results) =>
  results.forEach((result) => console.log(result))
);
//{status:'fulfilled',value:3}
//{status:"rejected",reason:'foo'}
// Promise.any()
// Promise.any() returns a Promise that resolves as soon as any of the promises in the array fulfills. If all promises are rejected, it returns a rejected promise with an AggregateError.

const promise10 = Promise.reject("Error 1");
const promise12 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "Success")
);
const promise13 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "Another success")
);

Promise.any([promise10, promise12, promise13])
  .then((value) => {
    console.log(value); // "Success"
  })
  .catch((error) => {
    console.error(error); // AggregateError: All promises were rejected
  });
