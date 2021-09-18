let globalWarrior = 'viking';

const localWarrior = () =>{
    let localWarrior = "Knight"

    return function() {
        console.log(localWarrior);
    }()
}

let getConsoleWarrior = localWarrior();

//console.log(localWarrior()());

console.log(globalWarrior, getConsoleWarrior)