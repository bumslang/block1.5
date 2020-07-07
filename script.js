function getBrends() {
const slider = document.querySelector('.swiper-container');
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

let mobile = window.matchMedia("(min-width: 768px)");
mobile.addListener(addElem);
let desktop = window.matchMedia("(min-width: 1016px)");
desktop.addListener(hideElem);
let bigResolution = window.matchMedia("(min-width: 1500px)");
bigResolution.addListener(hideElem);


  if (mobile.matches) {
    addElem();
  }
  function addElem(){
  if (mobile.matches){
    let swiperSlide = document.querySelectorAll('.swiper-slide');
    let sliderContainer = document.querySelector('.slider-container');
    let swiperWripper = document.querySelector('.swiper-wrapper');
    let swiperContainer = document.querySelector('.swiper-container');
    for (let i = 0; i < swiperSlide.length; i++) {
        swiperSlide[i].classList.remove('swiper-slide');
        swiperSlide[i].removeAttribute("style");
    }
    sliderContainer.classList.remove('slider-container');
    sliderContainer.classList.add('brends');

    swiperWripper.classList.remove('swiper-wrapper');
    swiperWripper.classList.add('brends__wripper');

    swiperContainer.classList.remove('swiper-container');
    swiperContainer.classList.add('brends__container');
    hideElem()
  } else{
    let swiperSlide = document.querySelectorAll('.brends__elem');
    let brends = document.querySelector('.brends');
    let brendsWripper = document.querySelector('.brends__wripper');
    let brendsContainer = document.querySelector('.brends__container');
    for (let i = 0; i < swiperSlide.length; i++) {
        swiperSlide[i].classList.add('swiper-slide');
    } 
    brends.classList.remove('brends');
    brends.classList.add('slider-container');

    brendsWripper.classList.remove('brends__wripper');
    brendsWripper.classList.add('swiper-wrapper');

    brendsContainer.classList.remove('brends__container');
    brendsContainer.classList.add('swiper-container');

}
}


//-------------------------показать все-------------------------------------


let showMore = document.querySelector('.show-more');
showMore.addEventListener("click", showBrends);

function showBrends(item){
    let brendsItem = document.querySelectorAll(".brends__elem");
    let showMoreText = document.querySelector(".show-more__text");
    let showMoreIcon = document.querySelector(".show-more__icon")
    if (mobile.matches && !(desktop.matches)){
        item = 6;
    } else if (desktop.matches && mobile.matches && !bigResolution.matches){
        item = 8;
    } else if (bigResolution.matches){
        item = 10;
    }
    for (let i = item; i < brendsItem.length; i++) {
        brendsItem[i].classList.toggle("brends__item--hide");
    }

    if (showMoreText.textContent == "Показать все") {
        showMoreText.textContent = "Скрыть";
        showMoreIcon.style.transform = "rotate(180deg)";
    } else {
        showMoreText.textContent = "Показать все";
        showMoreIcon.style.transform = "";
    }
}


// ----------------------- Прячем элементы ---------------------------

function hideElem(numb) {
  let brendsItem = document.querySelectorAll(".brends__elem");
  if(mobile.matches && !(desktop.matches)){
      numb = 6;
  } else if(desktop.matches && mobile.matches && !bigResolution.matches){
      numb = 8;
      brendsItem[6].classList.remove("brends__item--hide");
      brendsItem[7].classList.remove("brends__item--hide");
  } else if (bigResolution.matches){
      numb = 10;
      brendsItem[6].classList.remove("brends__item--hide");
      brendsItem[7].classList.remove("brends__item--hide");
      brendsItem[8].classList.remove("brends__item--hide");
      brendsItem[9].classList.remove("brends__item--hide");
  }
  for (let i = numb; i < brendsItem.length; i++) {
      brendsItem[i].classList.add("brends__item--hide");
  }   
}
}
getBrends();
