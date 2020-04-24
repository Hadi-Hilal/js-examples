/**
 * Created by hadi on 9/9/2018.
 */
/* global */

var theImg = document.getElementById("img"),
    modImg = document.getElementById("myImg"),
    theModel = document.getElementById("mod"),
    myCaption = document.getElementById("caption"),
    myClose = document.getElementById("cls");

theImg.onclick = function () {
    theModel.style.display = "block";
    modImg.src = this.src;
    myCaption.innerHTML = this.alt;

}
myClose.onclick = function () {
    theModel.style.display = "none";
}
document.onkeydown = function (ev) {
    if (ev.keyCode== "27"){
        theModel.style.display = "none";
    }
}