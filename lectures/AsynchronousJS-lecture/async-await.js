const promiseState = true;

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        promiseState
          ? resolve("Async Promise resolved")
          : reject("Async Promise rejected"),
      3000
    );
  });
};

// Async ... Await
const doSomething = async () => {
  console.log(await doSomethingAsync().catch(error => error));
};

console.log("Before");
doSomething();
console.log("After");
