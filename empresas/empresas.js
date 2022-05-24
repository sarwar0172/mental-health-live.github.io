// nav section 
const navbar = document.querySelector('.navbar')
const threeline= document.querySelector('.navbar-toggler')
const navbarIcon=document.querySelector('.nav_fontAwosome')
const navbarColor=document.querySelector('.navbar-light .navbar-toggler-icon')
threeline.addEventListener('click',()=>{

  navbar.classList.toggle("navstyleonclick")
  navbarIcon.style.display="block"
  toggle()
})

function toggle(){
  if(navbar.classList.contains("navstyleonclick")){
    navbarColor.style.backgroundImage=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, .95%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
  }else{
    navbarColor.style.backgroundImage=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2856, 21, 127, .95%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
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
// ==============================================
const card1= document.querySelector('.card1')
const card2= document.querySelector('.card2')
const card3= document.querySelector('.card3')
const card4= document.querySelector('.card4')
const card5= document.querySelector('.card5')
const card6= document.querySelector('.card6')
const card7= document.querySelector('.card7')


const secondSection = document.querySelector(".cards")
const Sboxs = new IntersectionObserver((enteries, observer) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
        
        card1.style.animation="right-animate1 3s"
        card2.style.animation="right-animate2 3s"
        card3.style.animation="right-animate3 3s"
        card4.style.animation="right-animate4 3s"
        card5.style.animation="right-animate5 3s"
        card6.style.animation="right-animate6 3s"
        card7.style.animation="right-animate7 3s"

    }

  })
})
Sboxs.observe(secondSection)


// third section 1st
const imgbox=document.querySelector(".fith_section_img")
function submit1(){
    setTimeout(() => {
        imgbox.innerHTML=`<img src="./img/em_img1.png"alt="img">`

    },200)
  
}
function submit2(){
    setTimeout(() => {
        imgbox.innerHTML=`<img src="./img/em_img2.png" alt=""/>`

    },200)

}
function submit3(){
    setTimeout(() => {
        imgbox.innerHTML=`<img src="./img/em_img3.png" alt="">`

    },200)
}
const button1=document.querySelector(".button1")
const button2=document.querySelector(".button2")
const button3=document.querySelector(".button3")

var p1=document.querySelector(".p1")
var p2=document.querySelector(".p2")
var p3=document.querySelector(".p3")

var icon1=document.querySelector(".img1")
var icon2=document.querySelector(".img2")
var icon3=document.querySelector(".img3")

button1.addEventListener("click",(e) => {

    setTimeout(() => {
     icon1.style.backgroundColor="rgb(244, 72, 227)"
     icon2.style.backgroundColor="#fff"
     icon3.style.backgroundColor="#fff"


     p1.style.display="block"
     p2.style.display="none"
     p3.style.display="none"
   
    
    
     button2.style.backgroundColor="rgb(247, 249, 250)"
     button3.style.backgroundColor="rgb(247, 249, 250)"
    
    
     button2.style.color="black"
     button3.style.color="black"
  
     button1.style.backgroundColor="rgb(103, 50, 209)"
     button1.style.color="#fff"
    },100)

 
 })

 button2.addEventListener("click",(e) => {
    setTimeout(() => {
     icon1.style.backgroundColor="fff"
     icon2.style.backgroundColor="rgb(244, 72, 227)"
     icon3.style.backgroundColor="#fff"

      p2.style.display="block"
      p1.style.display="none"
      p3.style.display="none"
   
    
    
      button2.style.backgroundColor="rgb(103, 50, 209)"
      button2.style.color="#fff"
    
    
      button1.style.backgroundColor="rgb(247, 249, 250)"
      button3.style.backgroundColor="rgb(247, 249, 250)"
     
     
    
    
     button1.style.color="black"
     button3.style.color="black"

    },100)
    
   })

   button3.addEventListener("click",(e) => {
    setTimeout(() => {
        icon1.style.backgroundColor="fff"
        icon2.style.backgroundColor="fff"
        icon3.style.backgroundColor="rgb(244, 72, 227)"


     p3.style.display="block"
     p1.style.display="none"
     p2.style.display="none"
 
   
   
     button3.style.backgroundColor="rgb(103, 50, 209)"
     button3.style.color="#fff"
   
   
     button1.style.backgroundColor="rgb(247, 249, 250)"
     button2.style.backgroundColor="rgb(247, 249, 250)"
   
    
   
   
    button1.style.color="black"
    button2.style.color="black"

    },100)
   
  })
 
  const thirdsection = document.querySelector(".fifth_section")
