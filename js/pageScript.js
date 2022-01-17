'use strict';

let icon = document.querySelector('.hamburger');
let menu = document.querySelector('.menu-container');
let menuListLink = document.querySelectorAll('.menu-list-link');
let pageBackground = document.querySelector('.page-background');

window.addEventListener('load', function() {
    if( window.screen.height >= 320 && window.screen.height <= 414) {
        pageBackground.style.display = 'none';
    }


    icon.addEventListener('click', function () {
        if(this.classList.contains('is-active')){
            this.classList.remove('is-active');
            hideItems(hideBlock);
        } else {
            this.classList.add('is-active');
            openMenu(showBlock);
        } 
    })

    function openMenu (callback) {
        menu.style.display = 'block';
        callback(showItems);
    }

    function showBlock (callback) {
        setTimeout(() => menu.style.backgroundColor = 'rgba(255, 255, 255, 0.95)', 100);
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
        setTimeout(() => menu.style.backgroundColor = 'rgba(255, 255, 255, 0)', 300);
        callback();
    }

    function closeMenu () {
        setTimeout(() => menu.style.display = 'none', 600);
    }
})