/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
function searchKey(categoryName, arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i].category === categoryName) {
      // console.log(i);
      return i;
    }
  }
}

function calculateTotalSpentByCategory(transactions) {
  //array for category
  let eachCategory = [];
  // Final array of objects
  let result = [];

  //looping through each object in array
  transactions.forEach((transaction) => {
    //checking for repeating category & pushing if not there already
    if (!eachCategory.includes(transaction.category)) {
      eachCategory.push(transaction.category);
      //creating new object of a single category
      let newObject = {};
      newObject.category = transaction.category;
      newObject.totalSpent = transaction.price;
      result.push(newObject);
    } else {
      // if category already exist
      // function for searching index of the category
      let index = searchKey(transaction.category, result);
      // Adding new price to current total price
      let oldPrice = result[index].totalSpent;
      result[index].totalSpent = oldPrice + transaction.price;
    }
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
