"use client"
//components
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
//images
import close_icon from '../images/svg/icons/close_icon.svg'
import logo from '../images/logo.svg'
import create_account from '../images/svg/icons/create_account.svg'
import shop_bag from '../images/svg/icons/shop_bag.svg'
import { useRouter } from 'next/navigation'

interface NavbarMenuProps {
    setmenuIsOpen: (isOpen: boolean) => void
  }
  

export default function NavbarMenu({ setmenuIsOpen }: NavbarMenuProps) {
    const router = useRouter()

    return (
        <div className='md:hidden sm:block w-full h-screen fixed bg-[#000] py-6 px-3 z-50'>
            <div className='flex justify-between'>
                <Button onClick={() => setmenuIsOpen(false)}>
                    <Image src={close_icon} alt='close icon' />
                </Button>
                <Link href={'/'} onClick={() => setmenuIsOpen(false)}>
                    <Image src={logo} alt='site logo' className='w-[116.26px]' />
                </Link>
            </div>
            <div className='flex w-full justify-center max-sm:justify-start mt-20 flex-wrap gap-6'>
                <Button className='px-[40px] py-[13px] max-sm:px-[20px] max-sm:py-[10px] max-sm:text-[14px] flex gap-2 font-semibold text-[16px]' variant="outline" onClick={() => { router.push("/register"), setmenuIsOpen(false) }}>
                    <Image src={create_account} alt='Create an account icon' className='max-sm:w-[20px]' />
                    Create an account
                </Button>
                <Button className='px-[40px] py-[13px] max-sm:px-[20px] max-sm:py-[10px] max-sm:text-[14px] flex gap-2 font-semibold text-[16px]' variant="outline" onClick={() => { router.push("/my_card"), setmenuIsOpen(false) }}>
                    <Image src={shop_bag} alt='Shop Bag icon' className='max-sm:w-[20px]' />
                    Card
                </Button>
            </div>
        </div>
    )
}
