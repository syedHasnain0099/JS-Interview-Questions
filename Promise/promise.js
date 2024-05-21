// promises are a key part of asynchronous programming in javascript. Promises provide a cleaner and more manageable way to handle asynchronous opeartions
// compared to traditional callback-based approaches

// Understanding Promises:

// A promise is an object representing the eventual completion or failure of asynchronous operation.
// It has three states:
// Pending: The inital state, neither fulfilled nor rejected
// Fulfilled: The Operation completed successfully
// Rejected: The Operation failed

// Basic usage:

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation Successful");
    } else {
      reject("Operation Failed");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Operation Complete");
  });
