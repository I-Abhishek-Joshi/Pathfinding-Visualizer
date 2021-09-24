let container = document.querySelector(".container");
let grid = document.querySelector(".grid");
let prevBoxId = "none";
let startBoxId = 'box_0_0';
let targetBoxId = 'box_29_29';
let initialize = () => {
    
    for(let i = 0; i < 30; i++){
        let newRow = document.createElement('DIV');
        newRow.classList = 'row';
        for(let j = 0; j < 30; j++){
            let newBox = document.createElement('DIV');
            newBox.classList = 'box';
            newBox.id = 'box' + '_' +  i + '_' + j;
            if(i == 0 && j == 0){
                newBox.classList += ' start';
            }
            else
            if(i == 29 && j == 29){
                newBox.classList += ' target';
            }

            newRow.appendChild(newBox);
        }
        grid.appendChild(newRow);
    }
}
initialize();

let isStart = false, isTarget = false;
grid.addEventListener('dragstart', (e) => {
    let currBoxId = e.target.id;
    if(currBoxId === startBoxId){
        isStart = true;
    }else if(currBoxId === targetBoxId){
        isTarget = true;
    }
})
grid.addEventListener('dragover', (e) => {
    let currBoxId = e.target.id;
    if(isStart === true){
        let prevBox = document.getElementById(startBoxId);
        prevBox.classList.remove('start');
        startBoxId = currBoxId;
        e.target.classList.add('start');
        e.target.classList.remove('wall');
    }else if(isTarget === true){
        let prevBox = document.getElementById(targetBoxId);
        prevBox.classList.remove('target');
        targetBoxId = currBoxId;
        e.target.classList.add('target');
        e.target.classList.remove('wall');

    }else{
        if(currBoxId !== startBoxId && currBoxId != targetBoxId && prevBoxId !== currBoxId){
            prevBoxId = currBoxId;
            e.target.classList.toggle('wall');
        }
    }
        
})
grid.addEventListener('dragend', (e) => {
    isStart = false;
    isTarget = false;
})
grid.addEventListener('click', (e) => {
    let currBoxId = e.target.id;
    if(currBoxId == startBoxId){
        console.log('YES');
    }
    if(!e.target.classList.contains('start') && !e.target.classList.contains('target')){
        e.target.classList.toggle('wall');
    }
})