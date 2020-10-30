var gridCreation = (function(){
    const grid = document.querySelector('#grid')
    for (let i=0; i<9; i++) {
        grid.appendChild(document.createElement('div'))
    }
    var divs = document.querySelectorAll('div');
    divs.forEach(function(div){
        if(div.id=="grid"||div.id =="result"){return}
        div.classList.add("gridItem");
        
    })
})()

var populating=(function(){
    const divs = document.querySelectorAll('.gridItem')
    divs.forEach(function(div){div.addEventListener('click', c)})
    function c(e){
        e.srcElement.style.backgroundColor = checker(a,b)
    }
})()

 
var players=(function(name,start,color,sign){
// var player1 = {
//     sign: "X",
//     start: true,
//     colour: "red",
// }
// var player2={
//     sign : "O",
//     colour: "blue",
//     start: false,
// }
let sign = sign;
let color= color;
let name=name;
let start = start
let info = function(){
`sign ${sign}, color: ${color}, start: ${start}, name: ${name}`
}
return {info}    
})()

var checker =(function(a,b){
  if(a.start == true){
    a.start = false;
    b.start = true;
    return a.colour
  }else{
      b.start = false;
      a.start = true;
      return b.colour;
  }
})