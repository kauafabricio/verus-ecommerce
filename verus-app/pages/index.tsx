import React, { useEffect, useRef, useState } from "react";

// COMPONENTS
import NavBar from "../src/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Head from "next/head";

const Home = () => {

  // SECTION ANIMATION
  const novidadesRef = useRef<HTMLDivElement>(null);
  const threeSectionRef = useRef<HTMLDivElement>(null);
  const colecoesRef = useRef<HTMLDivElement>(null);

  const [novidadesInView, setNovidadesInView] = useState(false);
  const [threeSectionInView, setThreeSectionInView] = useState(false);
  const [colecoesInView, setColecoesInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const windowHeight = window.innerHeight;
      if (novidadesRef.current) {
        const novidadesPosition = novidadesRef.current.getBoundingClientRect();
        if (novidadesPosition && novidadesPosition.top < windowHeight / 1.5) {
          setNovidadesInView(true);
        }
      }

      if (threeSectionRef.current) {
        const threeSectionPosition = threeSectionRef.current.getBoundingClientRect();
        if (threeSectionPosition && threeSectionPosition.top < windowHeight / 1.5) {
          setThreeSectionInView(true);
        }
      }

      if (colecoesRef.current) {
        const colecoesPosition = colecoesRef.current.getBoundingClientRect();
        if (colecoesPosition && colecoesPosition.top < windowHeight / 1.5) {
          setColecoesInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>

      <Head>
        <title>Verus | Elegância que Transcende, Liberdade que Inspira</title>
      </Head>

      <NavBar />

      <div className="w-full h-[4rem]"></div>

      {/* FIRST SECTION */}
      <section className="flex items-center w-full h-auto px-5 py-20 relative overflow-hidden lg:px-8 lg:justify-center">

        {/* FIRST SECTION - CONTENT */}
        <div className="flex flex-col justify-center gap-16 w-fit box-border relative z-2 lg:flex-row lg:gap-8 lg:max-w-[1100px]">
          {/* CONTENT - TEXT */}
          <div className="flex flex-col gap-10 w-full px-4">
            <div className="absolute z-1 w-[50rem] h-[50rem] opacity-15 blur-3xl bg-zinc-600 rounded-full lg:left-[-30%] lg:top-[-30%]">
            </div>
            <h1 className="relative z-2 text-5xl leading-[50px] font-playfair-md text-[#EFEEE5]">Explore a Moda como <span className="text-[#a6a6a6]">Expressão de Liberdade</span> com Nossas Criações Únicas</h1>
            <a className="relative z-2 no-underline px-5 py-4 bg-[#EFEEE5] w-fit font-poppins-md text-sm" href="/">Compre agora</a>
            <svg className="mt-[7rem] ml-10 hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"></path></svg>
          </div>
          {/* CONTENT - IMGS */}
          <div className="flex flex-col gap-8 items-center justify-center h-fit w-fit sm:flex-row sm:gap-4 sm:items-start">

            <div className="flex flex-col items-center h-full justify-between model-head-1-container">

              <div aria-label="Modelo com a Jaqueta da Verus" className="model-head-1">
              </div>
              <p className="text-[#A6A6A6] font-poppins-md leading-5 mt-3">Descubra uma nova maneira de se expressar através da moda com a Verus. Nossas peças são desenhadas para liberar sua criatividade e individualidade, combinando sofisticação e liberdade.</p>

            </div>
            <div aria-label="Modelo com a Jaqueta da Verus" className="model-head-2">
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full mb-4 lg:hidden"><hr className="w-full"></hr></div>

      {/* REDES SOCIAIS */}
      <section className="w-full h-auto flex gap-10 items-center justify-center">
        <svg className="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="351" height="1" viewBox="0 0 351 1" fill="none">
        <rect width="351" height="1" fill="white"/>
        </svg>
        <ul className="flex gap-[1rem]">
          <li className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 256 256"><path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path></svg> 
            <a className="font-poppins-md text-[14px] text-[#EFEEE5]" href="">facebook</a>
          </li>
          <li className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 256 256"><path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path></svg> 
            <a className="font-poppins-md text-[14px] text-[#EFEEE5]" href="">instagram</a>
          </li>
          <li className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 256 256"><path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path></svg> 
            <a className="font-poppins-md text-[14px] text-[#EFEEE5]" href="">twitter</a>
          </li>
        </ul>
        <svg className="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="351" height="1" viewBox="0 0 351 1" fill="none">
        <rect width="351" height="1" fill="white"/>
        </svg>
      </section>

      <div className="flex justify-center w-full mt-4 lg:hidden"><hr className="w-full"></hr></div>

      {/* NOVIDADES */}
      <section
        ref={novidadesRef}
        className={`flex flex-col items-center w-full h-auto py-[3rem] px-[1rem] relative transition-custom lg:px-8 lg:py-[6rem] ${novidadesInView ? 'transition-entered' : 'transition-exited'}`}
      >
        
        <div className="flex flex-col items-center gap-3 lg:max-w-[1100px] w-fit lg:items-start">
          {/* NOVIDADES HEADER */}
          <div className="flex flex-col items-center relative z-2 gap-[2rem] lg:flex-row lg:justify-between lg:w-[900px]">
            <h1 className="font-playfair-md text-[#fff] text-5xl">Novidades</h1>
            <ul className="flex gap-[1.5rem]">
              <li>
                <a className="no-underline text-[#EFEEE5] font-poppins-md text-sm" href="">Moletons</a>
              </li>
              <li>
                <a className="no-underline text-[#EFEEE5] font-poppins-md text-sm" href="">Jeans</a>
              </li>
              <li>
                <a className="no-underline text-[#EFEEE5] font-poppins-md text-sm" href="">Camisas</a>
              </li>
              <li>
                <a className="no-underline text-[#EFEEE5] font-poppins-md text-sm" href="">Jaquetas</a>
              </li>
            </ul>
          </div>

          <p className="font-poppins-md text-[#A6A6A6] w-full relative z-2 mt-5 sm:w-[500px]">Estilo é a única coisa que você não pode comprar. É algo refletido da nossa alma para o mundo exterior.</p>
        </div>

        {/* NOVIDADES - IMGS */}
        <div className="w-fit h-auto flex justify-center gap-5 mt-[5rem] relative z-2 flex-col sm:flex-row sm:flex-wrap">

          <div aria-label="Modelo vestida de Trench Coat Berge da Verus" className="new-in-container jacket-1">
            <p className="font-poppins-md text-[#EFEEE5]">Trench Coat</p>
            <p className="font-poppins-md text-[#3b2a2a] text-[14px]">R$ 459,90</p>
          </div>
          <div aria-label="Modelo vestido com a Jaqueta Preta da Verus" className="new-in-container jacket-2">
            <p className="font-poppins-md text-[#EFEEE5]">Jaqueta</p>
            <p className="font-poppins-md text-[#a6a6a6] text-[14px]">R$ 299,90</p>
          </div>
          <div aria-label="Modelo vestido com um Terno preto da Verus" className="new-in-container jacket-3">
            <p className="font-poppins-md text-[#EFEEE5]">Terno</p>
            <p className="font-poppins-md text-[#a6a6a6] text-[14px]">R$ 359,90</p>
          </div>

        </div>

      </section>

      <div className="flex justify-center w-full"><hr className="w-[80%] 2xl:w-[1200px]"></hr></div>

      {/* THREE SECTION */}
      <section
        ref={threeSectionRef}
        className={`w-full h-auto py-[5rem] px-[1rem] flex justify-center overflow-hidden relative transition-custom lg:px-8 ${threeSectionInView ? 'transition-entered' : 'transition-exited-2'}`}
      >

        <div className="w-fit flex flex-col gap-[3rem] items-center lg:max-w-[1100px]">
          
          {/* THREE SECTION - BG */}

          <div className="absolute z-1 w-full h-full opacity-20 blur-3xl bg-slate-900 rounded-full">
          </div>


          {/* THREE SECTION - CONTENT */}

          <h1 className="font-poppins-md text-[#EFEEE5] text-3xl text-center relative z-2 w-full lg:w-[980px] lg:text-4xl">
            Na Verus, acreditamos que a verdadeira moda permite a <span className="text-[#A6A6A6]">liberdade</span> de ser você mesmo. Nossas peças são projetadas para oferecer um estilo contemporâneo que se adapta ao seu modo de viver. 
          </h1>

          <div className="w-full h-auto flex flex-col gap-3 relative z-2 sm:flex-row">
            {/* THREE SECTION - IMAGES */}
            <div aria-label="Modelo com a roupa da Verus" className="three-section-1">
            </div>

            <div className="three-section-container-img">
              <div aria-label="Modelo com a roupa da Verus" className="three-section-2">
              </div>

              <p className="font-poppins-md text-[#a6a6a6]">Com cortes modernos e tecidos de alta qualidade, você pode explorar sua individualidade e criar um guarda-roupa que celebra sua autenticidade.</p>
              
              <a className="no-underline px-5 py-4 bg-[#EFEEE5] w-fit font-poppins-md text-sm" href="/">Sobre nós</a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full"><hr className="w-[80%] 2xl:w-[1200px]"></hr></div>

      {/* COLEÇÕES EM DESTAQUE */}

      <section
        ref={colecoesRef}
        className={`w-full h-auto py-[5rem] px-[1rem] flex justify-center overflow-hidden transition-custom lg:px-8 lg:items-center ${colecoesInView ? 'transition-entered' : 'transition-exited'}`}
      >
        {/* COLEÇÕES EM DESTAQUE - CONTENT */}
        <div className="w-full h-auto flex flex-col relative lg:w-fit">

          {/* BG */}
          <div className="absolute z-1 w-[150%] h-full opacity-10 blur-3xl bg-slate-500 right-0 top-0 rounded-full">
          </div>

          {/* COLEÇÕES EM DESTAQUE - TEXT */}
          <div className="flex flex-col gap-5">
            <h1 className="relative z-3 font-playfair-md text-[#fff] text-5xl">
              Coleções em destaque
            </h1>
            <p className=" relative z-3 font-poppins-md text-[#A6A6A6] w-full lg:w-[700px]">Cada peça da Verus é pensada para proporcionar conforto sem abrir mão do estilo. Libere-se das convenções e escolha a moda que se adapta a você, não o contrário.</p>
          </div>

          {/* COLEÇÕES EM DESTAQUE - IMAGENS */}
          <div className="relative z-3 flex flex-col gap-3 h-auto w-full mt-[4rem] items-center sm:flex-row lg:w-fit">
            <picture aria-label="Modelo vestida com Trench Coat da Verus" className="new-collections-1">
            </picture>

            <div className="flex flex-col justify-between">

              <picture aria-label="Blazer Alongado Berge da Verus" className="new-in-container new-collections-image-2">
                <p className="font-poppins-md text-[#EFEEE5]">Blazer Alongado Berge</p>
                <p className="font-poppins-md text-[#a6a6a6] text-[14px]">R$ 359,90</p>
              </picture>

              <picture aria-label="Blazer Vermelho com Abotoamento da Verus" className="new-in-container new-collections-image-3">
                <p className="font-poppins-md text-[#EFEEE5]">Blazer Vermelho com Abotoamento</p>
                <p className="font-poppins-md text-[#a6a6a6] text-[14px]">R$ 359,90</p>
              </picture>
            </div>
          </div>
        </div>
        
      </section>

      {/* FAIXA VANTAGENS */}
      <div className="flex justify-center overflow-hidden w-full h-auto py-[3rem] bg-white">
        <div className="scrolling-text-advantages flex justify-center w-fit gap-[5rem] lg:gap-[7rem]">
          <a className="font-poppins-semibold text-3xl text-nowrap" href="/">Frete grátis</a>
          <a className="font-poppins-semibold text-3xl" href="/">Promoções</a>
          <a className="font-poppins-semibold text-3xl text-nowrap" href="/">Devolução facilitada</a>
          <a className="font-poppins-semibold text-3xl text-nowrap lg:hidden" href="/">Frete grátis</a>
          <a className="font-poppins-semibold text-3xl lg:hidden" href="/">Promoções</a>
          <a className="font-poppins-semibold text-3xl text-nowrap lg:hidden" href="/">Devolução facilitada</a>
        </div>
      </div>

      {/* NEWSLETTER */}

      <section className="w-full h-auto py-[7rem] px-[1rem] flex justify-center relative overflow-hidden">

        <div className="flex gap-[4rem] w-fit relative flex-col lg:flex-row">
          <div className="absolute z-1 w-[150%] h-full opacity-5 blur-3xl bg-slate-400 rounded-full">
          </div>
          <div className="absolute z-2 w-full h-[200%] top-0 opacity-20 blur-3xl bg-slate-950 rounded-full">
          </div>
          <picture aria-label="Foto de Modelo com a roupa da Verus" className="newsletter-image relative z-4">
          </picture>

          <div className="flex flex-col gap-3 items-center justify-center w-fit relative z-4">
            <p className="font-poppins-md text-[#a6a6a6]">Fique por dentro das novidades</p>
            <h1 className="text-5xl font-poppins-semibold text-[#EFEEE5]">Newsletter</h1>
            <p className="text-center font-poppins-md text-[#EFEEE5] w-[20rem] text-md">Deixe suas roupas falarem por você e inspire-se em cada detalhe.</p>

            <form className="mt-5 flex justify-between px-3 w-[90%]" action="">
              <input className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-[#EFFEE5] font-poppins-md text-sm" type="text" placeholder="Digite seu e-mail" />
              <button aria-label="Enviar e-mail para Newsletter">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z"></path></svg>
                </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAIXA SIGA-NOS */}

      <div className="overflow-hidden relative flex justify-center items-center w-full h-auto py-[3rem] bg-white">

        <div className="scrolling-text">
          <a className="font-poppins-semibold text-3xl mx-[10rem]" href="/">Siga-nos no Instagram</a>
          <a className="font-poppins-semibold text-3xl mx-[10rem]" href="/">Siga-nos no Instagram</a>
          <a className="font-poppins-semibold text-3xl mx-[10rem]" href="/">Siga-nos no Instagram</a>
          <a className="font-poppins-semibold text-3xl mx-[10rem]" href="/">Siga-nos no Instagram</a>
          <a className="font-poppins-semibold text-3xl mx-[10rem]" href="/">Siga-nos no Instagram</a>
        </div>
      </div>

      {/* FOOTER */}

      <Footer />
    </> 
  )
}

export default Home;