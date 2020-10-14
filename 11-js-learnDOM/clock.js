const root = document.getElementById('root');
setInterval(printTime, 1000);

function printTime() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const h1 = document.createElement('h1');
    const time = document.createTextNode(`${(h < 10)? '0'+ h : h} : ${(m < 10)? '0'+ m : m}:${(s < 10)? '0'+ s : s}`);
    h1.append(time);
    if(root.firstElementChild){
        root.replaceChild(h1, root.firstElementChild);
    }else{
        root.append(h1);
    }
}
