const promiseState = true;

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        promiseState
          ? resolve(console.log("Async Promise resolved"))
          : reject(console.log("Async Promise rejected")),
      3000
    );
  });
};

// Async ... Await
const doSomething = async () => {
  try {
    await doSomethingAsync();
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
doSomething();
console.log("After");
