// HEADER
const menu = document.getElementById('menu');

let status = false;

function statusSign () {
    status = false;
}

menu.addEventListener('click', (event)=> {

    event.preventDefault();
    if(event.target.tagName == 'A') {
    status = true;    
    menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById(event.target.innerHTML).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    setTimeout( statusSign, 1000);}
    else return;
});

const anchor = document.querySelectorAll('a[href^="#"]');

skrollinng = window.addEventListener('scroll', () => {
    if (status) return;
    if (pageYOffset < 600) { /* services */
        menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
        anchor[0].classList.add('active');
    }
    if (pageYOffset > 600 && pageYOffset < 1000) { /* services */
        menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
        anchor[1].classList.add('active');
    }
    if (pageYOffset > 1050 && pageYOffset < 1850) { /* portfolio */
        menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
        anchor[2].classList.add('active');
    }
    if (pageYOffset > 1900 && pageYOffset < 2450) { /* about */    
        menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
        anchor[3].classList.add('active');
    }
    if (pageYOffset > 2500) {
        menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
        anchor[4].classList.add('active');
    }

    
});

//SLIDER
let items = document.querySelectorAll('.sliderItem');

let currentItem = 0;

let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction)
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}



function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1)
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1)
    showItem('from-right');
}

document.querySelector('.slider_left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
    
});

document.querySelector('.slider_right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
    
});

// IPHONE CLICK
const vertical = document.getElementById('vertical');
const horizontal = document.getElementById('horisontal');

let countScreenVertical = 0;
vertical.addEventListener('click', ()=>{
    if (countScreenVertical%2==0){
        verScreen.style.display="none";
    }
    else
    verScreen.style.display="block";
    countScreenVertical++
});
let countScreenHorizontal = 0;
horizontal.addEventListener('click', ()=>{
    if (countScreenHorizontal%2==0){
        horScreen.style.display="none";
    }
    else
    horScreen.style.display="block";
    countScreenHorizontal++
});


// PORTFOLIO

const tabs = document.getElementById('tabs');
const random = document.getElementById('random');

function getRandom() {
    return Math.random();
  }
  function rnd () {
      return Math.ceil(getRandom()*100);
  }
  

tabs.addEventListener('click', (event)=> {
    event.preventDefault();
    if ((event.target.tagName == 'LI' || event.target.tagName == 'A') && event.target.classList.value !== 'lightning' ) { 
    tabs.querySelectorAll('a').forEach(el=>el.classList.remove('lightning'));
    event.target.classList.add('lightning');
    random.querySelectorAll('img').forEach(el=> el.style.order = rnd());
    random.querySelectorAll('img').forEach(el=>el.classList.remove('imgBorder'));
    
    }
});

random.addEventListener('click', (event)=>{
    random.querySelectorAll('img').forEach(el=>el.classList.remove('imgBorder'));
    if (event.target.tagName == 'IMG') {
         
        event.target.classList.add('imgBorder');
    }
    
    
    
})



// FORMA
const btn = document.getElementById('submit');
const cls = document.getElementById('close');
const from = document.getElementById('form');
from.addEventListener('submit', ()=>{
    event.preventDefault();
    let theme = document.getElementById('theme').value.toString();
    let message = document.getElementById('textarea').value.toString();
    
    if (theme == '') {
        document.getElementById('resultTheme').innerText = 'Без темы';
    }
    else {
        document.getElementById('resultTheme').innerText = 'Тема: ' + theme;
    }
    if (message == '') {
        document.getElementById('resultMessage').innerText = 'Без описания';
    }
    else {
        document.getElementById('resultMessage').innerText = 'Описание: ' + message;
    }
    document.getElementById('msg').classList.remove('hide');
})



cls.addEventListener('click', ()=>{
    document.getElementById('msg').classList.add('hide');
    from.reset();
});