const thired = new IntersectionObserver((enteries, observer) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(()=>{
       button1.click()
      },3000)


      setTimeout(()=>{
        submit2()
       button2.click()
      },10000)
       
   
      setTimeout(()=>{
       submit3()
      button3.click()
     },20000)
   
    }

  })
})
thired.observe(thirdsection)




// third section second 

const imgbox2=document.querySelector(".fith_section_img2")
function submit1_second(){
    setTimeout(() => {
        imgbox2.innerHTML=`<img src="./img/e2_img1.png"alt="img">`

    },200)
  
}
function submit2_second(){
    setTimeout(() => {
        imgbox2.innerHTML=`<img src="./img/e2_img2.png" alt=""/>`

    },200)

}
function submit3_second(){
    setTimeout(() => {
        imgbox2.innerHTML=`<img src="./img/e3_img3.png" alt="">`

    },200)
}
const button12=document.querySelector(".button12")
const button22=document.querySelector(".button22")
const button32=document.querySelector(".button32")

var p12=document.querySelector(".p12")
var p22=document.querySelector(".p22")
var p32=document.querySelector(".p32")

var icon12=document.querySelector(".img12")
var icon22=document.querySelector(".img22")
var icon32=document.querySelector(".img32")

button12.addEventListener("click",(e) => {

    setTimeout(() => {
     icon12.style.backgroundColor="rgb(244, 72, 227)"
     icon22.style.backgroundColor="#fff"
     icon32.style.backgroundColor="#fff"


     p12.style.display="block"
     p22.style.display="none"
     p32.style.display="none"
   
    
    
     button22.style.backgroundColor="rgb(247, 249, 250)"
     button32.style.backgroundColor="rgb(247, 249, 250)"
    
    
     button22.style.color="black"
     button32.style.color="black"
  
     button12.style.backgroundColor="rgb(103, 50, 209)"
     button12.style.color="#fff"
    },100)

 
 })

 button22.addEventListener("click",(e) => {
    setTimeout(() => {
     icon12.style.backgroundColor="fff"
     icon22.style.backgroundColor="rgb(244, 72, 227)"
     icon32.style.backgroundColor="#fff"

      p22.style.display="block"
      p12.style.display="none"
      p32.style.display="none"
   
    
    
      button22.style.backgroundColor="rgb(103, 50, 209)"
      button22.style.color="#fff"
    
    
      button12.style.backgroundColor="rgb(247, 249, 250)"
      button32.style.backgroundColor="rgb(247, 249, 250)"
     
     
    
    
     button12.style.color="black"
     button32.style.color="black"

    },100)
    
   })

   button32.addEventListener("click",(e) => {
    setTimeout(() => {
        icon12.style.backgroundColor="fff"
        icon22.style.backgroundColor="fff"
        icon32.style.backgroundColor="rgb(244, 72, 227)"


     p32.style.display="block"
     p12.style.display="none"
     p22.style.display="none"
 


     button32.style.backgroundColor="rgb(103, 50, 209)"
     button32.style.color="#fff"
   
   
     button12.style.backgroundColor="rgb(247, 249, 250)"
     button22.style.backgroundColor="rgb(247, 249, 250)"
   
    
   
   
    button12.style.color="black"
    button22.style.color="black"

    },100)
   
  })
 
  const thirdsection2 = document.querySelector(".fifth_section")
const thired2 = new IntersectionObserver((enteries, observer) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(()=>{
       button12.click()
      },3000)


      setTimeout(()=>{
        submit2()
       button22.click()
      },10000)
       
   
      setTimeout(()=>{
       submit3()
      button32.click()
     },20000)
   
    }

  })
})
thired2.observe(thirdsection2)


// 5th section
// range===============================
class Slider {
  constructor (rangeElement, valueElement, options) {
    this.rangeElement = rangeElement
    this.valueElement = valueElement
    this.options = options

    // Attach a listener to "change" event
    this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
  }

  // Initialize the slider
  init() {
    this.rangeElement.setAttribute('min', options.min)
    this.rangeElement.setAttribute('max', options.max)
    this.rangeElement.value = options.cur

    this.updateSlider()
  }

