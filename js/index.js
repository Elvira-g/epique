'use strict';

const menuBtn = document.querySelector('.menu-btn-container');
const menuContainer = document.querySelector('.menu-container');
const icon = document.querySelector('.hamburger');
const menuListLink = document.querySelectorAll('.menu-list-link');
const fire = document.querySelector('.main-image-block');
const heroSection = document.querySelector('.hero-section');
const palm = document.querySelector('.call-button');
const menuBlock = document.querySelector('.header');
const menuLine = document.querySelectorAll('.line');

window.addEventListener('load', function(){

    icon.addEventListener('click', function () {
        if(this.classList.contains('is-active')){
            this.classList.remove('is-active');
            hideItems(hideBlock);
            document.body.style.overflow = "visible";
            // fire.classList.remove('main-image-block-fixed');
            // fire.style.position = 'fixed';
        } else {
            this.classList.add('is-active');
            openMenu(showBlock);
            document.body.style.overflow = "hidden";
            // fire.classList.add('main-image-block-fixed');
        }
        
    })

    window.addEventListener('scroll', function() {
        let top = window.scrollY;
        let hiro = document.querySelector('.hero-section');
        let offset = hiro.clientHeight;
        if(top > offset) {
            palm.style.fill = "var(--colorBlack)";
            menuBlock.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            menuLine.forEach(function(item) {
                item.style.backgroundColor = "var(--colorBlack)";
            })
            
        } else {
            palm.style.fill = "#ffffff";
            menuBlock.style.backgroundColor = "rgba(24, 24, 24, 0.8)"
            menuLine.forEach(function(item) {
                item.style.backgroundColor = "#ffffff";
            })
        }
    })
})

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
        item.style.top = '45px';
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