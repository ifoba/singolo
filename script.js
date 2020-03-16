// header
const menu = document.getElementById('menu');


menu.addEventListener('click', (event)=> {
    menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
});

// portfolio

const tabs = document.getElementById('tabs');
const random = document.getElementById('random');

function getRandom() {
    return Math.random();
  }
  function rnd () {
      return Math.ceil(getRandom()*100);
  }
  

tabs.addEventListener('click', (event)=> {
    tabs.querySelectorAll('a').forEach(el=>el.classList.remove('lightning'));
    event.target.classList.add('lightning');
    random.querySelectorAll('img').forEach(el=> el.style.order = rnd())
});

random.addEventListener('click', (event)=>{
    random.querySelectorAll('img').forEach(el=>el.classList.remove('imgBorder'))
    event.target.classList.add('imgBorder')
})

// iphone click
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

//slider
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

// forma
const btn = document.getElementById('submit');
const cls = document.getElementById('close');

btn.addEventListener('click', ()=>{
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


});

cls.addEventListener('click', ()=>{
    document.getElementById('msg').classList.add('hide');
});