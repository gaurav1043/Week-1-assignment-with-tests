/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // Final array of objects
  let result = new Map(); // map algorithm
  //looping through each object in array
  transactions.forEach((transaction) => {
    //checking for repeating category & pushing if not there already
    if (!result.has(transaction.category)) {
      result.set(transaction.category, transaction.price);
      //creating new object of a single category
    } else {
      // if category already exist
      let oldPrice = result.get(transaction.category);
      let newTotal = oldPrice + transaction.price;
      result.set(transaction.category, newTotal);
    }
  });
  let returnArray = [];
  result.forEach((value, key) => {
    let obj = { category: key, totalSpent: value };
    returnArray.push(obj);
  });

  return returnArray;
}

module.exports = calculateTotalSpentByCategory;
