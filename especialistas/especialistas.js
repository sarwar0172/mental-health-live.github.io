// =========nav bar=====
const navbar = document.querySelector('.navbar')
const threeline= document.querySelector('.navbar-toggler')
const navbarIcon=document.querySelector('.nav_fontAwosome')
threeline.addEventListener('click',()=>{

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
    }
  }

})

// ==========first section============
const es_firstSection = document.querySelector(".es_first_section")
const image_header= document.querySelector(".es_img_frist_section>img")
const  es_background=document.querySelector(".es_img_frist_section")
const es_title= document.querySelector(".es_font1")
const e_name= document.querySelector(".es_person_name>font")
const es_img = new IntersectionObserver((enteries, observer) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      e_name.innerHTML="Aline Nunes"
      
        image_header.setAttribute("src", "./img_2/es_img1.png"); 
        image_header.style.animation="esImg1 2s"  

      
      setTimeout(() =>{
        es_title.innerHTML="Invest in your<span>evolution</span>"
        e_name.innerHTML="Karina Melo"
        image_header.setAttribute("src", "./img_2/es_img2.png"); 
        image_header.style.animation="esImg2 2s"   
      },3000)


   

      setTimeout(() =>{
        es_title.innerHTML="invest in new <span>perspectives</span>"
        e_name.innerHTML="Flavia Lopez"
        image_header.setAttribute("src", "./img_2/es_img3.png"); 
        es_background.style.backgroundColor="rgb(254, 210, 35)"
        image_header.style.animation="esImg3 2s"   
      },6000)
 
         setTimeout(() =>{
        es_title.innerHTML="Invest in your <span>apprenticeship</span>"
        e_name.innerHTML="Pedro Assisi"
        image_header.setAttribute("src", "./img_2/es_img4.png");
        image_header.style.animation="esImg4 2s"   
      },9000)

    } 

  })
})
es_img.observe(es_firstSection)



// second section


 const btn1= document.querySelector(".btn1")
 const btn2= document.querySelector(".btn2")
 const btn3= document.querySelector(".btn3")
 const btn4= document.querySelector(".btn4")
const imgbox=document.querySelector(".fith_section_img")
function submit1(){
  console.log("robin")
    setTimeout(() => {
        imgbox.innerHTML=`<img src="./img_2/es_section2_img1.png"alt="img">`
        btn1.style.animation="SecondSectionackground 2s" 
        btn1.style.animationFillMode="forwards";

        btn2.style.animation="" 
        btn3.style.animation="" 
        btn4.style.animation="" 
 

        btn1.querySelector(".p").style.display="block"
        btn2.querySelector(".p").style.display="none"
        btn3.querySelector(".p").style.display="none"
        btn4.querySelector(".p").style.display="none"

        btn1.style.color="#fff"
        btn2.style.color="#000"
        btn3.style.color="#000"
        btn4.style.color="#000"
        
    },200)
  
}
function submit2(){
    setTimeout(() => {
        imgbox.innerHTML=`<img src="./img_2/es_section2_img2.png" alt=""/>`
        btn2.style.animation="SecondSectionackground 2s" 
        btn2.style.animationFillMode="forwards";

        btn1.style.animation="" 
        btn3.style.animation="" 
        btn4.style.animation="" 


    btn2.querySelector(".p").style.display="block"
    btn1.querySelector(".p").style.display="none"
    btn3.querySelector(".p").style.display="none"
    btn4.querySelector(".p").style.display="none"

    btn2.style.color="#fff"
    btn1.style.color="#000"
    btn3.style.color="#000"
    btn4.style.color="#000"
  





    },200)

}
function submit3(){
    setTimeout(() => {
        imgbox.innerHTML=`<img src="./img_2/es_section2_img3.png" alt="">`
        btn3.style.animation="SecondSectionackground 2s" 
        btn3.style.animationFillMode="forwards";

        btn2.style.animation="" 
        btn1.style.animation="" 
        btn4.style.animation="" 

        btn3.querySelector(".p").style.display="block"
        btn1.querySelector(".p").style.display="none"
        btn2.querySelector(".p").style.display="none"
        btn4.querySelector(".p").style.display="none"

        btn3.style.color="#fff"
        btn2.style.color="#000"
        btn1.style.color="#000"
        btn4.style.color="#000"
    },200)
}
function submit4(){
  setTimeout(() => {
      imgbox.innerHTML=`<img src="./img_2/es_section2_img4.png" alt="">`
      btn4.style.animation="SecondSectionackground 2s" 
      btn4.style.animationFillMode="forwards";
      btn2.style.animation="" 
      btn3.style.animation="" 
      btn1.style.animation="" 

      btn4.querySelector(".p").style.display="block"
      btn1.querySelector(".p").style.display="none"
      btn3.querySelector(".p").style.display="none"
      btn2.querySelector(".p").style.display="none"

        btn4.style.color="#fff"
        btn2.style.color="#000"
        btn3.style.color="#000"
        btn1.style.color="#000"
  },200)
}

