
const opene = document.getElementById('donate__button');
const popupdonat = document.getElementById("popup-donat");
const popupclose = document.getElementById("popup__close");
const nextbtn = document.getElementById("button__popup-next");
const popupcard = document.getElementById("popup-card");
const popupclosecard = document.getElementById("popup__close-card");

function openen(){
  popupdonat.classList.remove('popup-open');
}

function closede(){
  popupdonat.classList.add('popup-open');
  popupcard.classList.add('popup-card-open');
}

opene.addEventListener('click', openen);

popupclose.addEventListener('click', closede);


popupdonat.addEventListener("click", function (e) {
  if (!e.target.closest('.popup__container')) {
    closede(e.target.closest('.popup-donat'));    // от кликнутого элемента ищет class='popup-donat' в родителях если не находит то срабатывает
  }
})

function opennext(){
  popupcard.classList.remove('popup-card-open');
  popupdonat.classList.add('popup-open');
}

nextbtn.addEventListener('click', opennext);

popupclosecard.addEventListener('click', closede);

popupcard.addEventListener("click", function (e) {
  if (!e.target.closest('.popup-card__block')) {
    closede(e.target.closest('.popup-card'));    // от кликнутого элемента ищет class='popup-donat' в родителях если не находит то срабатывает
  }
})