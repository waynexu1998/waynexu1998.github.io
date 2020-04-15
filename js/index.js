const hamburger = document.querySelector('.navDash')
let menuOpen = false


if(hamburger) {
    hamburger.addEventListener('click', () => {
        if(!menuOpen) {
            hamburger.classList.add('open')
            menuOpen = true
        } else {
            hamburger.classList.remove('open')
            menuOpen = false
        }
    })
}

// hero section animtion
const timeline = gsap.timeline()

timeline.from('.giant_title', {
    y: '100%',
    duration: 1,
    opacity: 0,
    ease: 'power4.in'
})

timeline.from('.giant_title2', {
    opacity: 0,
    duration: 0.5
})

timeline.from('.navigation', {
    opacity: 0,
    duration:0.5
},
'-=0.5')

timeline.from('.editor', {
    duration: 0.3,
    opacity: 0,
    ease: 'power4.in'
},
'-=0.4')

// hero fade out
const timeline2 = gsap.timeline({
    paused: true
})

timeline2.to('.divider', {
    opacity:0,
    duration: 1.6,
    ease: 'power4.out'
})
timeline2.to('.divider2', {
    opacity:0,
    duration: 1.6,
    ease: 'power4.out'
},
'-=1.6')
timeline2.to('.editor', {
    y: -1000,
    opacity:0,
    duration:1,
    ease: 'power4.out'
},'-=1.6')
timeline2.to('.title_wrapper', {
    opacity:0,
    duration:1.6,
    ease: 'power4.out'
},'-=1.6')

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.HERO',
    duration: 1600,
    triggerHook: 0
})
.setTween(timeline2)
.addIndicators()
.addTo(controller)