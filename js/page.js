'use strict';

const menuBtn = document.querySelector('.menu-btn-container');
const menuContainer = document.querySelector('.menu-container');
const logo = document.querySelector('.logo-link');
const icon = document.querySelector('.hamburger');
const menuListLink = document.querySelectorAll('.menu-list-link');
const palm = document.querySelector('.call-button');
const menuBlock = document.querySelector('.header');
const menuLine = document.querySelectorAll('.line');
const sections = document.querySelectorAll('section');
const baloonSection = document.querySelector('.about-text-block');
const baloon = document.querySelector('.about-svg-img');


window.addEventListener('load', function(){

    icon.addEventListener('click', function () {
        if(this.classList.contains('is-active')){
            this.classList.remove('is-active');
            menuBlock.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            hideItems(hideBlock);
            document.body.style.overflow = "visible";
        } else {
            this.classList.add('is-active');
            menuBlock.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            openMenu(showBlock);
            document.body.style.overflow = "hidden";
        }
        
    })

    window.addEventListener('scroll', function() {
        // scrollPalm();
    })

})

function scrollPalm() {
    let top = window.scrollY;
    let hiro = document.querySelector('.hero-section');
    let offset = hiro.clientHeight;
    if(top > offset) {
        palm.style.fill = "var(--colorBlack)";
        palm.classList.add('black');
        logo.style.opacity = '1';
        menuBlock.style.backgroundColor = "rgba(255, 255, 255, 0)";
        menuLine.forEach(function(item) {
            item.style.backgroundColor = "var(--colorBlack)";
        })
            
    } else {
        palm.style.fill = "#ffffff";
        palm.classList.remove('black');
        logo.style.opacity = '0';
        menuBlock.style.backgroundColor = "rgba(24, 24, 24, 0)"
        menuLine.forEach(function(item) {
            item.style.backgroundColor = "#ffffff";
        })
    }
}

function openMenu (callback) {
    menuContainer.style.display = 'block';
    callback(showItems);
}

function showBlock (callback) {
    setTimeout(() => menuContainer.style.backgroundColor = 'rgba(255, 255, 255, 1)', 100);
    callback();
}

function showItems () {
    for(let item of menuListLink) {
        setTimeout(() => item.style.top = '50%', 300);
    }  
}

function hideItems (callback) {
    for(let item of menuListLink) {
        item.style.top = '120%';
    }
    callback(closeMenu);
}

function hideBlock (callback) {
    setTimeout(() => menuContainer.style.backgroundColor = 'rgba(255, 255, 255, 0)', 300);
    callback();
}

function closeMenu () {
    setTimeout(() => menuContainer.style.display = 'none', 600);
}
