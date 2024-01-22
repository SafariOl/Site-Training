const sliders = document.querySelectorAll('.slider');

let isDown = false;
let startX;
let scrollLeft;


const head = document.querySelector('header')
const cursor = head.querySelector('.cursor')
const nav = document.querySelector('nav')
const features = document.querySelector('.features')
const cursor2 = features.querySelector('.cursor')
const sliderF = features.querySelector('.slider')


$(window).load(() => {
  setTimeout(() => {
    $('.l-block').addClass('active')
  }, 200)
  setTimeout(() => {
    $('.loading').addClass('active')
  }, 700)
})

$(head).on("mousemove", e => {
    const clientX = e.pageX - head.offsetWidth / 2,
    clientY = e.pageY - head.offsetHeight / 2
    cursor.style.transform =  `translate(${clientX - 50}px, ${clientY - 50}px)`
    if(e.pageY > head.offsetHeight || e.pageY < nav.offsetHeight + 60) cursor.style.transform =  null
})

$(features).on("mousemove", e => {
    const clientX = e.pageX - features.offsetWidth / 2 - features.offsetLeft,
    clientY = e.pageY - features.offsetTop - features.offsetHeight - sliderF.offsetTop
    cursor2.style.transform =  `translate(${clientX - 40}px, ${clientY - 20}px)`
    const slider = document.querySelector('.features .slider')
    cursor2.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        cursor2.classList.add('active')
      });
      cursor2.addEventListener('mouseleave', () => {
        isDown = false;
      });
      cursor2.addEventListener('mouseup', () => {
        cursor2.classList.remove('active')
        isDown = false;
      });
      cursor2.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; 
        slider.scrollLeft = scrollLeft - walk;
      });
})

// 
const tl = gsap.timeline()

const menu = document.querySelector('.menu')
$('.burger').click(() => {
    tl.to(menu, {opacity: 1})
    .to(menu, .7, {width: '100%'})
    .to(('body'), {overflow: 'hidden'})
    
})

$('#close').click(() => {
    tl.to(menu, .5, {opacity: 0})
    .to(menu, {width: 0})
    .to(('body'), .2, {overflow: 'visible'})
})

// SLIDER



sliders.forEach(slider => {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    });
})

const about = document.querySelector('.about__block')
const body = document.querySelector('body')

$(document).on('scroll', () => {
  if(window.scrollY > 3400 && window.scrollY < 4300){
    body.classList.add('dark')
  }else body.classList.remove('dark')
})
