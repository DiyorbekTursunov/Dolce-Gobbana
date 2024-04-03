//
import Image from "next/image";
import Link from "next/link";
//images
import logo_icon from "../images/logo.png"
import search_icon from '../images/svg/icons/search.svg'
import like_icon from '../images/svg/icons/like.svg'
import bag_icon from '../images/svg/icons/store_bag.svg'
import menu_icon from '../images/svg/icons/menu.svg'
//components
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header>
      <div className="bg-light_gray w-full py-7 lg:block md:hidden max-md:hidden">
        <div className=" flex justify-end max-w-[1440px] mx-auto px-3">
          <ul className="font-medium text-[18px] text-text_black flex gap-10">
            <li className="after:content-[''] after:absolute after:top-[50%] after:bottom-[50%] after:translate-x-[-50%]  after:translate-y-[-50%] after:w-[2.5px] after:h-4 after:ml-5 after:bg-text_black after:rounded- relative">
              <Link href={'/'} >Find a store</Link>
            </li>
            <li className="after:content-[''] after:absolute after:top-[50%] after:bottom-[50%] after:translate-x-[-50%]  after:translate-y-[-50%] after:w-[2.5px] after:h-4 after:ml-5 after:bg-text_black after:rounded- relative">
              <Link href={'/'} >Help</Link>
            </li>
            <li className="after:content-[''] after:absolute after:top-[50%] after:bottom-[50%] after:translate-x-[-50%]  after:translate-y-[-50%] after:w-[2.5px] after:h-4 after:ml-5 after:bg-text_black after:rounded- relative">
              <Link href={'/'} >Join Us</Link>
            </li>
            <li className="">
              <Link href={'/'} >Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="max-w-[1440px] mx-auto lg:py-3 md:py-7 max-md:py-7 px-3 flex justify-between items-center">
        <Link href={"/"} className="max-sm:w-[160px]  transition-all">
          <Image src={logo_icon} alt="Site Logo" />
        </Link>
        <ul className="font-medium text-[18px] text-text_black flex gap-[30px] lg:flex md:hidden max-md:hidden ">
          <li>
            <Link href={'/'}>New & Featured</Link>
          </li>
          <li>
            <Link href={'/'}>Men</Link>
          </li>
          <li>
            <Link href={'/'}>Women</Link>
          </li>
          <li>
            <Link href={'/'}>Sale</Link>
          </li>
        </ul>
        <div className="flex gap-[42px]">
          <div className="w-[230px] flex bg-inputs_light_gray px-4 py-3 rounded-[30px] gap-[25px]  lg:flex md:hidden max-md:hidden">
            <Button variant={"link"}>
              <Image src={search_icon} alt="search icon " className="cursor-pointer w-[24px] h-[24px]" />
            </Button>
            <input type="text" placeholder="Search" className=" bg-transparent w-full outline-none font-medium text-[18px]" />
          </div>
          <div className="flex items-center md:gap-[30px] sm:gap-[25px] max-sm:gap-[25px]">
            <Button size={"none"} variant={"link"} className="lg:hidden md:block max-md:block">
              <Image src={search_icon} alt="search icon " className="cursor-pointer w-[24px] h-[24px]" />
            </Button>
            <Button size={"none"} variant={"link"} className="lg:block md:hidden max-md:hidden">
              <Image src={like_icon} alt="Liked icon" />
            </Button>
            <Button size={"none"} variant={"link"}>
              <Image src={bag_icon} alt="Bag" />
            </Button>
            <Button variant={"link"} className="lg:hidden md:block max-md:block">
              <Image src={menu_icon} alt="Bag" className="w-[22px]" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