// const section_two_buttons= document.querySelectorAll('.button_2nd')
// section_two_buttons.forEach((element)=>{
//   element.addEventListener("click",()=>{

//     element.querySelector(".p").style.display="block"
//     element.style.animation="SecondSectionackground 2s"
//     element.style.color="#fff"
// })
// element.addEventListener('mouseleave',()=>{
//   element.querySelector(".p").style.display="none"
//   element.style.animation=""
//   element.style.color="#000"


// })

// })

//  const btn1= document.querySelector(".btn1")
//  const btn2= document.querySelector(".btn2")
//  const btn3= document.querySelector(".btn3")
//  const btn4= document.querySelector(".btn4")

  const thirdsection = document.querySelector(".fifth_section")
const thired = new IntersectionObserver((enteries, observer) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {

      setTimeout(() => {
        btn1.click()
  
       },1000)
  
       setTimeout(() => {
        btn2.click()
  
       },3000)
  
       setTimeout(() => {
        btn3.click()
      
       },6000)
       setTimeout(() => {
        btn4.click()
    
       },8000)

    }
  

  })
})
thired.observe(thirdsection)



/* ==========================
    section 3
 ============================*/

 const s_three_right_box1= document.querySelector(".es_small_right_img1")
 const s_three_right_box2= document.querySelector(".es_small_right_img2")
 const s_three_right_box3= document.querySelector(".es_small_right_img3")
 const s_three_right_box4= document.querySelector(".es_small_right_img4")
const right_div3= document.querySelector(".right_div3")
 s_three_right_box1.addEventListener("click",(e)=>{
  right_div3.style.display="block"
  s_three_right_box1.style.backgroundColor="rgb(223, 60, 207)"
  s_three_right_box2.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box3.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box4.style.backgroundColor="rgb(103, 50, 209)"


 })
 s_three_right_box2.addEventListener("click",(e)=>{
  right_div3.style.display="none"
  s_three_right_box2.style.backgroundColor="rgb(223, 60, 207)"
  s_three_right_box1.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box3.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box4.style.backgroundColor="rgb(103, 50, 209)"


 }) 
 right_div3.style.display="none"
 s_three_right_box3.addEventListener("click",(e)=>{
  s_three_right_box3.style.backgroundColor="rgb(223, 60, 207)"
  s_three_right_box2.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box1.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box4.style.backgroundColor="rgb(103, 50, 209)"


 })
 right_div3.style.display="none"
  s_three_right_box4.addEventListener("click",(e)=>{
  s_three_right_box4.style.backgroundColor="rgb(223, 60, 207)"
  s_three_right_box2.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box3.style.backgroundColor="rgb(103, 50, 209)"
  s_three_right_box1.style.backgroundColor="rgb(103, 50, 209)"


 })

/*====================
section 6
=====================*/

var element=document.querySelector('.circle1')
var element2=document.querySelector('.circle2')
var element3=document.querySelector('.circle3');
var element4=document.querySelector('.circle4')
window.addEventListener('resize', function(event){
 console.log(window.innerWidth)
  if(window.innerWidth<=750){
   console.log("activate")
  element.setAttribute("cx", "50");
  element.setAttribute("cy", "50");
  element.setAttribute("r", "40");


  element2.setAttribute("cx", "50");
  element2.setAttribute("cy", "50");
  element2.setAttribute("r", "40");

  element3.setAttribute("cx", "50");
  element3.setAttribute("cy", "50");
  element3.setAttribute("r", "40");

  element4.setAttribute("cx", "50");
  element4.setAttribute("cy", "50");
  element4.setAttribute("r", "40");
 }else{
  element.setAttribute("cx", "80");
  element.setAttribute("cy", "80");
  element.setAttribute("r", "70");

  element2.setAttribute("cx", "80");
  element2.setAttribute("cy", "80");
  element2.setAttribute("r", "70");

  element3.setAttribute("cx", "80");
  element3.setAttribute("cy", "80");
  element3.setAttribute("r", "70");

  element4.setAttribute("cx", "80");
  element4.setAttribute("cy", "80");
  element4.setAttribute("r", "70");
 }
  

});



const employbox = document.querySelector(".main__4th-section")
const emplyee1 = document.querySelector(".circle1")
const emplyee2 = document.querySelector(".circle2")
const emplyee3 = document.querySelector(".circle3")
const emplyee4 = document.querySelector(".circle4")

