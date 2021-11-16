// function runningAverage() {
//     let baseAvarageValue;

//     return (avarageValue) => {
//         if (baseAvarageValue === undefined) {
//             baseAvarageValue = avarageValue;
//             if(baseAvarageValue === Number){
//                 baseAvarageValue = avarageValue;
//             }
//         }
//         return (baseAvarageValue + avarageValue) / 2;
//     };
// }

// rAcg = runningAverage();
// console.log(rAcg(10))
// console.log(rAcg(11))
// console.log(rAcg(12))

//=============================================================
//================== My own realization =======================
// function carr1(innerFunc) {
//     return function (firstValue) {
//         return function (secondValue) {
//             return innerFunc(firstValue, secondValue);
//         }
//     }
// }

// function carr2(innerFunc) {
//     return function (firstValue) {
//         return function (secondValue) {
//             return function (thirdValue) {
//                 return function (fourthValue) {
//                     return innerFunc(firstValue, secondValue, thirdValue, fourthValue);
//                 }
//             }
//         }
//     }
// }

// function sumNumbers (){
//   let finalSum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//       finalSum += arguments[i];
//   }
//   if(arguments.length <= 0){
//     return 0;
//   }

//   return finalSum;
// }

// sum = carr1(sumNumbers);
// console.log(sum(1)(2));
// sum = carr2(sumNumbers);
// console.log(sum(1)(2)(3)(4));

//==================================================================
//============ FINAL CHANCE ===============
// const sum  = function (a) {
//   if(arguments.length === 2) {
//       return arguments[0] + arguments[1]
//   }
//   return function (b) {
//       if (b) {
//           return sum(a+b); 
//       }
//       return a; 
//   }
// };
// console.log(sum(1,2));
// console.log(sum(1)(2)(3)(4));

//===================================================================

// function indianGuyGuideVideo(innerFunction){
//   return function curried(...innerArguments){
//     return (innerFunction.length <= innerArguments.length) ? innerFunction.call(this, ...innerArguments) : (...moreInnerArguments) => curried(...innerArguments, ...moreInnerArguments)
//   }
// }

// const sum = (...values) => values.reduce((a,b) => a+b);

// const curried = indianGuyGuideVideo(sum)

// console.log(curried(1)(2))

//==================================================================

// function carr1(innerFunc) {
//     return function (firstValue) {
//         return function (secondValue) {
//             return innerFunc(firstValue, secondValue);
//         }
//     }
// }

function curr1(innerFunc){
  let innerArray = [];
  
  return function curried(someArgs){
    if(arguments === null){
      return innerFunc(innerArray);
  }
    innerArray.push(someArgs)
    
    return curr1(someArgs);
  }
}

function sum(...values){
  return values.reduce((a, b) => a + b);
}

const test = curr1(sum)

console.log(test(2,3))
console.log(test(2)(3))