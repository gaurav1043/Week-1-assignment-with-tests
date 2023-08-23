/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 1 second");
    }, 1000);
  });
}

function wait2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds");
    }, 2000);
  });
}

function wait3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 3 seconds");
    }, 3000);
  });
}

function calculateTime() {
  const startTime = Date.now();

  // Use Promise.all to wait for all promises to resolve
  Promise.all([wait1Second(), wait2Seconds(), wait3Seconds()])
    .then((results) => {
      const endTime = Date.now();
      const totalTime = endTime - startTime;

      console.log(`All promises resolved in ${totalTime / 1000} seconds`);

      // Print the results
      results.forEach((result, index) => {
        console.log(`Promise ${index + 1}: ${result}`);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function to wait for all promises to resole
calculateTime();
