'use strict';

//menu button


//images

let menu = document.querySelector('.menu-container');
let menuListLink = document.querySelectorAll('.menu-list-link');
let baloon = document.querySelector('.hero-baloon');
let lighthouse = document.querySelector('.hero-lighthouse');
let sea = document.querySelector('.hero-line ');
let icon = document.querySelector('.hamburger');
let video = document.querySelector('.background-video')

window.addEventListener('load', function() {
    // document.querySelector('.hero-section').style.opacity = '1';

    video.addEventListener('ended', function() {
        video.play();
    })

    if(window.screen.height < 768) {
        baloon.style.display = 'none';
        lighthouse.style.display = 'none';
        document.querySelector('.hero-subtitle').style.marginBottom = '55px';
        document.querySelector('.hero-section').style.padding = '70px 0 0';
    }

    if((window.screen.height == 375 || window.screen.height == 360) && window.screen.width === 667) {
        document.querySelector('.hero-section').style.padding = '40px 33px 0';
        document.querySelector('.hero-subtitle').style.marginBottom = '31px';
    }

    if(window.screen.width == 736 && window.screen.height == 414) {
        document.querySelector('.hero-section').style.padding = '40px 33px 0';
        document.querySelector('.hero-subtitle').style.marginBottom = '46px';
    }

    if(window.screen.width <= 414 ) {
        baloon.style.top = '22px';
        // setTimeout(() => lighthouse.style.left = '178px',700);
    }
    if(window.screen.width > 414 && window.screen.width <= 768) {
        baloon.style.top = '0px';
        setTimeout(() => lighthouse.style.left = '375px',700);
    }

    if(window.screen.width > 768 && window.screen.width < 1320) {
        baloon.style.top = '-6px';
        setTimeout(() => lighthouse.style.left = '72%',700);
    }

    if(window.screen.width >= 1320) {
        baloon.style.opacity = '1';
        // baloon.style.top = '-6px';
        lighthouse.style.opacity = '1';

        // setTimeout(() => lighthouse.style.left = '77%',700);
    }
    
    // setTimeout(() => sea.style.right = '0px',1100);

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
        setTimeout(() => menu.style.backgroundColor = 'rgba(225, 225, 225, 0.9)', 100);
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
        setTimeout(() => menu.style.backgroundColor = 'rgba(225, 225, 225, 0)', 300);
        callback();
    }

    function closeMenu () {
        setTimeout(() => menu.style.display = 'none', 600);
    }

})