/**
 * Created by hadi on 9/9/2018.
 */
/* global */

var theOverl = document.getElementById("ovl"),
    myCls  = document.getElementById("cls"),
    mySpa = document.getElementById("spa");


mySpa.onclick = function open() {
    theOverl.style.transform = "scale(1)";
}
myCls.onclick = function close() {
    theOverl.style.transform = "scale(0)";
}