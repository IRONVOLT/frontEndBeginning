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