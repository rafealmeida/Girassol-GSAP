document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    //REGISTRANDO E USANDO AS FUNCIONALIDADES DO SCROLLTRIGGER 

    //selecionando os elementos para aplicar as animações
    const areas = gsap.utils.toArray('.area');

    //loop de for each
    areas.forEach((area) => {
        gsap.to(area, {
            //scale animação de aproximação
            scale: 0.9,
            duration: 2,
            //escrolagem
            scrollTrigger: {
                trigger: area,
                start: "top 80%",
                end: "bottom top",
                scrub: true,
                markers: true
            }
        })
    })

});