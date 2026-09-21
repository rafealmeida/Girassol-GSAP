$(function () {
    'use strict';

    gsap.registerPlugin(ScrollTrigger);

    
    const lenis = new Lenis({ 
        duration: 1.5,
        infinite: false, 
        smooth: true
    }); 
    
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // Evita micro travamentos
    gsap.ticker.lagSmoothing(0);


    gsap.utils.toArray(".petal").forEach((petal, index) => {
        gsap.set(petal, {
            svgOrigin: "100 100", 
            rotation: index * 36,
            scale: 0
        });
    });


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-container", 
            start: "top top",             
            end: "+=1500",                
            scrub: 1,                     
            pin: true // Fixa a tela enquanto o girassol abre                    
        }
    });

    tl.to(".petal", {
        scale: 0.6,               
        duration: 1,
        stagger: 0.05,            
        ease: "power1.out"
    })
    .to("#flower", {
        rotation: 180,            
        duration: 1
    }, "<");


    const parallaxWrapp = gsap.utils.toArray('.parallax__wrapp');
    parallaxWrapp.forEach(parallax => {
        gsap.to(parallax, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: parallax.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });  


    // 5. RESPONSIVIDADE (Boas práticas do modelo)
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

});