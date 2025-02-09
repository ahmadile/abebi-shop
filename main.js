// import './style.css'

import './src/style.css'

const showMenu = (toggleId,navId)=>{
    const toggle = document.querySelector(toggleId)
    const nav = document.querySelector(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('#nav-toggle','#nav-menu')

const navLink=document.querySelectorAll('ul .mb-8 a')
const navMenu = document.querySelector('#nav-menu')
function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll',scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
       const sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('#nav-menu a[href*='+sectionId+']').classList.add('active')
            
        }else{
            document.querySelector('#nav-menu a[href*='+sectionId+']').classList.remove('active')

        }
    })
}
window.onscroll=()=>{
    const nav = document.getElementById('header')
    
    if(scrollY>=200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}