function tableCreate(row, col){
    let body = document.body;
    let tbl  = document.createElement('table');
    tbl.style.width  = '200px';
    tbl.style.border = '1px solid black';

    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow(); 
        for(let j = 0; j < col; j++){
                let td = tr.insertCell();
                td.setAttribute('draggable', 'ture');
                td.style.backgroundColor = `#${parseInt(Math.random()*999)}`;
                td.appendChild(document.createTextNode(''));
                td.style.border = '1px solid black';
                td.addEventListener('dragstart', dragStrat)
                //td.addEventListener('dragend', draged) 
                td.addEventListener('dragend', dragEnd)
            }     
    }

    function dragStrat(element){
        element.target.classList.add(`selected`);
    }

    // tasksListElement.addEventListener(`dragend`, (evt) => {
    //     evt.target.classList.remove(`selected`);
    //   }); добавить ффункционал в драгЕнд

    function dragEnd(element){
    
    }

    function testColor(element){
        element.target.style.backgroundColor = 'red';
    }

    body.appendChild(tbl);

    function allowDrop(ev) {
        ev.preventDefault();
      }
}

tableCreate(100,100);