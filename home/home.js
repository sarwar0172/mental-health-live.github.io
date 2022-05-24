

const navbar=document.querySelector('.navbar');
const threeline=document.querySelector('.btn_three_line');
const icons=document.querySelector('.nav_fontAwosome')
const navbarColor=document.querySelector('.navbar-light .navbar-toggler-icon')
threeline.addEventListener('click',()=>{

    navbar.classList.toggle("navstyleonclick")
    icons.style.display="block";

    
    toggle()
  })
function toggle(){
  if(navbar.classList.contains("navstyleonclick")){
    navbarColor.style.backgroundImage=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, .95%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
  }else{
    navbarColor.style.backgroundImage=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2856, 21, 127, .95%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
    icons.style.display="none";
  }
}
 
 


window.addEventListener('resize',()=>{
 
  if(window.innerWidth>1024){
    if(navbar.classList.contains("navstyleonclick")){
      threeline.click()
    }
  }
    
})
// second section============================================================
const coundown = document.querySelector(".number");
const number1 = document.getElementById("n1");
const number2 = document.getElementById('n2')
const number3 = document.getElementById('n3')
const number4 = document.getElementById('n4')
var n01 = 0;
var n02 = 0;
var n03 = 0;
var n04 = 0;
const observer = new IntersectionObserver(function (enteries, observer) {
  enteries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      setInterval(function () {
        if (n01 == 71) {
          clearInterval()
        } else {
          n01++;
          number1.innerHTML = n01;
        }
      }, 70);

      setInterval(() => {
        if (n02 == 84) {
          clearInterval()
        } else {
          n02++;
          number2.innerHTML = n02;

        }
      }, 70)

      setInterval(() => {
        if (n03 == 82) {
          clearInterval()
        } else {
          n03++;
          number3.innerHTML = n03;
        }
      }, 70)

      setInterval(() => {
        if (n04 == 97) {
          clearInterval()
        } else {
          number4.innerHTML = n02;
          n04++;
        }
      }, 70)

    }
  })
});
observer.observe(coundown)

