let mobile = window.matchMedia("(min-width: 768px)");
mobile.addListener(addElem);
let desktop = window.matchMedia("(min-width: 1015px)");
desktop.addListener(hideElem);
let bigResolution = window.matchMedia("(min-width: 1265px)");
bigResolution.addListener(hideElem);

if (mobile.matches){
    addElem();
}

function addElem(){
    let swiperSlide = document.querySelectorAll('.swiper-slide');
    let swiperWriper = document.querySelector(".swiper-wrapper");
    if (mobile.matches){
        swiperWriper.className = 'brends brends__sizes';
        for (let i = 0; i < swiperSlide.length; i++) {
            swiperSlide[i].removeAttribute('style')
            swiperSlide[i].className = "brends__item";
        }
        hideElem();
    } else {
        location.reload();
    }
}

let showMore = document.querySelector('.show-more');
showMore.addEventListener("click", showBrends)

function showBrends(item){
    let brendsItem = document.querySelectorAll(".brends__item");
    let showMoreText = document.querySelector(".show-more__text");
    let showMoreIcon = document.querySelector(".show-more__icon")
    if (document.body.clientWidth >= 768 && document.body.clientWidth <= 1015){
        item = 6;
    } else if (document.body.clientWidth >= 1016 && document.body.clientWidth <= 1264){
        item = 8;
    } else {
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

function hideElem(numb) {
    let brendsItem = document.querySelectorAll(".brends__item");
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