  // Format the money
  asMoney(value) {
    return '$' + parseFloat(value)
      .toLocaleString('en-US', { maximumFractionDigits: 2 })
  }

  generateBackground(rangeElement) {   
    if (this.rangeElement.value === this.options.min) {
      return
    }

    let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
    return 'background: linear-gradient(to right, rgb(244, 72, 227), rgb(244, 72, 227) ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
  }

  updateSlider (newValue) {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
    this.rangeElement.style = this.generateBackground(this.rangeElement.value)
  }
}

let rangeElement = document.querySelector('.range [type="range"]')
let valueElement = document.querySelector('.range .range__value span') 

let options = {
  min: 2000,
  max: 75000,
  cur: 37500
}

if (rangeElement) {
  let slider = new Slider(rangeElement, valueElement, options)

  slider.init()
}



// minus and plus bar=====================
const output=document.querySelector('.output')
const number_company=document.querySelector('.brl-number');
let sum=100;
function minus(){


 sum=sum-50
 if(sum<0){
   sum=0
 }
 output.textContent=sum
 var calculated=sum*9.4
 number_company.textContent=calculated
}

function plus(){
  sum=sum+50

 output.textContent=sum
 var calculated=sum*9.4
number_company.textContent=calculated

}




const silder= document.querySelector('.slidebar')
const roi= document.querySelector('.roi')
silder.addEventListener('mousemove',()=>{
const progress_bar=document.querySelector('.progressbar_value').textContent
var arr=progress_bar.split('')
arr.shift()
var string=arr.join('').replace(/,/g, '')
var newnumber= parseInt(string)

var calculated2=Math.round(newnumber*0.0004)
roi.textContent=calculated2
});

// 6th section
 var element=document.querySelector('.circle1')
 var element2=document.querySelector('.circle2')
 var element3=document.querySelector('.circle3');
 var element4=document.querySelector('.circle4')
window.addEventListener('resize', function(event){
   if(window.innerWidth<=750){
  
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
<span class="e-1a">Mariana Holanda</span>
<br>
<span class="e-1b">Diretora de Saúde Mental, Diversidade e Inclusão</span>
<br>
 <span><img src="./img/e1.svg" alt=""></span>
`


 var des_em2=`Em um momento de crescimento e necessidade de replicar a cultura em escala, o Zenklub é uma prova real de como vivemos nossos valores.<br><br>

Os tripulantes utilizam para seu autodesenvolvimento e crescimento, enquanto os líderes possuem esta 
abordagem para poder oferecer apoio às suas equipes. Então, não há tabu. O cuidado com as pessoas e a
barra alta são aspectos importantes em nossa cultura,<br> e o Zenklub nos ajuda a manter ambos.<br><br>
<span class="e-2a">Daniel Kobata</span><br>
<span class="e-2b">Diretor de Operações de Pessoas</span><br>
<span><img src="./img/e2.svg" alt=""></span>
<button class="btn_employ">VEJA O CASE</button>
 `



var des_em3=`Resolvemos implementar a solução do Zenklub como prevenção a absenteísmo e cuidado com o colaborador.<br><br>
Nós entendemos que por conta da pandemia e do cenário atual, ter esse benefício dentro da empresa seria importante como forma de prevenção e cuidado. Quando a gente começou a olhar pra questão da saúde emocional e quando estendemos o benefício a outras áreas <br>, chegamos a ter aumento de 400% de adesões à plataforma.<br><br>
<span class="e-3a">Aline Felix</span><br>
<span class="e-3b">Culture, Employee Experience and Employer Branding Manager</span><br>
<span><img src="./img/e3.svg" alt=""></span>
`

var des_em4=`Eu acredito que há uma fronteira entre questões profissionais e pessoais.<br><br>

É muito bom contar com o Zenklub para os meus colaboradores terem acesso a especialistas de forma simples e sem precisarem falar comigo. O valor percebido do benefício para eles é muito grande.<br><br>
<span class="e-4a">Frédéric Monnier</span><br>
<span class="e-4b">Head de Customer Success</span><br>
<span><img src="./img/e4.svg" alt=""></span>
<button class="btn_employ">VEJA O CASE</button>

`


const description = document.querySelector(".description__employe")

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