// third section=====================================
window.addEventListener('resize', function(event){
  console.log(window.innerWidth)
 
  if(window.innerWidth<1024 &&window.innerWidth>600){
    console.log("activate1")
   element.setAttribute("cx", "70");
   element.setAttribute("cy", "70");
   element.setAttribute("r", "60");
 
 
   element2.setAttribute("cx", "70");
   element2.setAttribute("cy", "70");
   element2.setAttribute("r", "60");
 
   element3.setAttribute("cx", "70");
   element3.setAttribute("cy", "70");
   element3.setAttribute("r", "60");
 
   element4.setAttribute("cx", "70");
   element4.setAttribute("cy", "70");
   element4.setAttribute("r", "60");
  }
  else if(window.innerWidth<=600){
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




// fifth section========================================
const imgbox=document.querySelector(".fith_section_img")
function submit1(){
 imgbox.innerHTML=`<img src="./img/home-1.png"alt="img">`
  
}
function submit2(){
  imgbox.innerHTML=`<img src="./img/home2.png" alt=""/>`

}
function submit3(){
  imgbox.innerHTML=`<img src="./img/home-3.png" alt="">`
}
function submit4(){
  imgbox.innerHTML=`<img src="./img/home-4.png" alt="">`
}
function submit5(){
  imgbox.innerHTML=`<img src="./img/home-5.png" alt="">`
}

const button1=document.querySelector(".button1")
const button2=document.querySelector(".button2")
const button3=document.querySelector(".button3")
const button4=document.querySelector(".button4")
const button5=document.querySelector(".button5")

var p1=document.querySelector(".p1")
var p2=document.querySelector(".p2")
var p3=document.querySelector(".p3")
var p4=document.querySelector(".p4")
var p5=document.querySelector(".p5")



button1.addEventListener("click",(e) => {

   setTimeout(() => {
     button1.querySelector("img").style.backgroundColor="rgb(244, 72, 227)"
     button2.querySelector("img").style.backgroundColor="#fff"
     button3.querySelector("img").style.backgroundColor="#fff"
     button4.querySelector("img").style.backgroundColor="#fff"
     button5.querySelector("img").style.backgroundColor="#fff"


    p1.style.display="block"
    p2.style.display="none"
    p3.style.display="none"
    p4.style.display="none"
    p5.style.display="none"
   
   
   
    button2.style.backgroundColor="rgb(247, 249, 250)"
    button3.style.backgroundColor="rgb(247, 249, 250)"
    button4.style.backgroundColor="rgb(247, 249, 250)"
    button5.style.backgroundColor="rgb(247, 249, 250)"
   
    button2.style.color="black"
    button3.style.color="black"
    button4.style.color="black"
    button5.style.color="black"
   
   
   
   
   
    button1.style.backgroundColor="rgb(103, 50, 209)"
    button1.style.color="#fff"
   },100)

   


  
 
  

})


button2.addEventListener("click",(e) => {
  setTimeout(() => {

    button2.querySelector("img").style.backgroundColor="rgb(244, 72, 227)"
    button1.querySelector("img").style.backgroundColor="#fff"
    button3.querySelector("img").style.backgroundColor="#fff"
    button4.querySelector("img").style.backgroundColor="#fff"
    button5.querySelector("img").style.backgroundColor="#fff"


    p2.style.display="block"
    p1.style.display="none"
    p3.style.display="none"
    p4.style.display="none"
    p5.style.display="none"
  
  
    button2.style.backgroundColor="rgb(103, 50, 209)"
    button2.style.color="#fff"
  
  
    button1.style.backgroundColor="rgb(247, 249, 250)"
    button3.style.backgroundColor="rgb(247, 249, 250)"
    button4.style.backgroundColor="rgb(247, 249, 250)"
    button5.style.backgroundColor="rgb(247, 249, 250)"
   
  
  
   button1.style.color="black"
   button3.style.color="black"
   button4.style.color="black"
   button5.style.color="black"
  },100)
  
 })

 button3.addEventListener("click",(e) => {
   setTimeout(() => {
    button3.querySelector("img").style.backgroundColor="rgb(244, 72, 227)"
    button2.querySelector("img").style.backgroundColor="#fff"
    button1.querySelector("img").style.backgroundColor="#fff"
    button4.querySelector("img").style.backgroundColor="#fff"
    button5.querySelector("img").style.backgroundColor="#fff"



    p3.style.display="block"
    p1.style.display="none"
    p2.style.display="none"
    p4.style.display="none"
    p5.style.display="none"
  
  
    button3.style.backgroundColor="rgb(103, 50, 209)"
    button3.style.color="#fff"
  
  
    button1.style.backgroundColor="rgb(247, 249, 250)"
    button2.style.backgroundColor="rgb(247, 249, 250)"
    button4.style.backgroundColor="rgb(247, 249, 250)"
    button5.style.backgroundColor="rgb(247, 249, 250)"
   
  
  
   button1.style.color="black"
   button2.style.color="black"
   button4.style.color="black"
   button5.style.color="black"

   },100)
  
 })

 button4.addEventListener("click",(e) => {
   setTimeout(() => {

    button4.querySelector("img").style.backgroundColor="rgb(244, 72, 227)"
    button2.querySelector("img").style.backgroundColor="#fff"
    button3.querySelector("img").style.backgroundColor="#fff"
    button1.querySelector("img").style.backgroundColor="#fff"
    button5.querySelector("img").style.backgroundColor="#fff"

    p4.style.display="block"
    p1.style.display="none"
    p2.style.display="none"
    p3.style.display="none"
    p5.style.display="none"
  
  
    button4.style.backgroundColor="rgb(103, 50, 209)"
    button4.style.color="#fff"
  
  
    button1.style.backgroundColor="rgb(247, 249, 250)"
    button2.style.backgroundColor="rgb(247, 249, 250)"
    button3.style.backgroundColor="rgb(247, 249, 250)"
    button5.style.backgroundColor="rgb(247, 249, 250)"
   
  
  
  button1.style.color="black"
   button2.style.color="black"
   button3.style.color="black"
   button5.style.color="black"
   },100)
  
 })


 button5.addEventListener("click",(e) => {
  setTimeout(() => {
    button5.querySelector("img").style.backgroundColor="rgb(244, 72, 227)"
    button2.querySelector("img").style.backgroundColor="#fff"
    button3.querySelector("img").style.backgroundColor="#fff"
    button4.querySelector("img").style.backgroundColor="#fff"
    button1.querySelector("img").style.backgroundColor="#fff"


    p5.style.display="block"
    p1.style.display="none"
    p2.style.display="none"
    p4.style.display="none"
    p3.style.display="none"
  
  
    button5.style.backgroundColor="rgb(103, 50, 209)"
    button5.style.color="#fff"
  
  
    button1.style.backgroundColor="rgb(247, 249, 250)"
    button2.style.backgroundColor="rgb(247, 249, 250)"
    button4.style.backgroundColor="rgb(247, 249, 250)"
    button3.style.backgroundColor="rgb(247, 249, 250)"
   
  
  
  button1.style.color="black"
   button2.style.color="black"
   button4.style.color="black"
   button3.style.color="black"
  },100)

 })


const fifthsection = document.querySelector(".fifth_section")
const fifth = new IntersectionObserver((enteries, observer) => {
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
   
   
     setTimeout(()=>{
       submit4()
      button4.click()
     },30000)
   
     setTimeout(()=>{
       submit5()
      button5.click()
     },40000)


   
    }

  })
})
fifth.observe(fifthsection)



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

