function outer() {
  const outsideScopeVar = "Get out";
  function inner() {
    return outsideScopeVar
  }
  return inner;
}
const newer = outer();
console.log(newer())

//


const arr = [1,3,6,25,'53',223,'52']

const newArr = arr.sort((prev,next)=>{
    return Number(prev)<Number(next)?1:-1
})

console.log(newArr)