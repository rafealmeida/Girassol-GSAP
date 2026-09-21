$(function () {

'use strict';

// FUNÇÃO SCROLL SUAVE DO LENIS - tempo de duração e rolagem infinita e escrolagem suave

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis(
    { duration: 1.5,
      infinite: true,
      smooth: true
    }); 
    
    //fução para evitar travamento entre o gsap e o lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

//evita micro travamentos
gsap.ticker.lagSmoothing(0);


    //CRIANDO A ANIMAÇÃO EM TODO O GSAP__ANIM , AS SEÇÕES  SE SOBREPOEM AO ESCROLLAR
      const gsapAnim = gsap.utils.toArray('.gsap__anim');

        gsapAnim.forEach(section => {
            gsap.to(section, {
                //para responsividade
                yPercent: 100,
                ease: 'none',//tira erro sobreposto da animação
                scrollTrigger: {
                   trigger: section,
                     start: 'bottom bottom',
                     end: 'bottom top',
                     scrub: true,
                     //evita que a animação fique travada, mesmo que o usuário pare de rolar a página
                     snap:true
                }
            });
        });

//ANIMAÇÃO NO PARALLAX__WRAPP
       const parallaxWrapp = gsap.utils.toArray('.parallax__wrapp');

        parallaxWrapp.forEach(parallax => {
            gsap.to(parallax, {
                //para responsividade
                yPercent: -20,
                ease: 'none',//tira erro sobreposto da animação
                scrollTrigger: {
                   trigger: parallax,
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true
                }
            });
        });  

        //ANIMAÇÃO NO TITULO
        gsap.to('.title-p', {
                //para responsividade
                yPercent: 100,
                scrollTrigger: {
                   trigger: 'header.header',
                     start: 'top top',
                     end: 'bottom top',
                     scrub: true
                }
            });
        })
        gsap.to('.title__img img',{
            rotate:360,
            ease:'none',
            scrollTrigger:'.serv',
            start:'top bottom',
            end:'bottom top',
            scrub:true,
        });
        /*Animacao do 'Os*/ 
        gsap.to('.title__t',{
            xPercent:-10,
            ease:'none',
            scrollTrigger:{
                trigger:'.serv',
                start:'top top',
                end:'bottom top',
                scrub:true,
            }
        });
        /*Animacao do 'Servicos*/ 
        gsap.to('.serv .stroke',{
            xPercent:10,
            ease:'none',
            scrollTrigger:{
                trigger:'.serv',
                start:'top top',
                end:'bottom top',
                scrub:true,
            }
        });
        /*Animacao dos servicos em tipo escada*/ 
        gsap.to('.serv__item:nth-chicl(1)',{
            xPercent:-10,
            ease:'none',
            scrollTrigger:{
                trigger:'.serv',
                start:'top top',
                end:'bottom top',
                scrub:true,
                /*markers true*/ 
            }
        });
        gsap.to('.serv__item:nth-child(3)',{
            xPercent:10,
            ease:'none',
            scrollTrigger:{
                trigger:'.serv',
                start:'top top',
                end:'bottom top',
                scrub:true,
                //markers:tyrue
            }
        }
        );
        ///Animacao de rotacao da logo final
        gsap.to('.approve__star',{
            scale:360,
            ease:'none',
            scrollTrigger:{
                trigger:'.approve',
                start:'top top',
                end:'bottom top',
                scrub:true,
                //markers true
            }
        });  
        ///Recalcula as posicaop do gsap sem precisar rec
        window.addEventListener('resize',()=>{
            scrollTrigger.refresh();
        })
