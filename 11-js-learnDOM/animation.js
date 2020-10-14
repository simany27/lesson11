const box = document.getElementById('box');
const innerW= box.offsetWidth;
const outerW = document.getElementById('container').offsetWidth;

let pos = 1;
let flag = 1;
const t = setInterval(move,10);

function move(){
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if(pos >= (outerW-innerW+1)){
        flag = -1;
    }
    if(pos <= 0){
        flag = 1;
    }
    flag === 1 ? pos++ : pos--;
}
