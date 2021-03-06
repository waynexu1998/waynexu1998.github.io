const PJ1_image_wrapper = document.querySelector('.PJ1_image_wrapper')
const move_title = document.querySelector('.move_title')
const anim_border_h = document.querySelector('.anim_border_h')
const anim_border_v = document.querySelector('.anim_border_v')

function anim_start() {
    timeline.play()
}

$(window).on("load",function(){
    setTimeout(function() {
        $(".load_page").fadeOut("slow");
        load_timeout()
    },1000)
 });

//  window.onresize = function(){
//     this.location.reload()
// };

var width = $(window).width();
$(window).on('resize', function() {
  if ($(this).width() !== width) {
    width = $(this).width();
    this.location.reload()
  }
});

const timeline = gsap.timeline({
    paused: true
})

timeline.from('.move_title',{
    x: 200,
    ease: 'power4.out'

})

const timeline3 = gsap.timeline({
    paused: true
})

timeline3.to('.move_title',{
    x: 150,
})

function play3() {
    timeline3.play()
}

function rev3() {
    timeline3.reverse()
}

// function timeout
function load_timeout() {
    setTimeout(anim_start, 300)
}

function PJ1_hover() {
    PJ1_image_wrapper.style.transform = "rotateY(20deg)"
    requestAnimationFrame(play3)
    anim_border_h.style.width = "15px"
    anim_border_v.style.height = "100px"
}

function PJ1_hover_out() {
    PJ1_image_wrapper.style.transform = "initial"
    requestAnimationFrame(rev3)
    anim_border_h.style.width = "100px"
    anim_border_v.style.height = "15px"
}