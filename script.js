//const brendsSlider = document.querySelector('.swiper-container');
const mobile = window.matchMedia("(max-width: 767px)");

let swiper;

mobile.addEventListener('change', destroySlider);

destroySlider();

function destroySlider(){
  if (document.body.clientWidth < 768){
    
    swiper = new Swiper(.swiper-container, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if(brendsSlider.classList.contains('swiper-container-initialized') && document.body.clientWidth >= 768){
    
    swiper.destroy()
  }
}

const showMore = document.querySelector('.show-more')
const brendsWrapper = document.querySelector(".brends__wrapper");
const showMoreText = document.querySelector(".show-more__text");
const showMoreIcon = document.querySelector(".show-more__icon");

showMore.addEventListener('click', showElem);

function showElem(){
  brendsWrapper.classList.toggle('brends__wrapper--height');
    if (showMoreText.textContent == "Показать все") {
        showMoreText.textContent = "Скрыть";
        showMoreIcon.style.transform = "rotate(180deg)";
    } else {
        showMoreText.textContent = "Показать все";
        showMoreIcon.style.transform = "";
    }
}
