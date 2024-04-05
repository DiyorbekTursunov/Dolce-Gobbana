"use client"
//components
import { Button } from "@/components/ui/button";
import Image from "next/image";
//images
import plus_icon from '@/components/images/svg/icons/icon_plus.svg'
import minus_icon from '@/components/images/svg/icons/icon_minus.svg'
import trash_icon from '@/components/images/svg/icons/trash_icon.svg'
import { tickets_Type } from "@/types/types";
import CheckOutCard from "@/components/ui_elements/check_out_card";
import { useEffect, useState } from "react";

export default function MyCard() {
    const [tickets, setTickets] = useState<tickets_Type[]>([]);

    useEffect(() => {
        const ticketsData = localStorage.getItem("tickets_data");
        if (ticketsData !== null) {
            setTickets(JSON.parse(ticketsData));
        }
    }, []); // Bo'sh massiv berilganligi sababli useEffect faqat bir marta ishlaydi



    //Incriment tickets count
    function hendelIncriment(ticketName: string) {
        const updatedTickets = tickets.map(ticket => {
            if (ticket.name === ticketName) {
                let ticketCount = ticket.ticket_count;
                return { ...ticket, ticket_count: ticketCount >= 10 ? ticketCount : ticketCount + 1 };
            }
            return ticket;
        });
        setTicketsToStorage(updatedTickets)
    }

    //Decrement tickets count
    function hendelDecrement(ticketName: string) {
        const updatedTickets = tickets.map(ticket => {
            if (ticket.name === ticketName) {
                let ticketCount = ticket.ticket_count;
                return { ...ticket, ticket_count: ticketCount <= 1 ? ticketCount : ticketCount - 1 };
            }
            return ticket;
        });
        setTicketsToStorage(updatedTickets)
    }



    //delete one of tickets
    function hendelDelete(ticketName: string) {
        const deletedTicktes = tickets.filter(ticket => ticket.name !== ticketName)
        setTicketsToStorage(deletedTicktes)
    }




    //set to local storege given value
    function setTicketsToStorage(value: tickets_Type[]) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem("tickets_data", JSON.stringify(value));
        }
        setTickets(value);
    }


    return (
        <main className="max-w-[1240px] mx-auto mt-[62px] px-3">

            {tickets.length ? <>
                <h1 className="font-semibold text-[32px] uppercase mb-8">Review your items</h1>
                <div className="mb-[78px] flex justify-between md:flex-row sm:flex-col gap-3 max-sm:gap-12 max-sm:flex-col">
                    <section className="md:w-[715px] sm:w-full border-[1px] border-[#0000001A] rounded-[6px] py-[20px] px-6  flex flex-col h-full">
                        {tickets.map((ticket: tickets_Type) => (
                            <div className="flex gap-4 pb-6 border-b-[1px] border-[#0000001A] removeLastChild mb-6 max-sm:flex-col" key={ticket.name}>
                                <div className="flex gap-4">
                                    <Image src={ticket.image} alt="Ticket image" className="w-[87px] h-[126px]" />
                                    <div className="flex-col gap-4 hidden max-sm:flex">
                                        <h3 className="text-[20px]">{ticket.name}</h3>
                                        <div className="flex gap-4 text-[20px] items-center font-semibold flex-wrap">
                                            <span className="bg-light_red text-default_red text-[12px] py-[6px] px-[14px] rounded-[62px]">
                                                {ticket.discount}
                                            </span>
                                            <del className="text-[#0000004D]">${ticket.discounted_price}</del>
                                            <span>${ticket.original_price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex items-center justify-between max-sm:hidden">
                                        <h3 className="text-[20px]">{ticket.name}</h3>
                                        <div className="flex gap-4 text-[20px] items-center font-semibold">
                                            <span className="bg-light_red text-default_red text-[12px] py-[6px] px-[14px] rounded-[62px]">
                                                {ticket.discount}
                                            </span>
                                            <del className="text-[#0000004D]">${ticket.discounted_price}</del>
                                            <span>${ticket.original_price * ticket.ticket_count}</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center  justify-between flex-wrap'>
                                        <div className="flex bg-[#F0F0F0] px-[20px] py-[10px] gap-[38px] w-[170px] mb-4 mt-4">
                                            <Button variant={"link"} onClick={() => hendelIncriment(ticket.name)}>
                                                <Image src={plus_icon} alt="plus icon" />
                                            </Button>
                                            <span>{ticket.ticket_count}</span>
                                            <Button variant={"link"} onClick={() => hendelDecrement(ticket.name)}>
                                                <Image src={minus_icon} alt="minus icon" />
                                            </Button>
                                        </div>
                                        <Button className='w-[52px] h-[52px] bg-[#F0F0F0] rounded-[6px]' onClick={() => hendelDelete(ticket.name)}>
                                            <Image src={trash_icon} alt='trash icon' />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <CheckOutCard tickets={tickets} />
                </div>
            </> :
                <div className="h-[400px] w-full flex justify-center items-center">
                    <h1 className="uppercase font-black text-[70px] opacity-40 max-sm:text-[50px]">No Tickets</h1>
                </div>}
        </main>
    )
}