var des_em1 = `Trabalhar com o Zenklub tem sido uma experiência fenomenal.
<br><br>
Tudo o que a gente faz junto é porque os propósitos estão conectados e 
é muito bom contar com um parceiro que não só executa, mas consegue 
trazer inputs para termos conversas de alto nível que estão a influenciar
positivamente a cultura da Ambev. Temos oportunidade de fazer desta parceria algo muito maior.
<br><br>
<span class="e-1a">Raphael Cardoso da Silva</span>
<br>
<span class="e-1b">Psychologist - CRP: 05/38499</span>
<br>
<span><img src="./img/e1.svg" alt=""></span>
`


var des_em2=`Joining Zenklub allowed me to work from home, and in 6 months, I managed to have the client portfolio I have today. I joined the premium plan because of the 20% commission exemption, disclosure of my name on the platform, and consequently, adhesion to more customers.

The premium plan brought a 20% commission exemption, disclosure of my name on the platform, and consequently, adhesion to more customers..<br><br>
<span class="e-2a">Suze Frizzi</span><br>
<span class="e-2b">Diretor de Operações de Pessoas</span><br>


`



var des_em3=`I have been a psychologist at Zenklub for 04 years and I can say with certainty that when I joined the platform in 2017, it generated a watershed in my life. Leaving a corporate environment and migrating to fully online clinical care was something extremely new in my professional context at the time and even so I decided to have this new experience.

The psychologist of 2017 no longer exists, today I see a confident, communicative professional, open to the new, a speaker who manages to capture the attention of her audience and, on top of that, participates in video recordings and interviews! In 2020 I gave 30 lectures, several interviews and videos, and almost 2000 hours of service.<br><br>
<span class="e-3a">Aline Felix</span><br>
<span class="e-3b">Psychologist - CRP: 07/23746</span><br>

`

var des_em4=`'ve been on the platform for about 1 year and my experience has always been aggregating and with many achievements, both with the extremely partner team and in the insertion of new customers. In 2021 there were some changes and I started to integrate the plan for premium professionals, in view of a dynamic in the appointments that gradually improved and provided better views.

In the blog Word of Expert I wrote my article and I read others available, which enriches our content of approaches and sheds the light of broad knowledge. I like the platform for its systematization and the possibility of serving patients with due security and an easy-to-handle schedule and, being premium, I was able to have tips that added even more the ability to grow together with Zenklub..<br><br>
<span class="e-4a">Jose Paulo Menezes de Souza</span><br>
<span class="e-4b">Clinical Psychoanalyst</span><br>


`


const description = document.querySelector(".description__employe")
console.log(employbox)
const animation = new IntersectionObserver((enteries, observer) => {
 enteries.forEach((entry) => {
   if (entry.isIntersecting) {
   setTimeout(()=>{
       emplyee1.style.animation = "anim 5s linear forwards"
       description.innerHTML=des_em1
       clearTimeout()
     },100)
   
    setTimeout(() => {
     emplyee2.style.animation = "anim 5s linear forwards"
       description.innerHTML =des_em2
       clearTimeout()
     }, 5000)
     setTimeout(() => {
     emplyee3.style.animation = "anim 5s linear forwards"
       description.innerHTML =des_em3
       clearTimeout()
     }, 10000)

   setTimeout(() => {
     emplyee4.style.animation = "anim 5s linear forwards"
     description.innerHTML =des_em4

       clearTimeout()
     }, 15000)

     setTimeout(() => {
       emplyee1.style.animation = null;
     },5000)

      setTimeout(() => {
       emplyee2.style.animation = null;
     },10000)

     setTimeout(() => {
       emplyee3.style.animation = null;
     },15000)

     setTimeout(() => {
       emplyee4.style.animation = null;
     },20000)


   }
   
 })
})
animation.observe(employbox)

// sectuib seven
const buttons7=document.querySelectorAll('.button7')

buttons7.forEach(element => {
    element.addEventListener('click',()=>{
       element.style.animation="background-color7 2s"
       element.style.animationFillMode = "forwards"

     var img7=element.querySelector(".img7")
     var p7=element.querySelector(".p7")
     
       img7.setAttribute('src','./img_2/section7th_img-.svg')
       img7.style.backgroundColor="rgb(118, 85, 233)"
       p7.style.display="block"
       p7.style.color="#fff"
       element.style.color="#fff"
      
    })

          

    element.addEventListener('mouseleave',()=>{
      element.style.animation=""
      element.style.animationFillMode = ""

      element.style.color="black"

      var img7=element.querySelector(".img7")
     var p7=element.querySelector(".p7")

         img7.setAttribute('src','./img_2/section7_img+.svg')
         img7.style.backgroundColor= "#fff"
         p7.style.display="none"

    })
});
