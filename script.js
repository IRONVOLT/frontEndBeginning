class Vector{
    constructor(){
        this.innerArguments = arguments;
    }

    error(innerObject){
        if(innerObject.innerArguments[0].length > 3){
            throw new Error("Lenth Error massage");
        }
    }
    
    add(innerObject){
        this.error(innerObject);

        let newArrayForNewVector = this.innerArguments[0].map((firstArrayValues, secondArrayValues) => {
            return firstArrayValues + innerObject.innerArguments[0][secondArrayValues];
        })

        return new Vector(newArrayForNewVector)
    }

    subtract(innerObject){
        this.error(innerObject);
        let newArrayForNewVector = this.innerArguments[0].map((firstArrayValues, secondArrayValues) => {
            return firstArrayValues - innerObject.innerArguments[0][secondArrayValues];
        })

        return new Vector(newArrayForNewVector)
    }

    dot(innerObject){
        this.error(innerObject);
        let returnedValue = 0;

        let newArrayForNewVector = this.innerArguments[0].map((firstArrayValues, secondArrayValues) => {
            return firstArrayValues * innerObject.innerArguments[0][secondArrayValues];
        });

        for(let i=0; i < newArrayForNewVector.length; i++){
            returnedValue += newArrayForNewVector[i];
        }

        return returnedValue
    }

    norm(){
        // let returnedValue = 0;

        // for(let i = 0 ; i < this.innerArguments[0].length; i++ ){
        //     this.innerArguments[0][i] = Math.pow(this.innerArguments[0][i], 2);
        // }

        // for(let i=0; i < this.innerArguments[0].length; i++){
        //     returnedValue += this.innerArguments[0][i];
        // }

        // return parseFloat(Math.sqrt(returnedValue))

        const returnedValue = this.innerArguments[0].reduce((redusedValue, cleanElement) => {
            return redusedValue + Math.pow(cleanElement, 2)
        })
        
        return parseFloat(Math.sqrt(returnedValue));
    }

    toString(){
        return '(' + this.innerArguments[0][0] + ", " + this.innerArguments[0][1] + ", " + this.innerArguments[0][2] + ')';
    }

    equals(innerObject){
        this.error(innerObject);
        if(this.innerArguments[0][0] === innerObject.innerArguments[0][0]
            && this.innerArguments[0][1] === innerObject.innerArguments[0][1]
            && this.innerArguments[0][2] === innerObject.innerArguments[0][2]){
                return "Arrays are equals"
            }
        return "Arrays are different"
    }
}

let a =	new	Vector([1, 2, 3]);
var	b =	new	Vector([3, 4, 5]);
var	c =	new	Vector([5, 6, 7, 8]);

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
console.log(a.toString());
console.log(a.equals(b));
//console.log(a.add(c));