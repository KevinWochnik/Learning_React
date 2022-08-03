// const items = [
//   { name: "Rice", price: 5 },
//   { name: "Book", price: 20 },
//   { name: "Chicken", price: 10 },
//   { name: "Monitor", price: 100 },
// ];

// // let totalPrice = 0;
// // items.forEach((item) => {
// //   totalPrice += item.price;
// // });

// const totalPrice = items.reduce((total, item) => {
//   return (total += item.price);
// }, 0);

// console.log(totalPrice);

// const people = [
//   { name: "john", age: 26 },
//   { name: "alex", age: 31 },
//   { name: "matthew", age: 42 },
//   { name: "silly", age: 42 },
// ];

// const reduced = people.reduce((groupedPeople, person) => {
//   const age = person.age;
//   if (groupedPeople[age] == null) {
//     groupedPeople[age] = [];
//   }
//   groupedPeople[age].push(person);
//   return groupedPeople;
// }, {});

// console.log(reduced);

// const numbers = [13, 2, 5];

// const sum = numbers.reduce((total, number, index, array) => {
//   return total + number;
// });
// console.log(sum);

// const orders = [31.53, 19.99, 4.55];

// const average = orders.reduce((total, amount, index, array) => {
//   total += amount;
//   if (index === array.length - 1) {
//     return total / array.length;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(average);
// console.log((31.53+19.99+4.55)/3)


// const members = [1,2,3,3,4];

// const uniqueMembers = members.reduce((total,member)=>{
//   if(total.indexOf(member)===-1) total.push(member);
//   return total
// },[])
// console.log(uniqueMembers)

// function total(arr) {
//   const tt = arr.reduce((acc, item)=>{
//     return acc+=item
//   },0)
//   return tt
// }

// console.log(total([1,2,3]));



// function stringConcat(arr) {
//   const red = arr.reduce((total,item)=>{
//     return total.concat(item)
//   },'')
//   return red
// }

// console.log(stringConcat([1,2,3])); // "123"



// function totalVotes(arr) {
//   const red = arr.reduce((total,item)=>{
//     if(item.voted){
//       total++
//       return total
//     }
//     return total
//   },0)
//   return red
// }

// var voters = [
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7


// function shoppingSpree(arr) {
//   const red = arr.reduce((total,item)=>{
//     return total+= item.price
//   },0)
//   return red
// }

// var wishlist = [
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005



// function flatten(arr) {
//   const red = arr.reduce((total,item)=>{
//     return total.concat(item)
//   },[])
//   return red   
// }

// var arrays = [
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
 const red = arr.reduce((total,item)=>{
  if(item.age<=25){
    if(item.voted){
      total.numYoungVotes++;
    }
    total.numYoungPeople++;
    return total
  }
  else if(item.age>25&&item.age<35){
    if(item.voted){
      total.numMidVotes++;
    }
    total.numMidPeople++;
    return total
  }
  else if(item.age>35){
    if(item.voted){
      total.numOldVotes++;
    }
    total.numOldPeople++;
    return total
  }
  return total
 },{
  numYoungVotes:0,
  numYoungPeople:0,
  numMidVotes:0,
  numMidPeople:0,
  numOldVotes:0,
  numOldPeople:0
 })
 return red
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4 
}
*/











