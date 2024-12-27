class MyPromise {
  constructor(executor) {
    // Initial state and value
    this.state = "pending"; // Can be 'pending', 'fulfilled', or 'rejected'
    this.value = undefined; // Holds the resolved or rejected value
    this.handlers = []; // Stores success and failure handlers

    // Resolve function
    const resolve = (value) => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = value;
      this.handlers.forEach((handler) => handler.onFulfilled(value));
    };

    // Reject function
    const reject = (reason) => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.value = reason;
      this.handlers.forEach((handler) => handler.onRejected(reason));
    };

    // Execute the executor function
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // Then method for chaining
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handle = () => {
        try {
          if (this.state === "fulfilled") {
            if (onFulfilled) {
              resolve(onFulfilled(this.value));
            } else {
              resolve(this.value);
            }
          } else if (this.state === "rejected") {
            if (onRejected) {
              resolve(onRejected(this.value));
            } else {
              reject(this.value);
            }
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "pending") {
        this.handlers.push({
          onFulfilled: () => handle(),
          onRejected: () => handle(),
        });
      } else {
        setTimeout(handle, 0); // Ensure async behavior
      }
    });
  }

  // Catch method for handling rejections
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

(() => {
  const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 1000);
  });

  promise
    .then((result) => {
      console.log("First then:", result);
      return "Chained Value";
    })
    .then((chainedResult) => {
      console.log("Second then:", chainedResult);
      throw new Error("Something went wrong!");
    })
    .catch((error) => {
      console.error("Caught an error:", error.message);
    });
})();
