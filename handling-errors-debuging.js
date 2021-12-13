//==============================
// Custom error
class newError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  class FieldValidationError extends newError { }
  
  class PropertyRequiredError extends FieldValidationError {
    constructor(property) {
      super("Property is empty: " + property);
      this.property = property;
    }
  }
  
  console.log(new PropertyRequiredError("field").name ); // PropertyRequiredError
//==============================
// Memorry leak task

// let x = [];
// let running = false;

// function grow(){
//     x.push(new Array(100000000).join('x'));
//     if(running){
//         setTimeout(grow, 1000);
//     }

//     new Float64Array(Math.pow(2, 27))

//     document.getElementById('leak-button').click(()=>{
//         running = true;
//         let a;
//         a = new Float64Array(Math.pow(2, 27))
//         console.log(a)
//     });

//     document.getElementById('stop-button').click(()=>{
//         running = false;
//     });
// }