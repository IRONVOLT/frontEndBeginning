//======== FIRST TASK =====================
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

// ======== SECOND TASK ==================

// function ReversePromise(outerCallBack) {
//     const firstPromise = new Promise(outerCallBack);

//     return firstPromise;
// }

// let promise = new ReversePromise((resolve) => {
//     console.log(1);
//     resolve();
// })
//     .then(() => console.log(2))
//     .then(() => console.log(3))
//     .then(() => console.log(4))

//1, 4, 3, 2

// const myPromises = [
//     new Promise((resolve) => setTimeout(() => {resolve('2'); console.log('A (slow)')}, 1000)),
//     new Promise((resolve) => setTimeout(() => {resolve('2'); console.log('A (slow)')}, 1000)),
//     new Promise((resolve) => setTimeout(() => {resolve('3'); console.log('B (slower)')}, 2000)),
//     new Promise((resolve) => setTimeout(() => {resolve('4'); console.log('C (fast)')}, 10))
//   ];

//   Promise.all(myPromises).then(console.log)

// ============== STACK OVERFLOW EXAMPLE ================
class MyPromise extends Promise {
    syncThen(fn) {
        const val = fn();
        return this.then(_ => val);
    }
}

// NEVER EVER WRITE A PROGRAM LIKE THIS!
// REVERSE PROMISE IS THE SILLIEST
// IDEA I HAVE EVER HEARD OF.
// IF YOU WRITE CODE LIKE THIS
// YOUR TEAMMATES WILL NOT LIKE YOU.
class ReversePromise extends Promise {
    constructor(fn) {
        super(_ => _());
        this.fn = fn;
        this.stack = [];
    }
    then(fn) {
        this.stack.push(fn);
        return this;
    }

    // not standard to promises
    // but you need some way to
    // say the chaining has completed
    run() {
        const p = new Promise(this.fn);
        let current = p;

        while (this.stack.length) {
            current = current.then(this.stack.pop());
        }

        return p;
    }
}

const { MyPromise, ReversePromise } = require('.');

const myP = (new MyPromise(res => {
    console.log(1); res()
}))
    .syncThen(_ => console.log(2))
    .then(_ => console.log(3)); console.log(4);

const revP = (new ReversePromise(res => { console.log(1); res(); }))
    .then(_ => console.log(2))
    .then(_ => console.log(3))
    .then(_ => console.log(4))
    .run();