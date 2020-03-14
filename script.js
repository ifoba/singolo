const menu = document.getElementById('menu');


menu.addEventListener('click', (event)=> {
    menu.querySelectorAll('a').forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
});

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