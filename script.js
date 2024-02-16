let nav=document.querySelector('nav');

window.addEventListener('Scroll',()=>{
    nav.classList.toggle('nawinScroll',window,scrollY>0)
})