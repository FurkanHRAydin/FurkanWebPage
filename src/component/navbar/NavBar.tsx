import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai"
import { ImagesCommon } from "@/const/Images";
import { useRouter } from "next/router";
import SocialButton from "../SocialButton";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(() => {
        const projectsRegex = /^\/projects\/.*/;
        if (projectsRegex.test(router.asPath)) {
          setNavBg("transparent");
          setLinkColor("#ecf0f3");
        } else {
          setNavBg("#ecf0f3");
          setLinkColor("#1f2937");
        }
      }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow);
    },[]); 

    return (
        <div
        style={{backgroundColor: `${navBg}`}}
         className={shadow ? "fixed w-full h-30 shadow-xl z-[100]": "fixed w-full h-30 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/#main' scroll={false}>
                <Image
                    src={ImagesCommon.logo}
                    alt="/"
                    width="125"
                    height="50"
                />
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className="hidden md:flex mr-3 uppercase">
                        <Link href="/#main" scroll={false}>
                            <li className="ml-10 text-sm hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about" scroll={false}>
                            <li className="ml-10 text-sm hover:border-b">About</li>
                        </Link>
                        <Link href="/#skills" scroll={false}>
                            <li className="ml-10 text-sm hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects" scroll={false}>
                            <li className="ml-10 text-sm hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact" scroll={false}>
                            <li className="ml-10 text-sm hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div  style={{ color: `${linkColor}` }} onClick={handleNav} className="md:hidden mr-5 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineMenu size={20}/>
                    </div>
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={nav 
                                    ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500" 
                                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                                }>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href='/#main' scroll={false} onClick={()=> setNav(false)}>

                                <Image  src={ImagesCommon.logo}
                                        alt="/"
                                        width="87"
                                        height="35"
                                />

                            </Link>
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Always hyped to learn something new</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/#main" scroll={false}>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/#about" scroll={false}>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/#skills" scroll={false}>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/#projects" scroll={false}>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/#contact" scroll={false}>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let&apos;s Connect</p>
                            <SocialButton/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default NavBar