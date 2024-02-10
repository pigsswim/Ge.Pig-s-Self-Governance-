//home page href 
const one = document.getElementById('nav');
const day = document.getElementById('day');
const night = document.getElementById('night');

  //change theme 

  function dayTheme () {
    localStorage.setItem('bgcolor','white');
    localStorage.setItem('elemcolor','black');
    localStorage.setItem('wrappercolor', '#f8f8f8');
    document.body.style.backgroundColor = localStorage.bgcolor;
    document.body.style.color = localStorage.elemcolor;
    const cw1 = document.getElementById('content-wrapper1')
    const cw2 = document.getElementById('content-wrapper2')
    const cw3 = document.getElementById('content-wrapper3')
    const cw4 = document.getElementById('content-wrapper4')
    const cw5 = document.getElementById('content-wrapper5')
    const cw6 = document.getElementById('content-wrapper6')
    const cw7 = document.getElementById('content-wrapper7')
    const cw8 = document.getElementById('content-wrapper8')
    const cw9 = document.getElementById('content-wrapper9')
    const cw10 = document.getElementById('content-wrapper10')
    const cw11 = document.getElementById('content-wrapper11')
    cw1.style.backgroundColor = localStorage.wrappercolor;
    cw2.style.backgroundColor = localStorage.wrappercolor;
    cw3.style.backgroundColor = localStorage.wrappercolor;
    cw4.style.backgroundColor = localStorage.wrappercolor;
    cw5.style.backgroundColor = localStorage.wrappercolor;
    cw6.style.backgroundColor = localStorage.wrappercolor;
    cw7.style.backgroundColor = localStorage.wrappercolor;
    cw8.style.backgroundColor = localStorage.wrappercolor;
    cw9.style.backgroundColor = localStorage.wrappercolor;
    cw10.style.backgroundColor = localStorage.wrappercolor;
    cw11.style.backgroundColor = localStorage.wrappercolor;
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.elemcolor;
    secT2.style.color = localStorage.elemcolor;
    secT3.style.color = localStorage.elemcolor;

    //cognitivity page

    let h1 = document.getElementById('h1');
  let h2 = document.getElementById('h2');
  let h3 = document.getElementById('h3');
  let h4 = document.getElementById('h4');
  let h5 = document.getElementById('h5');
  let h6 = document.getElementById('h6');
  let p1 = document.getElementById('p1');
  let p2 = document.getElementById('p2');
  let p3 = document.getElementById('p3');
  let p4 = document.getElementById('p4');
  let p5 = document.getElementById('p5');
  let p6 = document.getElementById('p6');
  p1.style.color = localStorage.elemcolor;
  p2.style.color = localStorage.elemcolor;
  p3.style.color = localStorage.elemcolor;
  p4.style.color = localStorage.elemcolor;
  p5.style.color = localStorage.elemcolor;
  p6.style.color = localStorage.elemcolor;
  h1.style.color = localStorage.elemcolor;
  h2.style.color = localStorage.elemcolor;
  h3.style.color = localStorage.elemcolor;
  h4.style.color = localStorage.elemcolor;
  h5.style.color = localStorage.elemcolor;
  h6.style.color = localStorage.elemcolor;
}

  function nightTheme() {
    localStorage.setItem('bgcolor','black');
    localStorage.setItem('elemcolor', 'white');
    localStorage.setItem('wrappercolor','#0c0c0c');
    document.body.style.backgroundColor = localStorage.bgcolor;
    document.body.style.color = localStorage.elemcolor;
    const cw1 = document.getElementById('content-wrapper1')
    const cw2 = document.getElementById('content-wrapper2')
    const cw3 = document.getElementById('content-wrapper3')
    const cw4 = document.getElementById('content-wrapper4')
    const cw5 = document.getElementById('content-wrapper5')
    const cw6 = document.getElementById('content-wrapper6')
    const cw7 = document.getElementById('content-wrapper7')
    const cw8 = document.getElementById('content-wrapper8')
    const cw9 = document.getElementById('content-wrapper9')
    const cw10 = document.getElementById('content-wrapper10')
    const cw11 = document.getElementById('content-wrapper11')
    cw1.style.backgroundColor = localStorage.wrappercolor;
    cw2.style.backgroundColor = localStorage.wrappercolor;
    cw3.style.backgroundColor = localStorage.wrappercolor;
    cw4.style.backgroundColor = localStorage.wrappercolor;
    cw5.style.backgroundColor = localStorage.wrappercolor;
    cw6.style.backgroundColor = localStorage.wrappercolor;
    cw7.style.backgroundColor = localStorage.wrappercolor;
    cw8.style.backgroundColor = localStorage.wrappercolor;
    cw9.style.backgroundColor = localStorage.wrappercolor;
    cw10.style.backgroundColor = localStorage.wrappercolor;
    cw11.style.backgroundColor = localStorage.wrappercolor;
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.elemcolor;
    secT2.style.color = localStorage.elemcolor;
    secT3.style.color = localStorage.elemcolor;

    //cognitivity page

    let h1 = document.getElementById('h1');
  let h2 = document.getElementById('h2');
  let h3 = document.getElementById('h3');
  let h4 = document.getElementById('h4');
  let h5 = document.getElementById('h5');
  let h6 = document.getElementById('h6');
  let p1 = document.getElementById('p1');
  let p2 = document.getElementById('p2');
  let p3 = document.getElementById('p3');
  let p4 = document.getElementById('p4');
  let p5 = document.getElementById('p5');
  let p6 = document.getElementById('p6');
  p1.style.color = localStorage.elemcolor;
  p2.style.color = localStorage.elemcolor;
  p3.style.color = localStorage.elemcolor;
  p4.style.color = localStorage.elemcolor;
  p5.style.color = localStorage.elemcolor;
  p6.style.color = localStorage.elemcolor;
  h1.style.color = localStorage.elemcolor;
  h2.style.color = localStorage.elemcolor;
  h3.style.color = localStorage.elemcolor;
  h4.style.color = localStorage.elemcolor;
  h5.style.color = localStorage.elemcolor;
  h6.style.color = localStorage.elemcolor;
}

