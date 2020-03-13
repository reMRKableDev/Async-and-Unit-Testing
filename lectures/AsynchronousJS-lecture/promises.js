/* 
  At its base, JavaScript is a synchronous, blocking, single-threaded language. 
  This means that only one process can be in progress at a time. 
*/

// Regular Synchronous Functions
const regularSyncFunctionOne = () => console.log("I am executing first");
const regularSyncFunctionTwo = () => console.log("I am executing second");

regularSyncFunctionOne();
regularSyncFunctionTwo();

/* 
  Javascript can be manipulated to behave in an asynchronous way
*/

/* CALLBACKS - can be executed synchronously and asynchronously */
// Synchronous Callback Function - executes in a top to bottom, left to right fashion, sequentially, and waiting until one code has finished before the next line begins.
const regularSyncFunction = () =>
  console.log("Executing as a callback function");

const syncCallbackFunction = callback => {
  callback();
  console.log("Executing outer function");
};

syncCallbackFunction(regularSyncFunction);

// Asynchronous Callback Function - execute the rest of the tasks given to it while waiting for another task to finish.
const asyncCallbackFunction = () =>
  setTimeout(() => console.log("Executing asynchronous callback"), 1000);

const regularSynchroFunction = () => console.log("Executing a regular function call");

asyncCallbackFunction();
regularSynchroFunction();

/* PROMISES */
// Resolve & Reject
const promiseState = false;

const isPromiseKept = new Promise((resolve, reject) => {
  setTimeout(() => 
    promiseState ? resolve("Promise resolved") : reject("Promise rejected"), 1000);
});
const regFunction = () => console.log("Executing a regular function call");

isPromiseKept
  .then(results => console.log(results))
  .catch(error => console.error(error));
regFunction();

// Promise.all - a promise that takes an array of promises as an input. Then it gets resolved when all the promises get resolved or any one of them gets rejected.
const promiseOperation = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      time === 2000
        ? reject(`Promise rejected at ${time / 1000} secs`)
        : resolve(`Promise resolved at ${time / 1000} secs`);
    }, time);
  });
};

const operationTimesList = [1000, 2000, 3000];

// Handling rejections so that Promise.all doesn't stop running once rejected.
const promises = operationTimesList.map(operationTime =>
  promiseOperation(operationTime).catch(error => error)
);

Promise.all(promises)
  .then(results => console.log(results))
  .catch(error => console.error(error));
