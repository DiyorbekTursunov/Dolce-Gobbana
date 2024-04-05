//components
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ProfileForm } from '@/components/ui_elements/form'
import Link from 'next/link'
//images
import icon_passport from '@/components/images/svg/icons/passpord.svg'
import icon_screen from '@/components/images/svg/icons/screen_map.svg'
import Image from 'next/image'

export default function Login() {
    return (
        <main className='max-w-[1240px] mx-auto mt-[62px] mb-[94px] px-3'>
            <h1 className='text-[32px] max-sm:text-[24px] font-semibold uppercase mb-[32px]'>Login</h1>
            <div className='flex md:flex-row sm:flex-col md:items-start sm:items-center max-sm:items-center max-sm:flex-col gap-[40px]'>
                <section>
                    <form className='max-w-[685px]'>
                        <p className='mb-6'>Don't have an account? <Link href={"/register"} className='text-primary font-semibold underline-offset-4 underline'>Sing Up</Link></p>
                        <ProfileForm loginType={"login"}/>
                        <p className='mt-6'>I agree that Netevia may collect, process, share, and use my personal information (e.g. name, email address, etc.) provided by me to create my account and purchase services or products offered by Netevia and its partners. I understand that my personal information will be processed by Netevia in the United States in accordance with the Netevia Privacy Policy.</p>
                        <div className="flex items-center space-x-2 mt-[33px]">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I agree to the above terms.
                            </label>
                        </div>
                        <div className='flex gap-6 mt-6'>
                            <Button variant={"outline_dark"} className='w-full py-[20px]'>
                                Cancel
                            </Button>
                            <Button variant={"default"} className='w-full py-[20px] flex gap-[15px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                                    <path d="M6.54508 10.8749L2.37508 6.70492L0.955078 8.11492L6.54508 13.7049L18.5451 1.70492L17.1351 0.294922L6.54508 10.8749Z" fill="white" />
                                </svg>
                                Sign In
                            </Button>
                        </div>
                    </form>
                    <div>

                    </div>
                </section>
                <section className='max-w-[356px] bg-[#EFF6FF] py-[20px] p-6 rounded-[6px] h-full mt-[45px] max-sm:w-full'>
                    <ul className='flex flex-col gap-6'>
                        <li className='flex gap-6'>
                            <Image src={icon_passport} alt='icon passport' />
                            <span>Purchase a credential to attend</span>
                        </li>
                        <li className='flex gap-6'>
                            <Image src={icon_screen} alt='icon screen' />
                            <span>Apply to speak, perform, or screen</span>
                        </li>
                        <li className='flex gap-6'>
                            <Image src={icon_screen} alt='icon screen' />
                            <span>Plan and schedule your event</span>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
