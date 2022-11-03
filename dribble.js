let burger = document.querySelector('.dribble__burger');
burger.addEventListener('click', function(){
  burger.classList.toggle('active');
})

/*---Добавляем menu------------*/
let burgerAdd = document.querySelector('.dribble__burger');
burgerAdd.addEventListener('click', function(){
  let menuAdd = document.querySelector('.drible__ul');
  menuAdd.classList.toggle('active')
})
/*-------Всплывающая меню в menu--------*/
let menuClick = document.querySelector(".category__a");
menuClick.addEventListener('click', function(){
  let addEvent = document.querySelector('.category__a-span-hover');
  addEvent.classList.toggle('active');
  let rotateArrow = document.querySelector('.category__a-icon-menu');
  rotateArrow.classList.toggle('active')
})

/*--------Анимация видео при наведение-------*/
const OurElem = document.getElementById("litle__img-video-1");
OurElem.addEventListener('mouseenter',function(){
  OurElem.play();
})
OurElem.addEventListener('mouseleave',function(){
  OurElem.pause();
  OurElem.load();
});
/*--------------Скрол вверх--------------*/
window.addEventListener('scroll',function(){
  var scroll = document.querySelector('.drible__scroll');
  scroll.classList.toggle('active', window.scrollY>200);
})
function scrollTopTop(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
/*---------------POPUP---------*/
var modalWindow = document.getElementById('myModal');
var close = document.getElementsByClassName("drible-popup-close")[0];
var btn = document.getElementById('myBtn');
btn.onclick = function(){
  modalWindow.style.display = "block";
} 
close.onclick = function(){
  modalWindow.style.display = "none";
}
window.onclick = function(e){
  if(e.target == modalWindow){
    modalWindow.style.display = "none";
  }
} 
/*----------ДИАЛОГОВОЕ ОКНО----------*/
window.addEventListener('scroll',function(){
  var dribleWidget = document.querySelector('.drible__widget');
  dribleWidget.classList.toggle('active', window.scrollY>400);
})
var dribWidget = document.querySelector(".drible__widget");
var dribClose = document.querySelector(".drible__widget-close");
dribClose.onclick = function(){
  dribWidget.style.display = "none";
}
/*--------------ВИДЖЕТ ПОПАП---------------*/
const widgetBtn = document.querySelector(".drible__widget-btn");
const widgetPopup = document.querySelector(".drible__widget-popup");
const widgetClose = document.querySelector(".drible__widget-popup-close");
const widgetCancel = document.querySelector(".drible__widget-popup-cancel");
widgetBtn.onclick = function(){
  widgetPopup.style.display = "block";
}
widgetClose.onclick = function(){
  widgetPopup.style.display = "none";
}
widgetCancel.onclick = function(){
  widgetPopup.style.display = "none";
}
window.onclick = function(e){
  if(e.target == widgetPopup){
    widgetPopup.style.display = "none";
  }
}
// /*---------------ПЕРЕНОС ЭЛЕМЕНТА С ОДНОГО БЛОКА В ДРУГОЙ--- пока не понял--*/
// const OurChild = document.querySelector(".register__sidebar-logo");
// const OurChild2 = document.querySelector(".main__regist-content-title");
// function Transfer(){
//   if(window.width()<960){
//     OurFather.insertBefore(OurChild,OurChild2);
//   }
// }
/*-------------------Filter для картинок--------*/
const FilterBox = document.querySelectorAll(".box-img");
document.querySelector(".category__ul").addEventListener("click", event=>{
  if(event.target.tagName !== "LI") return false;
  const filterClass = event.target.dataset['f']
  FilterBox.forEach(elem=>{
    elem.classList.remove("hide");
    if(!elem.classList.contains(filterClass) && filterClass !== "all"){
      elem.classList.add("hide");
    }
  })
})
/*-----------------------TEXTAREA- ФИКС ИЗМЕНЕНИЙ----------*/
const SendPopup = document.querySelector(".drible__widget-popup-send");
const WidgPopup = document.getElementById("widget-popup-area")
WidgPopup.addEventListener("input", event=>{
  if(WidgPopup.value.length < 1){
    SendPopup.style.background = "#F3F3F4";
    SendPopup.addEventListener('click', ()=>{
    SendPopup.setAttribute('disabled', 'disabled');
    } )
  }else {
    SendPopup.style.background="red";
    SendPopup.removeAttribute('disabled');
}
  })
