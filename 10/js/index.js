

function buttonClick() {
    this.style.border = 'solid 6px rgb(241, 238, 27)';
    this.style.fontSize = '60px';
    this.style.boxShadow = '0 0 10px 0 rgba(255,255,0,0.6), 0 0 6px 0 rgba(255,255,0,0.8), 0 0 10px 0 rgba(255,255,0,0.6)';
    const myzyka = new Audio('music').play();
}

function musicClick() {
    
    console.log(myzyka);
}



const eleme = document.getElementById('music');


const button = document.querySelectorAll('.fon');
button.forEach(element => {
    element.addEventListener('click', buttonClick);
    
});



