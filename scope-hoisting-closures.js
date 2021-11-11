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



function carr1(innerFunc) {
    return function (firstValue) {
        return function (secondValue) {
            return innerFunc(firstValue, secondValue);
        }
    }
}

function carr2(innerFunc) {
    return function (firstValue) {
        return function (secondValue) {
            return function (thirdValue) {
                return function (fourthValue) {
                    return innerFunc(firstValue, secondValue, thirdValue, fourthValue);
                }
            }
        }
    }
}

function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
          console.dir(func)
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }

function sumNumbers (){
    let finalSum = 0;

    for (let i = 0; i < arguments.length; i++) {
       finalSum += arguments[i];
    }
    
    return finalSum;
}

function sum1(a, b, c,d) {
    return a + b + c + d;
  }

let test = curry(sum1)
console.log(test(1)(2)(3)(4));



// console.log(sumNumbers(1, 2, 3));
// sum = carr1(sumNumbers);
// console.log(sum(1)(2));
// sum = carr2(sumNumbers);
// console.log(sum(1)(2)(3)(4));

// const sum  = function (firsFunctionValue) {
//     if(arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     }
//     return function (ca) {
//         if (b) {
//             return sum2(a+b); 
//         }
//         return a; 
//     }
// };