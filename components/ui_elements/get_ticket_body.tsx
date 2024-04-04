"use client"

//components
import Image from "next/image";
import { Button } from "../ui/button";
//images
import plus_icon from '../images/svg/icons/icon_plus.svg'
import minus_icon from '../images/svg/icons/icon_minus.svg'
import PurchaseCard from "./purchase_card";
import { ticket_data_general_attendees, ticket_data_press_pass, ticket_data_startup_pass, ticket_data_vip_pass } from "@/helpers/data/tickets_data";

type GetTicketBodyProps = {
    SelectedButton: string;
}

export default function GetTicketBody({ SelectedButton }: GetTicketBodyProps) {
    function TicketData() {
        switch (SelectedButton) {
            case "VIP Pass":
                return ticket_data_vip_pass
            case "General Attendees":
                return ticket_data_general_attendees
            case "Startup Pass":
                return ticket_data_startup_pass
            case "Press Pass":
                return ticket_data_press_pass
            default:
                ticket_data_vip_pass;
        }
    }

    const { name, image, discounted_price, original_price, discount, description, ticket_count, Benefits, purchase_title, startup_pass_description_and, startup_pass_description, isFree }: any = TicketData()

    return (
        <section className="mb-[77px]">
            <header className="flex md:flex-row sm:flex-col max-sm:flex-col  gap-12 mb-[40px]">
                <div className="flex justify-evenly">
                    <Image src={image} alt="Ticket image" className="max-w-[260px] h-[378.06px]" />
                    <div className="md:hidden sm:block max-sm:hidden">
                        <h2 className="text-[32px] font-semibold mb-4">{name}</h2>
                        {isFree && isFree ?
                            <span className="text-[32px] items-center font-semibold">
                                ${original_price}
                            </span>
                            :
                            <div className="flex gap-4 text-[32px] items-center font-semibold">
                                <span>${original_price}</span>
                                <del className="text-[#0000004D]">${discounted_price}</del>
                                <span className="bg-light_red text-default_red text-[16px] py-[6px] px-[14px] rounded-[62px]">
                                    {discount}
                                </span>
                            </div>}
                        <div className="flex bg-[#F0F0F0] px-[20px] py-[10px] gap-[38px] w-[170px] mb-4 mt-4">
                            <Button variant={"link"}>
                                <Image src={plus_icon} alt="plus icon" />
                            </Button>
                            <span>{ticket_count}</span>
                            <Button variant={"link"}>
                                <Image src={minus_icon} alt="minus icon" />
                            </Button>
                        </div>
                    </div>
                </div>
                <main className="max-w-[775px] ">
                    <div className="md:block sm:hidden">
                        <h2 className="text-[32px] font-semibold mb-4">{name}</h2>
                        {isFree && isFree ?
                            <span className="text-[32px] items-center font-semibold ">
                                ${original_price}
                            </span>
                            :
                            <div className="flex gap-4 text-[32px] items-center font-semibold">
                                <span>${original_price}</span>
                                <del className="text-[#0000004D]">${discounted_price}</del>
                                <span className="bg-light_red text-default_red text-[16px] py-[6px] px-[14px] rounded-[62px]">
                                    {discount}
                                </span>
                            </div>}
                        <div className="flex bg-[#F0F0F0] px-[20px] py-[10px] gap-[38px] w-[170px] mb-4 mt-4">
                            <Button variant={"link"}>
                                <Image src={plus_icon} alt="plus icon" />
                            </Button>
                            <span>{ticket_count}</span>
                            <Button variant={"link"}>
                                <Image src={minus_icon} alt="minus icon" />
                            </Button>
                        </div>
                    </div>
                    <p className="mb-4">{description}</p>

                    {startup_pass_description && <ul className="list-disc list-outside pl-6 flex flex-col gap-2 mb-4">
                        {startup_pass_description.map((value: any) => (
                            <li key={value.id}>
                                <span>{value.title}</span>
                            </li>
                        ))}
                    </ul>}
                    <div className="bg-[#EFF6FF] py-[16px] px-[28px] rounded-[6px]">
                        <p className="flex md:flex-row md:justify-center sm:flex-col max-sm:flex-col sm:items-center max-sm:items-center gap-[6px] font-medium">
                            To secure your pass, simply click on
                            <Button variant={"link"} className="text-[#197AC9] flex flex-wrap">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.457 9.33317C13.082 9.33317 13.632 8.9915 13.9154 8.47484L16.8987 3.0665C17.207 2.5165 16.807 1.83317 16.1737 1.83317H3.84036L3.05703 0.166504H0.332031V1.83317H1.9987L4.9987 8.15817L3.8737 10.1915C3.26536 11.3082 4.06536 12.6665 5.33203 12.6665H15.332V10.9998H5.33203L6.2487 9.33317H12.457ZM4.63203 3.49984H14.757L12.457 7.6665H6.60703L4.63203 3.49984ZM5.33203 13.4998C4.41536 13.4998 3.6737 14.2498 3.6737 15.1665C3.6737 16.0832 4.41536 16.8332 5.33203 16.8332C6.2487 16.8332 6.9987 16.0832 6.9987 15.1665C6.9987 14.2498 6.2487 13.4998 5.33203 13.4998ZM13.6654 13.4998C12.7487 13.4998 12.007 14.2498 12.007 15.1665C12.007 16.0832 12.7487 16.8332 13.6654 16.8332C14.582 16.8332 15.332 16.0832 15.332 15.1665C15.332 14.2498 14.582 13.4998 13.6654 13.4998Z" fill="#197AC9" />
                                </svg>
                                Add to Cart
                            </Button>
                            below and proceed with your purchase.
                        </p>
                    </div>
                    {startup_pass_description_and && <p className="mt-4">startup_pass_description_and</p>}
                </main>
            </header>
            <footer className="flex md:flex-row sm:flex-col max-sm:flex-col md:gap-0 sm:gap-6 max-sm:gap-6  justify-between">
                <div>
                    <h2 className="font-semibold text-[24px] mb-4">Benefits:</h2>
                    <ul className="list-disc list-outside pl-6 flex flex-col gap-2">
                        {Benefits.map((value: any) => (
                            <li key={value.id}>
                                <span>{value.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <PurchaseCard purchase_title={purchase_title} original_price={original_price} ticket_count={ticket_count} />
            </footer>
        </section>
    )
}
