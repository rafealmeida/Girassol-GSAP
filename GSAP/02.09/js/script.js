gsap.fromTo('#js-section-two' ,{
    'clip-path': 'circle(5% at 50% 50%)'
}, {
    'clip-path': 'circle(100% at 50% 50%)',
    scrollTrigger: {
        trigger: '#js-section-two',
        start: 'top top',
        markers: true,
        scrub: true,
        pin: true
    }
})