class Vector{
    constructor(){
        this.innerArguments = arguments;
    }
    
    add(innerObject){
        let newArrayForNewVector = this.innerArguments[0].map((firstArrayValues, secondArrayValues)=>{
            return firstArrayValues + innerObject.innerArguments[0][secondArrayValues];
        })

        return new Vector(newArrayForNewVector)
    }

    subtract(innerObject){
        let newArrayForNewVector = this.innerArguments[0].map((firstArrayValues, secondArrayValues)=>{
            return firstArrayValues - innerObject.innerArguments[0][secondArrayValues];
        })

        return new Vector(newArrayForNewVector)
    }

    dot(innerObject){
        let returnedValue = 0;
        // let newArrayForNewVector = this.innerArguments[0].map((firstArrayValues, secondArrayValues) => {
        //     return firstArrayValues * innerObject.innerArguments[0][secondArrayValues];
        // });
        var res = [];

        console.log(this.innerArguments[0].lenght)

        for(var i=0;i<this.innerArguments[0].length; ++i)
        {
            for(var j=0;j<arr1.length;++j)
            res.push((arr1[i] + arr2[j]));
        }
        //return res;

        console.log(newArrayForNewVector);

        let testArray = newArrayForNewVector;

        console.log(testArray.lenght)

        for(let i=0; i < newArrayForNewVector.lenght; i++){
            console.log(returnedValue)
            returnedValue += newArrayForNewVector[i];
        }

        console.log(returnedValue)
        //return new Vector(newArrayForNewVector)
    }
}

let a =	new	Vector([1, 2, 3]);
var	b =	new	Vector([3, 4, 5]);
var	c =	new	Vector([5, 6, 7, 8]);

console.log(a.add(b))
console.log(a.subtract(b))
console.log(a.dot(b))
//console.log(a.norm())