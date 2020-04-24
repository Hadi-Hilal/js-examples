/*global console, alert function*/

var myAco = document.getElementsByClassName("acoordion"),
    i;

for (i=0; i < myAco.length; i++) {
    myAco[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var  dsc =this.nextElementSibling;
        if (dsc.style.maxHeight){
            dsc.style.maxHeight = null;
        }else {
            dsc.style.maxHeight = dsc.scrollHeight + "px";
        }
    });
}

