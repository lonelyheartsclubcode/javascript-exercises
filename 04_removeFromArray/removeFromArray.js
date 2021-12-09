// const removeFromArray = function(editableArray, arguments,) {
//  let argumentList = Array.from(arguments);
  //console.log(argumentList);
  //for (const entry of argumentList) {
    //let index = editableArray.indexOf(entry);
    //console.log(index);
    //editableArray.splice(index,1);
    //console.log(editableArray);
  //}

  // return editableArray;
// }

const removeFromArray = function(...args) {
  const argArray = Array.from(args)
  console.log(argArray);
  const firstArray = argArray[0];
  argArray.shift();
  console.log(firstArray);
  let editedArray = [];

  for (let arg of argArray) {
    if (firstArray.includes(arg)) {
      firstArray.splice(firstArray.indexOf(arg),1)
    } else {
      continue;
    }
  }
  return firstArray;
}

// Do not edit below this line
module.exports = removeFromArray;
