const arr = ["Есть", "жизнь", "на", "Марсе", "и", "42"];
const newArray = [1,2,3,4,5];

let mappedArray = arr.map((elementLenth) =>{
    return elementLenth.length;
}
)

console.log(mappedArray);

let redusedArray = newArray.reduce((powedElement, cleanElement, arrayIndex) => {
    
    return powedElement + (cleanElement + arrayIndex);  
})

console.log(redusedArray)


var newVariable = 0;

console.log("We can see it: " + newVariable)

function anyFunction(){
    
}