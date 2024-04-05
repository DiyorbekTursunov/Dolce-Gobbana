"use client"
//components
import Image from 'next/image'
import Link from 'next/link'
//images
import icon_date from '../images/svg/icons/icon_date.svg'
import icon_location from '../images/svg/icons/location_outlined.svg'
import logo from '../images/logo.svg'
import icon_facebook from '../images/svg/logos/facebook.svg'
import icon_instagram from '../images/svg/logos/instagram.svg'
import icon_x_twitter from '../images/svg/logos/x_twitter.svg'

export default function Footer() {
  return (
    <footer className="w-full lg:h-[468px] md:h-[668px] sm:h-[668px] footer-bg bg-cover bg-no-repeat">
      <div className="max-w-[1240px] mx-auto pt-[80px] pb-[60px] px-3 max-sm:px-6">
        <div className='flex lg:flex-row md:flex-col justify-between max-md:flex-col lg:gap-0 md:gap-[46px] max-md:gap-[46px] mb-[80px]'>
          <div className="text-[60px] max-sm:text-[45px] text-[#fff] uppercase flex flex-col leading-[78.12px] font-semibold">
            <span>Save</span>
            <span className={`after:content-[""] footertext-icon after:w-[302px] max-sm:after:w-[250px] after:max-sm:left-3 after:bg-right after:h-[82px] after:z-0 after:bg-no-repeat after:absolute after:left-9 relative`}>the date</span>
          </div>
          <div className='text-[#fff] uppercase lg:w-[660px] md:max-w-full flex flex-col justify-end'>
            <div className='flex justify-between mb-8 border-b-[2px] border-b-[#D9D9D9] items-end'>
              <Image src={icon_date} alt='Date icon' className='pb-1' />
              <p className='font-semibold text-[40px]  max-sm:text-[28px]'>October 7-9</p>
            </div>
            <div className='flex justify-between  border-b-[2px] border-b-[#D9D9D9] items-end'>
              <Image src={icon_location} alt='Date icon' className='w-[33px] h-[36px] pb-1' />
              <div className='max-w-[519px] text-end'>
                <p className='font-semibold text-[22px] max-sm:text-[15px]'>
                  Miami Event Venues FONTAINEBLEAU
                  CONFERENCE CENTER
                  <span className='inline-block mx-1'>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.2959 0.511721L19.0459 7.26172C19.1508 7.36624 19.234 7.49043 19.2908 7.62717C19.3476 7.76392 19.3768 7.91053 19.3768 8.0586C19.3768 8.20666 19.3476 8.35327 19.2908 8.49002C19.234 8.62676 19.1508 8.75095 19.0459 8.85547L12.2959 15.6055C12.0846 15.8168 11.7979 15.9355 11.4991 15.9355C11.2002 15.9355 10.9135 15.8168 10.7022 15.6055C10.4908 15.3941 10.3721 15.1075 10.3721 14.8086C10.3721 14.5097 10.4908 14.2231 10.7022 14.0117L15.5313 9.18266L1.75 9.18266C1.45163 9.18266 1.16548 9.06413 0.954505 8.85315C0.743527 8.64217 0.625 8.35603 0.625 8.05766C0.625 7.75929 0.743527 7.47314 0.954505 7.26216C1.16548 7.05118 1.45163 6.93266 1.75 6.93266L15.5313 6.93266L10.7013 2.1036C10.4899 1.89225 10.3712 1.60561 10.3712 1.30672C10.3712 1.00784 10.4899 0.721192 10.7013 0.509847C10.9126 0.298502 11.1992 0.179768 11.4981 0.179768C11.797 0.179768 12.0837 0.298502 12.295 0.509847L12.2959 0.511721Z" fill="white" />
                    </svg>
                  </span>
                  Fourth Floor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex max-sm:flex-col max-sm:items-start max-sm:gap-[24px] justify-between items-end'>
          <div>
            <Link href={"/"} className=''>
              <Image src={logo} alt='Site logo' className='' />
            </Link>
            <div className='font-medium text-[13px] text-[#46A4EF] flex gap-[30px] uppercase mt-7'>
              <Link href={'/'} target='_blank'>Privacy Policy</Link>
              <Link href={'/'} target='_blank'>terms of service</Link>
            </div>
          </div>
          <div className='flex gap-4'>
            <Link href={'/'} target='_blank'>
              <Image src={icon_facebook} alt='facebook icon' />
            </Link>
            <Link href={'/'} target='_blank'>
              <Image src={icon_instagram} alt='instagram icon' />
            </Link>
            <Link href={'/'} target='_blank'>
              <Image src={icon_x_twitter} alt='x twitter icon' />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}