/* gsap.to(".quadrado", {
    x: "200",
    duration: 3,
    backgroundColor: "blue",
    opacity: 0
})
    */

GPUSampler.fromTo(".quadrado", {
    x: -200,
    y: 100,
}, {
    x: "100",
    y: -200,
    duration: 3,
    backgroundColor: "green",
    stagger: .5,
    ease: "bounce.out(', 0.3)"
})