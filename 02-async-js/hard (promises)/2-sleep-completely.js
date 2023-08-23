/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// function sleep(seconds) {}
function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

// Usage example:
delay(3000)
  .then(() => {
    console.log("Delay is complete after 3 seconds.");
    // Continue with your code here
  })
  .catch((error) => {
    console.error(error);
  });
