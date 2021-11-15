// function MyPromise(outerCallBack){
//     const somePromise = new Promise(outerCallBack)

//     return {
//         synchThen: innerCallBack => {
//             new Promise (innerCallBack)
//         return somePromise},
//     };
// }

// let	promise	= new MyPromise((resolve) => {
//     console.log(1);
//     resolve();
// }).synchThen(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// })
// console.log(4);

// 1 2 4 3 

function ReversePromise(outerCallBack){
    let firstPromise = new Promise(outerCallBack)

    return fourthThen => {
        const fourthPromis = new Promise(secondThen)
        return thirdThen => {
            const thirdPromis = new Promise(thirdThen)
            return secondThen => {
                const secondPromis = new Promise(fourthThen)
                return firstPromise
            }
        }
    }
}

let	promise	= new ReversePromise((resolve) => {
    console.log(1);
    resolve();
})
.then(() => console.log(2))
.then(() =>	console.log(3))
.then(() =>	console.log(4))

//1, 4, 3, 2

// const myPromises = [
//     new Promise((resolve) => setTimeout(() => {resolve('A (slow)'); console.log('A (slow)')}, 1000)),
//     new Promise((resolve) => setTimeout(() => {resolve('B (slower)'); console.log('B (slower)')}, 2000)),
//     new Promise((resolve) => setTimeout(() => {resolve('C (fast)'); console.log('C (fast)')}, 10))
//   ];
  
//   Promise.all(myPromises).then(console.log)