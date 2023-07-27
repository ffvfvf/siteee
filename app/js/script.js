const loadder = document.getElementById("preloadder");

window.addEventListener("load",()=>{
    loadder.style.display = "none";
});


window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})


const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('primary-navbar'); 

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'primary-navbar' ){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    };
};

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
})



const acc = document.getElementsByClassName('accordian_item');

for(i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle('active');
    });
};  