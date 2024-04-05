"use client"

//components
import { Button } from "../ui/button";
import Image from "next/image";
//images
import icon_card from '../images/svg/icons/shop_bag.svg'
import arrow_right_icon from '../images/svg/icons/arrow_right.svg'

interface purchaseTitleProps {
    purchase_title: string,
    original_price: number
    ticket_count: number,
    name: string,
    TicketData: Function
}

interface Ticket {
    name: string;
    // Qolgan Ticket maydonlari
}


export default function PurchaseCard({ purchase_title, original_price, ticket_count, name, TicketData }: purchaseTitleProps) {
    let tickets: any[] = [];

    const ticketsData = localStorage.getItem("tickets_data");
    if (ticketsData !== null) {
        tickets = JSON.parse(ticketsData);
    }

    function addToCardHandel() {
        const newTicket = TicketData();
        const isUnique = !tickets.find(ticket => ticket.name === newTicket.name);

        if (isUnique) {
            tickets.push(newTicket);
            setTickets();
        }
    }

    //Add to local storage
    function setTickets() {
        localStorage.setItem("tickets_data", JSON.stringify(tickets));
    }
    return (
        <div className="border-[1px] border-[#0000001A] rounded-[6px] px-6 py-[20px] w-[379px] max-sm:w-full">
            <h2 className="text-[24px] font-semibold mb-6">{name}</h2>
            <div className="flex justify-between mb-[20px]">
                <span className="text-[#00000099]">{purchase_title}</span>
                <span className="font-semibold">${original_price}</span>
            </div>
            <hr className="mb-[20px]" />
            <div className="flex justify-between mb-6">
                <span className="text-[20px]">Total</span>
                <span className="text-[24px] font-semibold">${original_price * ticket_count}</span>
            </div>
            <div className="flex flex-col gap-6">
                <Button variant={"default"} className={`py-[20px] gap-[15px] `} onClick={() => addToCardHandel()}>
                    <Image src={icon_card} alt="Shop card icon" />
                    Add to Cart
                </Button>
                <Button variant={"outline_dark"} className="py-[20px] gap-[15px]" >
                    Checkout as a guest
                    <Image src={arrow_right_icon} alt="Arrow right icon" />
                </Button>
            </div>
        </div>
    )
}
