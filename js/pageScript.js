'use strict';

let icon = document.querySelector('.hamburger');
let menu = document.querySelector('.menu-container');
let menuListLink = document.querySelectorAll('.menu-list-link');
let pageBackground = document.querySelector('.page-background');
let baloon = document.getElementById('baloon');
let height;

window.addEventListener('load', function() {
    if( window.screen.height >= 320 && window.screen.height <= 736) {
        pageBackground.style.display = 'none';
    }


    let startY;
    let dist;
    let offset = baloon.offsetTop;

    function handleSwipe (isUpSwipe){
        if(isUpSwipe < 0){
            console.log('up swipe');
            if (baloon.offsetTop < 314){
                return false
            } else {
                height = baloon.offsetTop - 150;
                baloon.style.top = height + 'px';
                console.log(baloon.style.top);
            }
        } else {
            if (baloon.offsetTop == offset || baloon.offsetTop > 597) {
                return false;
            } else {
                console.log('down swipe');
                height = baloon.offsetTop + 150;
                baloon.style.top = height + 'px';
                console.log(baloon.style.top);
            }
        }
    }

    window.addEventListener('touchstart', function(e){
        let touchObj = e.changedTouches[0];
        dist = 0;
        startY = touchObj.pageY;
        // e.preventDefault();
    }, false)

    window.addEventListener('touchend', function(e) {
        let touchObj = e.changedTouches[0];
        dist = touchObj.pageY - startY;
        handleSwipe(dist);
        // e.preventDefault();
    }, false);




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

// function scrollBaloon () {
//     let height = baloon.scrollHeight;
//     baloon.style.top = height-10 + 'px';
//     console.log(height);
// }