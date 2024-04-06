"use client"
//components
import { Button } from "../ui/button";
import Image from "next/image";
//images
import icon_card from '../images/svg/icons/shop_bag.svg'
import arrow_right_icon from '../images/svg/icons/arrow_right.svg'
import { useRouter } from "next/navigation";

interface purchaseTitleProps {
    purchase_title: string,
    original_price: number
    ticket_count: number,
    discounted_price: number,
    discount: string,
    name: string,
}




export default function CheckOutCard({ tickets }: { tickets: purchaseTitleProps[] }) {
    const router = useRouter()

    function getTotalPrice() {
        let total_price = 0;
        tickets.forEach(ticket => total_price += ticket.original_price * ticket.ticket_count);
        return total_price;
    }


    return (
        <section className="border-[1px] border-[#0000001A] rounded-[6px] px-6 py-[20px] md:w-[379px] sm:w-full h-full">
            <h2 className="text-[20px] font-semibold mb-6">Total</h2>
            <div className="flex justify-between mb-[20px]">
                <span className="text-[#00000099]">Subtotal</span>
                <span className="font-semibold">$696.00</span>
            </div>
            <div className="flex justify-between mb-[20px]">
                <span className="text-[#00000099]">Sales tax</span>
                <span className="font-semibold">$122.00</span>
            </div>
            <hr className="mb-[20px]" />
            <div className="flex justify-between mb-6">
                <span className="text-[20px]">Total</span>
                <span className="text-[24px] font-semibold">${getTotalPrice()}</span>
            </div>
            <div className="flex flex-col gap-6">
                <Button variant={"default"} className={`py-[20px] gap-[15px] `} onClick={() => router.push(`/check_out/`)}>
                    <Image src={icon_card} alt="Shop card icon" />
                    Sign In and Checkout
                </Button>
                <Button variant={"outline_dark"} className="py-[20px] gap-[15px]" onClick={() => router.push(`/check_out/`)}>
                    Checkout as a guest
                    <Image src={arrow_right_icon} alt="Arrow right icon" />
                </Button>
            </div>
        </section>
    )
}
