const openBtn=document.querySelector(".open-btn")
const mobileMenu=document.querySelector(".mobile-menu")
openBtn.addEventListener("click",()=>{
mobileMenu.classList.toggle("translateY")
})