const add= document.querySelector('.add')
const substract=document.querySelector('.substract')
console.log(add)

add.addEventListener('click',()=>{
  var b=document.querySelector('.base_number').textContent
  let num = parseInt(b)
  console.log(num+50)
 
  console.log(robin)
})






var element = document.querySelector(".circle1");
var element2=document.querySelector(".circle2")
var element3=document.querySelector(".circle3")
var element4=document.querySelector(".circle4")


console.log(element)

// employy responsive



// 10th section
var button_card1=document.querySelector('.btn_card1')
var button_card2=document.querySelector('.btn_card2')
var button_card3=document.querySelector('.btn_card3')
var button_card4=document.querySelector('.btn_card4')
var button_card5=document.querySelector('.btn_card5')

var img1=document.querySelector(".card_img1")
var img2=document.querySelector(".card_img2")
var img3=document.querySelector(".card_img3")
var img4=document.querySelector(".card_img4")
var img5=document.querySelector(".card_img5")

 console.log(button_card1)
  button_card1.addEventListener('mouseover',()=>{
      console.log(img1)
      img1.style.transform="scale(1.02)";
    })
    button_card1.addEventListener(("mouseout"),()=>{
      img1.style.transform="scale(1)"
    })

    button_card2.addEventListener('mouseover',()=>{
      console.log(img2)
      img2.style.transform="scale(1.02)";
    })
    button_card2.addEventListener(("mouseout"),()=>{
      img2.style.transform="scale(1)"
    })

    button_card3.addEventListener('mouseover',()=>{
      console.log(img3)
      img3.style.transform="scale(1.02)";
    })
    button_card3.addEventListener("mouseout",()=>{
      img3.style.transform="scale(1)"
    })

    button_card4.addEventListener('mouseover',()=>{
      console.log(img3)
      img4.style.transform="scale(1.02)";
    })
    button_card4.addEventListener("mouseout",()=>{
      img4.style.transform="scale(1)"
    })

    button_card5.addEventListener('mouseover',()=>{
      console.log(img3)
      img5.style.transform="scale(1.02)";
    })
    button_card5.addEventListener("mouseout",()=>{
      img5.style.transform="scale(1)"
    })