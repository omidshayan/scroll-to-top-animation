const goToTop = document.querySelector('.goto-top')

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 300){
        goToTop.classList.add('active')
    }
    else{
        goToTop.classList.remove('active')
    }
})