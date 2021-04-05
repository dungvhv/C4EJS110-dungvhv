function hiNam(){
    alert('hi Nam');
    alert('Nam, funcion is great');
}
//hiNam()

function sayHi(name){
    alert(`Hi ${name}`);
    alert(`${name}, function is great`);
}
// sayHi('nam');
// sayHi('Duyen')
function sayHi(name, comment){
    alert(`Hi ${name}`);
    alert(`${name}, ${comment}`);
}
// sayHi('Nam','Function is great')
// sayHi('Duyên','Function is great')

function sayHi(name){
    alert(`Hi ${name}`);
    alert(`${name}, function is great`);
}
// let x = sayHi
// x('hello');

function sayHi(name){
    alert(`Hi ${name}`);
}
function sayGoodBye(name){
    alert(`Goodbye ${name}`);
}
function testSay(f){
    alert(`Here I Say`);
    f('Dũng');
}
// testSay(sayHi);
// testSay(sayGoodBye);

// const d = document.getElementById('msg');
// d.textContent = 'Hi there';

// const d = document.getElementById('msg');
// d.addEventListener('click',() =>{
//     d.textContent =('hi threr');
    //Handle user clicking here
// });
const d = document.getElementById('msg');
d.insertAdjacentHTML('beforeBegin',`<div>Cool</div>`)