window.addEventListener('load',() => {
  document.body.style.backgroundColor = localStorage.bgcolor;
  document.body.style.color = localStorage.elemcolor;
    const cw1 = document.getElementById('content-wrapper1')
    const cw2 = document.getElementById('content-wrapper2')
    const cw3 = document.getElementById('content-wrapper3')
    const cw4 = document.getElementById('content-wrapper4')
    const cw5 = document.getElementById('content-wrapper5')
    const cw6 = document.getElementById('content-wrapper6')
    const cw7 = document.getElementById('content-wrapper7')
    const cw8 = document.getElementById('content-wrapper8')
    const cw9 = document.getElementById('content-wrapper9')
    const cw10 = document.getElementById('content-wrapper10')
    const cw11 = document.getElementById('content-wrapper11')
    cw1.style.backgroundColor = localStorage.wrappercolor;
    cw2.style.backgroundColor = localStorage.wrappercolor;
    cw3.style.backgroundColor = localStorage.wrappercolor;
    cw4.style.backgroundColor = localStorage.wrappercolor;
    cw5.style.backgroundColor = localStorage.wrappercolor;
    cw6.style.backgroundColor = localStorage.wrappercolor;
    cw7.style.backgroundColor = localStorage.wrappercolor;
    cw8.style.backgroundColor = localStorage.wrappercolor;
    cw9.style.backgroundColor = localStorage.wrappercolor;
    cw10.style.backgroundColor = localStorage.wrappercolor;
    cw11.style.backgroundColor = localStorage.wrappercolor;
    const secT1 = document.getElementById('section-span1');
    const secT2 = document.getElementById('section-span2');
    const secT3 = document.getElementById('section-span3');
    secT1.style.color = localStorage.elemcolor;
    secT2.style.color = localStorage.elemcolor;
    secT3.style.color = localStorage.elemcolor;

    //cognitivity page

    let h1 = document.getElementById('h1');
  let h2 = document.getElementById('h2');
  let h3 = document.getElementById('h3');
  let h4 = document.getElementById('h4');
  let h5 = document.getElementById('h5');
  let h6 = document.getElementById('h6');
  let p1 = document.getElementById('p1');
  let p2 = document.getElementById('p2');
  let p3 = document.getElementById('p3');
  let p4 = document.getElementById('p4');
  let p5 = document.getElementById('p5');
  let p6 = document.getElementById('p6');
  p1.style.color = localStorage.elemcolor;
  p2.style.color = localStorage.elemcolor;
  p3.style.color = localStorage.elemcolor;
  p4.style.color = localStorage.elemcolor;
  p5.style.color = localStorage.elemcolor;
  p6.style.color = localStorage.elemcolor;
  h1.style.color = localStorage.elemcolor;
  h2.style.color = localStorage.elemcolor;
  h3.style.color = localStorage.elemcolor;
  h4.style.color = localStorage.elemcolor;
  h5.style.color = localStorage.elemcolor;
  h6.style.color = localStorage.elemcolor;

})

function navOpacity() {
  const navigation = document.getElementById('nav');
  this.scrollY > 1 ? navigation.style.opacity = .7 : navigation.style.opacity = 1;
}

window.addEventListener('scroll',navOpacity, false)



