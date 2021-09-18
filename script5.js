function runningAverage() {
    let baseAvarageValue;

    return (avarageValue) => {
        if (baseAvarageValue === undefined) {
            baseAvarageValue = avarageValue;
        }
        return (baseAvarageValue + avarageValue) / 2;
    };
}

rAcg = runningAverage();
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

function sumNumbers (...values){
    let finalSum = 0;

    for (let i = 0; i < values.length; i++) {
        finalSum += values[i];
    }

    return finalSum;
}


console.log(sumNumbers(1, 2, 3));
sum = carr1(sumNumbers);
console.log(sum(1)(2));
sum = carr2(sumNumbers);
console.log(sum(1)(2)(3)(4));

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