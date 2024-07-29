'use strict';

const btn = document.querySelectorAll('.drum');

const crash = new Audio('./sounds/crash.mp3');
const kickBass = new Audio('./sounds/kick-bass.mp3');
const snare = new Audio('./sounds/snare.mp3');
const tom1 = new Audio('./sounds/tom-1.mp3');
const tom2 = new Audio('./sounds/tom-2.mp3');
const tom3 = new Audio('./sounds/tom-3.mp3');
const tom4 = new Audio('./sounds/tom-4.mp3');

function removeActiveClass(target) {
    target.classList.remove('pressed');
}

function addActiveClass(target) {
    target.classList.add('pressed');
}

function playSound(sound) {
    sound.play();
}

btn.forEach(btn => {
    btn.addEventListener('click', (e) => {

        const target = e.target;


        if(target.innerHTML === 'w') {
            playSound(crash);
            addActiveClass(target);
            setTimeout(() => {
                removeActiveClass(target)
            }, 200)
        }
        if(target.innerHTML === 'a') {
            playSound(kickBass);
            addActiveClass(target);
            setTimeout(() => {
                removeActiveClass(target)
            }, 200)
        }
        if(target.innerHTML === 's') {
            playSound(snare);
            addActiveClass(target);
            setTimeout(() => {
                removeActiveClass(target)
            }, 200)
        }
        if(target.innerHTML === 'd') {
            playSound(tom1);
            addActiveClass(target);
            setTimeout(() => {
                removeActiveClass(target)
            }, 200)
        }
        if(target.innerHTML === 'j') {
            playSound(tom2);
            addActiveClass(target);
            setTimeout(() => {
                removeActiveClass(target)
            }, 200)
        }
        if(target.innerHTML === 'k') {
            playSound(tom3);
            addActiveClass(target);
            setTimeout(() => {
                removeActiveClass(target)
            }, 200)
        }
        if(target.innerHTML === 'l') {
            playSound(tom4);
            addActiveClass(target);
            setTimeout(() => {
                removeActiveClass(target)
            }, 200)
        }
    })
})

document.addEventListener('keydown', (e) => {

        if(e.code === 'KeyW') {
            playSound(crash);
        }
        if(e.code === 'KeyA') {
            playSound(kickBass);
        }
        if(e.code === 'KeyS') {
            playSound(snare);
        }
        if(e.code === 'KeyD') {
            playSound(tom1);
        }
        if(e.code === 'KeyJ') {
            playSound(tom2);
        }
        if(e.code === 'KeyK') {
            playSound(tom3);
        }
        if(e.code === 'KeyL') {
            playSound(tom4);
        }
    })



