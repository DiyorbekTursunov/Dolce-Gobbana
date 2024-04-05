"use client"
//components
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
//images
import logo from '../images/logo.svg'
import create_account from '../images/svg/icons/create_account.svg'
import shop_bag from '../images/svg/icons/shop_bag.svg'
import menu_icon from '../images/svg/icons/menu_filled.svg'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="w-full bg-[#000]">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center py-6 px-3">
        <Button variant={'link'} className='md:hidden sm:block max-sm:block'>
          <Image src={menu_icon} alt='Menu Icon' />
        </Button>
        <Link href={'/'}>
          <Image src={logo} alt='site_logo' className='w-[126px]' />
        </Link>
        <div className='gap-6 md:flex sm:hidden max-sm:hidden'>
          <Button className='px-[40px] py-[13px] flex gap-2 font-semibold text-[16px]' variant="outline" onClick={() => router.push("/register")}>
            <Image src={create_account} alt='Create an account icon' />
            Create an account
          </Button>
          <Button className='px-[40px] py-[13px] flex gap-2 font-semibold text-[16px]' variant="outline" onClick={() => router.push("/my_card")}>
            <Image src={shop_bag} alt='Shop Bag icon' />
            Card
          </Button>
        </div>
        <Button variant={'link'} className='md:hidden sm:block max-sm:block' onClick={() => router.push("/my_card")}>
          <Image src={shop_bag} alt='Shop Bag icon' />
        </Button>
      </div>
    </nav>
  )
}