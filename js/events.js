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
//option 4

const pinkButton = document.getElementById('make_pink');
//   console.log(makePink);
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink'
}

// option 4 
const greenButton = document.getElementById('make_green');
//    console.log(greenButton);
greenButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
})

