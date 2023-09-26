// option two onclick function 

function makeRed(){
    document.body.style.backgroundColor='red';
}

//  option three 
const makeBlueButton = document.getElementById('make_blue');
makeBlueButton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//option three another
const purpleButton = document.getElementById('make_purple');
     purpleButton.onclick = makePurple;

     function makePurple() {
        document.body.style.backgroundColor = 'purple'
     }