function Person	(name, age)	{
    this.name = name;
    this.age = age;
}

Person.prototype.introduse = function (){
    console.log('My name is ' + this.name + ' and I am ' + this.age)
}

function myNew(customConstructor, ...args){
    const newsome = Object.create(customConstructor.prototype)
    customConstructor.apply(newsome, args)
    return newsome;
}

let john = myNew(Person, 'John', 30)
let bob = myNew(Person, 'Bob', 25)

console.log(john)
console.log(bob)
console.log(john.introduse())
console.log(bob.introduse())