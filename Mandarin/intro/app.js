// onload call javascript function 
let timer =0;
let speed = 1000;
let i = 0;
let curtain = document.getElementById('curtain');
let screen = document.getElementById('screen');
let title = document.createElement('h1');

function intro () {
  const curtain = document.createElement('div');
  curtain.id = 'curtain';
  curtain.className ='curtain';
  document.body.appendChild(curtain)
  screen.onload = setTimeout(typeTitle,1000);
  curtain.appendChild(title);
}

intro();

function typeTitle () {
  let a = 'The Story of I-Have-No-Idea-Who';
  if (i<a.length){
    title.innerHTML += a.charAt(i);
    i++;
  }
  setTimeout(typeTitle, 60);
}

function renderBackground() {
  document.body.innerHTML = '';
}

setTimeout(renderBackground,speed*10);

function goHome() {
  location.href = '/English/about/./';
}
setTimeout(goHome,speed*11);
