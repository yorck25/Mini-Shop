/*---------Passwort Sichtbarkeit--------*/

function passwortSichtbarkeitUmschalten(eingabefeldId) {
    const passwortFeld = document.getElementById(eingabefeldId);
    if(passwortFeld.type === "password") {
        passwortFeld.type = "text";
    } else {
        passwortFeld.type = "password";
    }
}

/*---------Bestellseite--------*/

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}


function helm1(){
    document.getElementById("main_img").src="./Bilder/Helme/Russel/Russel 1.jpg";}

function helm2() {
    document.getElementById("main_img").src ="./Bilder/Helme/Russel/Russel 2.jpg";}

function helm3() {
    document.getElementById("main_img").src ="./Bilder/Helme/Russel/Russel 3.jpg";}

function helm4() {
    document.getElementById("main_img").src ="./Bilder/Helme/Russel/Russel 4.jpg";}


window.addEventListener('resize', slideImage);
