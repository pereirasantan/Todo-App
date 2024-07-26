const corTheme = document.querySelector("#cor")//sol
const divs = [...document.querySelectorAll(".divs")]//area de digita;ao
const btns  = [...document.querySelectorAll(".btns")]
const createApp=document.querySelector(".app")//aplica;ao
const checks = document.querySelector(".check-light")//marcador
const itemsLenth = document.querySelector("#items_length")
const inputText=document.querySelector("#text")//input
const campodeTarefas = document.querySelector("#tarefas")//caixa(tarefas)
const add = document.querySelector("#add")//button

var cont=1
var clickAdd = 0
const geradorDeTarefas=()=>{
    add.addEventListener('click',()=>{
        if(!(inputText.value == "")){
            let elemento = document.createElement("i")
            elemento.innerHTML = inputText.value
            campodeTarefas.appendChild(elemento)
            inputText.value = ""
            var close = document.createElement("img")
            close.setAttribute("src","./src/images/icon-cross.svg")
            close.setAttribute("class","cross")
            elemento.appendChild(close) 
            ++clickAdd
            itemsLenth.innerHTML = clickAdd
        }
    })
}
geradorDeTarefas()

//muda o tema dark para light
function theme(){
    createApp.style.background="url(./src/images/bg-desktop-dark.jpg)"
    corTheme.addEventListener("click",()=>{
        ++cont
        if(cont%2==0){
            document.querySelector("body").classList.add("tema")
            corTheme.setAttribute("src","./src/images/icon-moon.svg")
            createApp.style.background="url(./src/images/bg-desktop-light.jpg)"
            inputText.style.color="black"
            campodeTarefas.style.boxShadow = "0px 9px 7px #e7e7e7"
            divs.map((e)=>{
                e.style.background="white"
                e.classList.add("theme")
            })
            btns.map((e)=>{
                e.style.color="black"
            })
        }else{
            document.querySelector("body").classList.remove("tema")
            corTheme.setAttribute("src","./src/images/icon-sun.svg")
            createApp.style.background="url(./src/images/bg-desktop-dark.jpg)"
            inputText.style.color="#fff"
            campodeTarefas.style.boxShadow = "0px 9px 7px rgb(5, 3, 24)"
            divs.map((e)=>{
                e.style.background="rgb(8, 11, 41)"
                e.classList.remove("theme")
            })
            btns.map((e)=>{
                e.style.color="white"
            })
        }
    })
}
theme()
