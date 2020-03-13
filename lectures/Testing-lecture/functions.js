const Axios = require("axios");

module.exports = {
  add: (a, b) => a + b,

  nameOfUser: "Wildo Coda",

  nullValue: null,

  undefinedValue: undefined,

  someUserObject: { name: "Wildo Coda", age: 30 },

  groceryList: ["bread", "coffee", "sugar"],

  faultyFunc: () => {
    throw new Error("problem");
  },

  findAverage: array =>
    array.reduce((acc, index) => acc + index) / array.length,

  addAsyncCallback: (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result + 5);
    }, 500);
  },

  fetchApiData: () => {
    return Axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => err);
  }
};
