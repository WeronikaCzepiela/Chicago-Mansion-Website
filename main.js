const menuBtn = document.querySelector('.menu');
const Home = document.querySelector('#home');
const About = document.querySelector('#about');
const Contact = document.querySelector('#contact');
const MenuItems=document.querySelectorAll(".top p");
const MiddleItems = document.querySelectorAll(".middle");
const MiddleHome = document.querySelector('.middle-home');
const MiddleAbout = document.querySelector('.middle-about');
const MiddleContact = document.querySelector('.middle-contact');
const MenuItemMobile = document.querySelector('.menu-items-hidden');
const MenuItemsMobile = document.querySelectorAll('.menu-items-hidden p');
const Chicago = document.querySelector("h2");
const homeMobile = document.querySelector('#home-mobile');
const aboutMobile = document.querySelector('#about-mobile');
const contactMobile = document.querySelector('#contact-mobile');
let menuOpen = false;

const hideAllSectionAndUndelrine = () => {
    MiddleItems.forEach((item) =>{
        item.classList.add('hidden');
    })
    MenuItems.forEach((item) =>{
        item.classList.remove('underline');
      })
}

const handleOnMenuItemClick = (middleSection, menuItem) => {
    hideAllSectionAndUndelrine();
    middleSection.classList.remove('hidden');
    menuItem.classList.add('underline');
}

const hideAllSectionAndUndelrineMobile = () => {
    MiddleItems.forEach((item) =>{
        item.classList.add('hidden');
    })
    MenuItemsMobile.forEach((item) =>{
        item.classList.remove('underline');
      })
}

const handleOnMenuItemClickMobile = (middleSection, menuItem) => {
    hideAllSectionAndUndelrineMobile();
    middleSection.classList.remove('hidden');
    menuItem.classList.add('underline');
}

menuBtn.addEventListener('click',() => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
        MenuItemMobile.classList.remove('menu-items-hidden')
        Chicago.classList.add('chicago-hidden')
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        MenuItemMobile.classList.add('menu-items-hidden')
        Chicago.classList.remove('chicago-hidden')
    }
});

Home.addEventListener('click',() => handleOnMenuItemClick(MiddleHome, Home));

About.addEventListener('click',() => handleOnMenuItemClick(MiddleAbout, About));

Contact.addEventListener('click',() => handleOnMenuItemClick(MiddleContact, Contact));

homeMobile.addEventListener('click',() => handleOnMenuItemClickMobile(MiddleHome, homeMobile));

aboutMobile.addEventListener('click',() => handleOnMenuItemClickMobile(MiddleAbout, aboutMobile));

contactMobile.addEventListener('click',() => handleOnMenuItemClickMobile(MiddleContact, contactMobile));
