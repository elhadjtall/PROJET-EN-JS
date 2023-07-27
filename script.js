// Les variables dont on ad besoin 
var sp, btn,_start, btn_stop, t, ms, s, mn, h;

// fonction pour initialiser les varibal quand la page se charge 
window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s=0, mn=0, h=0;
}
// mettre en place le commpteur 
function update_chrono() {
    ms+=1;
    if(ms == 10) {
        ms = 1;
        s+=1
    }
    if (s==60) {
        s =0;
        mn+=1
    }
}