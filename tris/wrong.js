const gridCreation = (function(){
    const grid = document.querySelector('#grid')
    for (let i=0; i<9; i++) {
        grid.appendChild(document.createElement('div'))
    }
})();

const addingClass = (function(){
    let divs = document.querySelectorAll('div');
    divs.forEach(function(div){
        if(div.id=="grid"||div.id =="result"||div.id=="players"){return}
        div.classList.add("gridItem")
    })
})();

const players = (function(){
    let player1 ={
        sign: "X",
        colour:"red",
        start: true
    };
    let player2 ={
        sign: "O",
        colour:"blue",
        start: false
    };
    function p1Color(){
        return player1.colour
    }
    function p2Color(){
        return player2.colour
    }
    function p1Start(){
        return player1.start
    }
    function p2Start(){
        return player2.start
    }
    return {
        p1C: p1Color,
        p2C : p2Color,
        p1S: p1Start,
        p2S : p2Start
    }
})();

const colourDetermination = (function(obj){
    let ctrl = false;
    let colour
    if(ctrl){
        colour = obj.p1C(); 
    }else{
        colour = obj.p2C();
    }
    return {
        c : colour,
        ctrl : ctrl,
    }
})(players);

const addingEventListener = (function(){
    let divs = document.querySelectorAll('.gridItem');
    divs.forEach((div)=>{div.addEventListener('click', populate )})
})();


//this function should be defined inside an object
function populate(e){
    console.log(colourDetermination.s)
    e.path[0].style.backgroundColor = colourDetermination.c
}