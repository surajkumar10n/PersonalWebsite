let MenuBtn=document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark') 
})
window.onscroll=()=>{
    MenuBtn.classList.remove('fa-xmark')
    document.querySelector('body').classList.remove('mobile-nav-active');
}


