let myHeading = document.querySelector('h1');
myHeading.textContent = 'SongsWithoutMusic';

document.querySelector('html').addEventListener('click', function() {
 alert('Listen, Download or Watch the song !');
});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'Images/EP 2020.png')  {
   myImage.setAttribute('src', 'Images/Ode à mon âme.png');
  }                    
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Entrez votre nom.');
  localStorage.setItem('nom', myName) ;
  myHeading.textContent = 'Enjoy the trip,'  + myName;
}
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = 
localStorage.getItem('nom'); 
    myHeading.textContent = 'Enjoy the trip,' + storedName;
}
    myButton.addEventListener('click', function() {
      setUserName();     
    })