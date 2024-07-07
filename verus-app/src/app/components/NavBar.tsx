import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../../public/imgs/verus-logo-without-bg.png";

const NavBar: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <>
     {/* NAV */}
      <nav className="h-[5rem] w-full flex px-8 justify-between items-center fixed z-10 nav sm:justify-around sm:px-0">
        <div className="hidden sm:flex">
          <ul className="flex gap-10">
            {[
              { href: "/", label: "Home" },
              { href: "/#sobrenos", label: "Sobre nós" },
              { href: "/loja", label: "Loja" },
              { href: "/blogs", label: "Blogs" }
            ].map((link) => (
              <li key={link.href} className="relative group">
                <a
                  className={`font-poppins-md text-sm transition-all duration-300 ${isActive(link.href) ? "text-[#EFEEE5]" : "text-[#a6a6a6]"}`}
                  href={link.href}
                >
                  {link.label}
                </a>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[0.5px] transition-transform duration-500 ease-out ${isActive(link.href) ? "bg-[#EFEEE5] transform scale-x-100" : "bg-transparent group-hover:bg-[#EFEEE5] transform scale-x-0 group-hover:scale-x-100"}`}
                />
              </li>
            ))}
          </ul>
        </div>
        <Image className="h-[4rem] w-auto" src={logo} alt={"Logo da Verus"} />

        <div className="flex items-center gap-2">
          <button className="p-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EFEEE5" viewBox="0 0 256 256"><path d="M238,82.73A8,8,0,0,0,232,80H187.63L134,18.73a8,8,0,0,0-12,0L68.37,80H24a8,8,0,0,0-7.93,9.06L31.14,202.12A16.06,16.06,0,0,0,47,216H209a16.06,16.06,0,0,0,15.86-13.88L239.93,89.06A8,8,0,0,0,238,82.73ZM81.6,184a7.32,7.32,0,0,1-.81,0,8,8,0,0,1-8-7.2l-5.6-56a8,8,0,0,1,15.92-1.6l5.6,56A8,8,0,0,1,81.6,184Zm54.4-8a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM89.63,80,128,36.15,166.37,80Zm99.13,40.8-5.6,56a8,8,0,0,1-7.95,7.2,7.32,7.32,0,0,1-.81,0,8,8,0,0,1-7.16-8.76l5.6-56a8,8,0,0,1,15.92,1.6Z"></path></svg>
          </button>
          <button className="p-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EFEEE5" viewBox="0 0 256 256"><path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path></svg>
          </button>
          <button onClick={() => setMenu(true)} className="sm:hidden flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>
          </button>
        </div>
      </nav>

    {/* MENU */}
     { menu && (
      <div className="flex flex-col gap-32 p-16 fixed z-50 w-full h-full bg-[#030303] showMenu">
        <button className="self-end" onClick={() => setMenu(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
        </button>

        <ul className="flex flex-col gap-8 self-center items-center">
          <li>
            <a className="font-poppins-md text-3xl text-[#EFEEE5]" href="/">Home</a>
          </li>
          <li>
            <a className="font-poppins-md text-3xl text-[#EFEEE5]" href="/">Sobre nós</a>
          </li>
          <li>
            <a className="font-poppins-md text-3xl text-[#EFEEE5]" href="/">Loja</a>
          </li>
          <li>
            <a className="font-poppins-md text-3xl text-[#EFEEE5]" href="/">Blogs</a>
          </li>

        </ul>
      </div>
     )}
    </>
  );
};

export default NavBar;
