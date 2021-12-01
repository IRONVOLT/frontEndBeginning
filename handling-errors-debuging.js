let x = [];
let running = false;

function grow(){
    x.push(new Array(100000000).join('x'));
    if(running){
        setTimeout(grow, 1000);
    }

    new Float64Array(Math.pow(2, 27))

    document.getElementById('leak-button').click(()=>{
        running = true;
        let a;
        a = new Float64Array(Math.pow(2, 27))
        console.log(a)
    });

    document.getElementById('stop-button').click(()=>{
        running = false;
    });
}