import React from "react";
import logo from "../../../public/imgs/verus-logo-without-bg.png"
import Image from "next/image";

const Footer = () => {
  return(
    <footer className="w-full h-auto py-[5rem] flex gap-[3rem] justify-center flex-wrap">
      <div className="flex flex-col p-3 gap-5 ">
        <Image className="h-[80px] w-fit" src={logo} alt={"Logo da Verus"}/>

        <div className="flex flex-col">
          <p className="font-poppins-md text-[#a6a6a6] text-[0.9rem]">&copy; 2024 Byte8. Todos os direitos reservados.</p>
          <p className="font-poppins-md text-[#a6a6a6] text-[0.9rem]">Desenvolvido por Kauã Fabrício.</p>
          <p className="font-poppins-md text-[#a6a6a6] text-[0.9rem]">Imagens fornecidas por Freepik: <a className="underline" href="https://www.freepik.com">www.freepik.com</a></p>
          <p className="font-poppins-md text-[#a6a6a6] text-[0.9rem]">Família de Icons: <a className="underline" href="https://phosphoricons.com/">Phosphor Icons</a></p>
        </div>
      </div>

      <div className="flex flex-col p-3 gap-5 justify-center items-center">
        <p className="font-poppins-semibold text-base text-white">Assistência aos clientes</p>

        <div className="flex flex-col gap-1">
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline" href="">Ver produtos</a>
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline" href="">Sobre nós</a>
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline" href="">Política de Privacidade</a>
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline" href="">Política de Cookies</a>
        </div>
      </div>

      <div className="flex flex-col p-3 gap-5 justify-center items-center">
        <p className="font-poppins-semibold text-base text-white">Contato do Desenvolvedor</p>

        <div className="flex flex-col gap-1">
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline flex gap-1 items-center" href="https://www.linkedin.com/in/dev-kaua/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"></path></svg> kauafabriiciio@gmail.com</a>
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline flex gap-1 items-center" href="https://www.linkedin.com/in/dev-kaua/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" viewBox="0 0 256 256"><path d="M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z"></path></svg> (81) 9 9951-7869</a>
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline flex gap-1 items-center" target="_blank" href="https://www.linkedin.com/in/dev-kaua/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"></path></svg> Linkedin</a>
          <a className="font-poppins-md text-[0.9rem] text-[#a6a6a6] no-underline flex gap-1 items-center" target="_blank" href="https://www.github.com/kauafabricio"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" viewBox="0 0 256 256"><path d="M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z"></path></svg> Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;