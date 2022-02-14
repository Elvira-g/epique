'use strict';

const menuBtn = document.querySelector('.menu-btn-container');
const menuContainer = document.querySelector('.menu-container');
const logo = document.querySelector('.logo-link');
const icon = document.querySelector('.hamburger');
const menuListLink = document.querySelectorAll('.menu-list-link');
const fire = document.querySelector('.main-image-block');
const heroSection = document.querySelector('.hero-section');
const palm = document.querySelector('.call-button');
const menuBlock = document.querySelector('.header');
const menuLine = document.querySelectorAll('.line');
const sections = document.querySelectorAll('section');
const baloonSection = document.querySelector('.about-section');
const baloon = document.querySelector('.about-svg-img');
const baloonDesktopSection = document.querySelector('.create-section');
const baloonDesktop = document.querySelector('.create-svg-desktop');

const menuHeight = menuBlock.clientHeight;

window.addEventListener('load', function(){

    if (window.screen.width >= 1368) {
        menuContainer.style.opacity = '0';
        logo.style.opacity = '0';
        window.addEventListener('scroll', function() {
            sections.forEach((section) => {
                if(isPartiallyVisible(section)) {
                    let id = section.id;
                    menuListLink.forEach((link) => {
                        link.classList.remove('menu-active');
                        if ( link.getAttribute('href') == `#${id}`) {
                            link.classList.add('menu-active');
                        }
                    })
                }
            })
            heroHide();
            menuContainer.style.opacity = '1';
            logo.style.opacity = '1';
            menuBlock.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            if(isJustVisible(baloonDesktopSection)){
                showBaloon(baloonDesktopSection);
            }
        })
    } else {
        window.addEventListener('scroll', function() {
            scrollPalm();
        })
            
        icon.addEventListener('click', function () {
            if(this.classList.contains('is-active')){
                closeMenuBtn(this);
            } else {
                openMenuBtn(this);
            }
        })

        sections.forEach(function(section) {
            if(section.classList.contains('hero-section')){
                section.style.opacity = '1';
            } else {
                window.addEventListener('scroll', function () {
                    if(isPartiallyVisible(section)){
                        section.style.opacity = '1';
                        if(isJustVisible(baloonSection)){
                            showBaloon(baloonSection);
                        }
                    }
                    
                })
            }
        })

        menuListLink.forEach((item) => {
            item.addEventListener('click', function() {
                closeMenuBtn(icon);
            })
        })
    }

    

    function closeMenuBtn(btn) {
        btn.classList.remove('is-active');
        if(palm.classList.contains('black')){
            menuBlock.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        } else {
            menuBlock.style.backgroundColor = 'rgba(24, 24, 24, 0.5)';
        }
        hideItems(hideBlock);
        document.body.style.overflow = "visible";
    }

    function openMenuBtn(btn) {
        btn.classList.add('is-active');
        if(palm.classList.contains('black')){
            menuBlock.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        } else {
            menuBlock.style.backgroundColor = 'rgba(24, 24, 24, 1)';
        }
        openMenu(showBlock);
        document.body.style.overflow = "hidden";
    }


})

function heroHide() {
    heroSection.style.height = '0';
    heroSection.style.padding = '0';
}



function scrollPalm() {
    let top = window.scrollY;
    let hiro = document.querySelector('.hero-section');
    let offset = hiro.clientHeight;
    if(top > offset) {
        palm.style.fill = "var(--colorBlack)";
        palm.classList.add('black');
        logo.style.opacity = '1';
        menuBlock.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
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

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
 
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom + (height/5)));
}

function isJustVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
 
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
   
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
   
    return ((top >= 0) && (bottom <= window.innerHeight));
}

function showBaloon (section) {
    let elementBoundary = section.getBoundingClientRect();
    let top = elementBoundary.top;
    let height = elementBoundary.height/3;
    let yPos = top - height;
    if(section.classList.contains('create-section')){
        baloonDesktop.style.top = yPos + 'px';
    } else {
        baloon.style.top = yPos + 'px';
    }
    
}