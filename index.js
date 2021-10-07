//multiplication tables

function multiTable(number) {
  // good luck
  let arr = [...Array(11).keys()].slice(2);
  //console.log(arr.map(a => typeof a))
  let result = `1 * ${number} = ${number}`;
  for(let i=0; i<arr.length; i++){
    const product = arr[i] * number;
   // console.log(product)
    result += `\n${arr[i]} * ${number} = ${product}`
  }
    
    return result;
}

console.log(multiTable(4));
console.log(multiTable(5));
console.log(multiTable(10));