
// nav
const navbar= document.querySelector('.navbar');
const threeline= document.querySelector('.navbar-toggler')
const body=document.querySelector('body')
const navbarIcon= document.querySelector('.nav_fontAwosome')
threeline.addEventListener('click',()=>{
    
    body.classList.toggle('scrollbar_hidden')
 
     navbar.classList.toggle("navstyleonclick")
     navbarIcon.style.display="block"
     
     toggle()
   })
 
   function toggle(){
    if(navbar.classList.contains("navstyleonclick")){
    navbarIcon.style.display="block"
    }else{
      navbarIcon.style.display="none";
   

    }
  }
  window.addEventListener("resize",()=>{
    
    if (window.innerWidth>1024) {
      if(navbar.classList.contains("navstyleonclick")){
        threeline.click()
        body.classList.remove("scrollbar_hidden")
      }
    }
  
  })


// section3
const section3=document.querySelector(".section3")
const btn=document.querySelector(".back_to_top_btn")
window.onscroll = () => {
    if (window.scrollY > 500) {
        section3.classList.add('section3_extra')
        btn.style.display = 'block'
    }else{
        section3.classList.remove('section3_extra')
        btn.style.display = 'none'

    }
}