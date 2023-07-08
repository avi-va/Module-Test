const rules_btn = document.getElementById('rules-btn');
const rules = document.getElementById('rulebox');
const close_btn = document.getElementById('x');
const choices=['rock','paper','scissors'];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const area = document.getElementById('main-area');

rules_btn.onclick=function(){
    rules.style.display='';
}

close_btn.onclick=function(){
    rules.style.display='none';
}
const r = '<div id="r" class="icons"></div>';
const p = '<div id="p" class="icons"></div>';
const s = '<div id="s" class="icons"></div>';

//'<div id="${userChoice}" class="icons"></div><div class="res"><p id="line1">TIE UP</p><P id="line2"></P><button class="replay" type="button">REPLAY</button><div id="${userChoice}" class="icons">';
function computerChoice(userChoice){
    const ind = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[0];
    if (userChoice == computerChoice){
        console.log(userChoice)
        area.innerHTML = `<div id="${userChoice}" class="icons"></div><div class="res" id="mid"><p id="line1">TIE UP</p><P id="line2"></P><button class="replay" id="rep" type="button">REPLAY</button>`;
        if(computerChoice == 'rock'){
            area.innerHTML+= r;
        }
        else if(computerChoice == 'paper'){
            area.innerHTML += p;
        }
        else{
            area.innerHTML += s;
        }
    }
}



const icons = document.getElementsByClassName("icons");
for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", function(event) {
      var clickedDivId = event.target.id;
      computerChoice(clickedDivId);
    });
}
const replay = document.getElementById('rep');
if (replay){
replay.addEventListener("click", function(){
    console.log("clicked replay");
      area.innerHTML = '<div id="rock" class="icons"></div><div id="paper" class="icons"></div><div id="scissors" class="icons"></div>';
});
}
