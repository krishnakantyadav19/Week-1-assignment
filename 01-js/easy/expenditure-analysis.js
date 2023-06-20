/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let category = [];
   transactions.map((value,index)=>{
    let categoryExist = category.find((item) => item?.category == value.category);
    if(!!categoryExist){
      category= category.map((item,index)=>
        item.category == value.category ? {...item, totalSpent : item.totalSpent + value.price} : item
      )
    }else{
     category.push({ category: value.category, totalSpent: value.price})
    }
  })
return category;
}

module.exports = calculateTotalSpentByCategory;
