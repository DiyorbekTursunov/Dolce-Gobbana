"use client"
//components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
//types
import { tickets_Type } from '@/types/types'
//hooks
import { useEffect, useState } from 'react'
//images
import lock_outlined_icon from '@/components/images/svg/icons/lock_outlined.svg'
import Maestro from '@/components/images/svg/icons/Maestro.png'
import Mastercard from '@/components/images/svg/icons/Mastercard.png'
import PayPal from '@/components/images/svg/icons/PayPal.png'
import slesh_icon from '@/components/images/svg/icons/slesh_icon.svg'
import chevron_left_filled from '@/components/images/svg/icons/chevron_left_filled.svg'

export default function CheckOut() {
    const [tickets, setTickets] = useState<tickets_Type[]>([]);
    const [descrIsOpen, setdescrIsOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const ticketsData = localStorage.getItem("tickets_data");
        if (ticketsData !== null) {
            setTickets(JSON.parse(ticketsData));
        }
    }, []); // Bo'sh massiv berilganligi sababli useEffect faqat bir marta ishlaydi


    function getTotalPrice() {
        let total_price = 0;
        tickets.forEach(ticket => total_price += ticket.original_price * ticket.ticket_count);
        return total_price;
    }




    return (
        <main className="max-w-[1240px] mx-auto mt-[62px] px-3">
            <h1 className="font-semibold text-[32px] uppercase mb-[50px]">Checkout</h1>
            <div className="mb-[78px] flex justify-between md:flex-row sm:flex-col md:gap-3 sm:gap-6 max-sm:gap-12 max-sm:flex-col h-full">
                <form className=" md:w-[715px] sm:w-full flex flex-col gap-[40px] h-full">
                    <div className="border-[1px] border-[#0000001A] rounded-[6px] py-[20px] px-6  flex flex-col h-full">
                        <h2 className='font-semibold text-[24px] mb-[20px]'>Payment Details</h2>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center gap-2 bg-[#EFF6FF] py-3 px-4 rounded-[6px]'>
                                <Image src={lock_outlined_icon} alt='lock outlined icon' />
                                <span>Payments are secured. We accept</span>
                                <Image src={Mastercard} alt='Mastercard icon' />
                                <Image src={Maestro} alt='Maestro icon' />
                                <Image src={PayPal} alt='PayPal icon' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="card number" className='text-[12px]'>Card number</label>
                                <Input placeholder="0000 0000 0000 0000" maxLength={16} type='number' id='card number' required />
                            </div>
                            <div className="flex h-full items-center gap-[20px]">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="card expiry date" className='text-[12px]'>Card expiry date</label>
                                    <Input placeholder="00/00" maxLength={4} id='card expiry date' required />
                                </div>
                                <Image src={slesh_icon} alt='slesh icon' className='mt-3' />
                                <div className="flex flex-col w-full">
                                    <label htmlFor="card CVC" className='text-[12px]'>CVC</label>
                                    <Input placeholder="CVC" maxLength={4} id='card CVC' required />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="card Name" className='text-[12px]'>Card holder</label>
                                <Input placeholder="Name Surname" id='card Name' required />
                            </div>
                            <div className="flex flex-col">
                                <Input placeholder="Address*" autoComplete="Uzbekistan" id='Address' required />
                            </div>
                            <div className='flex h-full max-sm:flex-col items-center gap-[20px]'>
                                <Input placeholder="Country*" autoComplete="Uzbekistan" id='Country' required />
                                <Input placeholder="City*" id='City' required />
                            </div>
                            <div className='flex max-sm:flex-col h-full items-center gap-[20px]'>
                                <Input placeholder="State/Province*" id='Province' required />
                                <Input placeholder="Zip/Postal Code*" id='Zip/Postal Code' type="number" required />
                            </div>
                            <div className="flex flex-col">
                                <Input placeholder="Phone number (include country code)*" id='Phone number ' type="number" required />
                            </div>
                        </div>
                    </div>
                    <Button variant={"default"} className="w-full py-[20px] mt -[40px]" onClick={() => router.push("/")}>Continue shopping</Button>
                </form>
                <section className='md:w-[467px] py-[20px] px-6 border-[1px] border-[#0000001A] rounded-[6px] h-full'>
                    <h2 className='font-semibold text-[24px]'>Item Description</h2>
                    <div>
                        {tickets.map(ticket => (
                            <div className="flex items-center font-semibold justify-between mt-[25px]" key={ticket.name}>
                                <span className=''>{ticket.name}</span>
                                <div className='flex gap-3'>
                                    <span>${ticket.original_price}</span>
                                    <del className="text-[#0000004D]">${ticket.discounted_price}</del>
                                    <span className="bg-light_red text-default_red text-[16px]  px-[14px] rounded-[62px]">
                                        {ticket.discount}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <hr className='mt-[20px]' />
                        <div className='flex justify-between mt-[22px]'>
                            <span className='text-[20px] font-medium'>Total cost</span>
                            <span className='text-[24px] font-semibold'>${getTotalPrice()}</span>
                        </div>
                    </div>
                </section>
            </div>
            <div className='w-full border-[1px] border-[#0000001A] rounded-[6px]  p-[20px] mb-6'>
                <div className='flex justify-between'>
                    <h2 className='text-[24px] font-semibold'>Terms and conditions</h2>
                    <Button onClick={() => setdescrIsOpen(!descrIsOpen)}>
                        <Image src={chevron_left_filled} alt='chevron_left_filled' className={`${descrIsOpen ? 'rotate-0' : 'rotate-180'}`} />
                    </Button>
                </div>
                {descrIsOpen && (
                    <div>
                        <div className="mt-6">
                            <p className="mb-3">SXSW, LLC (“SXSW”) is proud to produce our family of events in-person including, without limitation, SXSW® Conference & Festivals and SXSW EDU® Conference & Festival collectively referred to herein as the “Event(s)”.</p>
                            <p className="mb-6">These SXSW Participation and Credentials Terms and Conditions (the “Terms”) apply to (i) you and any individual or entity that you are engaging in a transaction on behalf of to participate in any SXSW Events (“you” “your” or “Participant”), (ii) such Participant’s application for involvement in the Events (“Application(s)”) and (iii) Participant’s registration, attendance, participation, and/or enrollment, including, without limitation, purchase and/or possession of any SXSW Event entry or access credentials or permissions whether physical or digital, such as wristbands for the SXSW Music Festival and/or SXSW Film Festival (collectively referred to as “Wristbands”), badges, tickets, passes, and giveaways (Wristbands, tickets, passes, permissions and badges are collectively referred to herein as “Credentials”). By clicking “I Agree to the Above Terms & Conditions” below, by using any other electronic mechanism presented to signify acceptance, or by obtaining Credentials you acknowledge and agree to these Terms.</p>
                            <h2 className="text-[18px] font-semibold mb-3">NOTICE REGARDING LIABILITY, ARBITRATION, AND CLASS ACTION WAIVER</h2>
                            <ul className="list-disc">
                                <li className="ml-6">
                                    <p>These Terms contain important information regarding limitations of our liability, your indemnification obligations, the law governing, and mandatory dispute resolution procedures related to, your Credentials, application and/or participation in the Event(s). These Terms also include a class action waiver and require binding arbitration on an individual basis to resolve disputes, rather than lawsuits in court and jury trials.</p>
                                </li>
                            </ul>
                            <ul className="mt-3 ml-6 flex flex-col gap-3">
                                <li>
                                    <p>a. New Credentials. Paragraphs 1-23 herein apply in full if Participant is obtaining Credentials for an Event occurring in 2024.</p>
                                </li>
                                <li>
                                    <p>b. New Credentials. Paragraphs 1-23 herein apply in full if Participant is obtaining Credentials for an Event occurring in 2024.</p>
                                </li>
                                <li>
                                    <p>C. B. Deferred Credentials. If you purchased Credentials for the 2020 Event and are deferring those Credentials to 2024 (“Deferred Credentials”), these Terms apply to you, provided that any term more favorable to you contained in the 2020 Participation and Credentials Terms and Conditions (the “2020 Terms”) than its counterpart in these Terms will apply to you. The 2020 Terms are available here for SXSW <span className="font-medium"><Link href={"https://www.sxsw.com/wp-content/uploads/2020/10/Participation-Credentials-Terms-2020-SXSW.png"}>https://www.sxsw.com/wp-content/uploads/2020/10/Participation-Credentials-Terms-2020-SXSW.png</Link></span> and here for SXSW EDU:<span className="font-medium"><Link href={" https://www.sxswedu.com/wp-content/uploads/2020/10/Participation-Credentials-Terms-2020-EDU.png"}> https://www.sxswedu.com/wp-content/uploads/2020/10/Participation-Credentials-Terms-2020-EDU.png</Link></span>..Notwithstanding the foregoing, your deferred credential is non - transferable.</p >
                                </li >
                                <li>
                                    <p>d. C. Applications. If Participant is not purchasing Credentials or using their Deferred Credentials and is only applying for a SXSW program, including, without limitation, an awards program, competition, or other opportunity to demonstrate, display or present an original idea, concept or other work, then only Paragraphs 1-3 and 9-23 below apply to Participant.</p>
                                </li>
                                <li>
                                    <p>e. Official SXSW Credentials and Applications.</p>
                                </li>
                                <li>
                                    <p>f. a. Credentials. Credentials. SXSW, its agents and representatives are the sole creators, sellers and distributors of SXSW Credentials. Any Credentials not created by and legally acquired from SXSW or its authorized agents or representatives will be considered fraudulent and invalid, and subject to revocation. SXSW reserves the right to pursue any and all legal action or remedy available against any person or entity involved in the actual or attempted creation, dissemination or use of an unauthorized Credential.</p>
                                </li>
                                <li>
                                    <p>g. b. Applications. Any application forms, submission requests, proposals or other offers not located on official SXSW channels are not official SXSW applications and will not be considered or fulfilled.</p>
                                </li>
                                <li>
                                    <p>h. Refund & Revocation Policy.</p>
                                </li>
                                <li>
                                    <p>i. A. All Credentials are the sole property of SXSW. As always, if Participant violates these Terms (and/or any terms cross-referenced herein), SXSW has the right, in its sole discretion and at any time determined by SXSW, to cancel, revoke, or refuse all transactions with any individual or entity, including, without limitation, the following: Credentials, purchases, and/or hotel reservations made through SXSW. SXSW will not be responsible for any penalty, fee, loss, or expense incurred by Participant that might result from such action, regardless of whether such penalty, fee, loss or expense was foreseeable or SXSW was advised of the same.</p>
                                </li>
                                <li>
                                    <p>j. B. SXSW does not issue refunds under any circumstances, including, without limitation, for Application fees or Credentials transactions. Any and all payments made to SXSW are not refundable for any reason, including, without limitation, failure or inability to use Credentials due to illness, acts of God, public health crisis, disease, virus, pandemics, epidemics, government restrictions or shut downs, earthquakes, hurricanes, floods, other natural disasters, wars, riots, insurrections, civil unrest, acts or threats of terrorism, cyber-attacks, government actions, travel-related problems, loss of employment and/or duplicate purchases. SXSW will not issue refunds, deferrals or credits for Credentials that have been revoked.</p>
                                </li>
                                <li>
                                    <p>k. C. If an Event is canceled in its entirety for any reason, then you may defer your Credentials to the next SXSW Event of the same type for which your Credentials were purchased. If an Event is canceled in its entirety for any reason, you further agree that aside from obtaining a deferral credit for your Credentials, you will have no remedy against SXSW, at law, in equity or otherwise, including, without limitation, for a refund of payments made, expenses incurred, or any actual, consequential, or punitive loss or damages of any kind, regardless of whether such loss or damage was foreseeable or SXSW was advised of the same.</p>
                                </li>
                                <li>
                                    <p>i. D. If an Event in its entirety is postponed for any reason, your Credentials will be valid for the rescheduled dates in the same calendar year for such Event. If an Event in its entirety is postponed for any reason, you further agree that aside from your Credentials being valid for the rescheduled dates, you will have no remedy against SXSW, at law, in equity or otherwise, including, without limitation, for a refund of payments made, expenses incurred, or any actual, consequential, or punitive loss or damages of any kind, regardless of whether such loss or damage was foreseeable or SXSW was advised of the same.</p>
                                </li>
                                <li>
                                    <p>m. E. Unused Credentials have no monetary value and cannot be credited to future years or events unless the Event in its entirety is canceled or postponed and you defer your Credentials to the next scheduled Event.</p>
                                </li>
                                <li>
                                    <p>n. F. SXSW will not issue refunds or credits due to failure to redeem a discount coupon during the registration or application process.</p>
                                </li>
                                <li>
                                    <p>o. G. Discounted Credentials prices are based on the date payment is received by SXSW. Prices are subject to change at any time with or without notice.</p>
                                </li>
                                <li>
                                    <p>p. H. Lost or stolen Credentials will not be replaced. If Credentials are lost or stolen, new Credentials will need to be purchased at the full price in effect at that time for a Participant’s continued access to the Events, including, without limitation, showcases, parties and conference content.</p>
                                </li>
                                <li>
                                    <p>q. I. Use of Credentials by anyone other than the authorized individual will result in revocation of the Credentials without a refund.</p>
                                </li>

                                <li>
                                    <p>r. Credentials Transfer Policy. SXSW Credentials are issued to, can be picked up by, and used by only the Participant named in the registration.</p>
                                </li>
                                <li>
                                    <p>s. A. Up to twenty-eight (28) days prior to the start date of an Event, SXSW will accept a request to transfer Credentials by changing the Participant name on SXSW EDU and SXSW Platinum, Interactive, Film or Music Credentials for a processing fee of $125.00 USD per Credential transferred.</p>
                                </li>
                                <li>
                                    <p>t. B. Within twenty-eight (28) days of the start date of an Event, the Participant name change processing fee will be $175.00 USD per Credential transferred. Event Credentials are non-transferable after they have been picked up.</p>
                                </li>
                                <li>
                                    <p>u. C. Credentials may not be transferred and name changes will not be made after Credentials have been issued.</p>
                                </li>
                                <li>
                                    <p>v. D. Notwithstanding the provisions above, Wristbands are non-transferrable.</p>
                                </li>
                                <li>
                                    <p>w. Credentials Required for Entry. For security reasons, and to allow entry into SXSW Event(s), Participant must wear, possess and present their Credentials at Events as follows: (i) badges must be on the SXSW-issued lanyard around Participant’s neck while participating in any Event; (ii) Wristbands must be securely affixed to the Participant’s wrist and remain on the Participant’s wrist throughout the SXSW Events; and (iii) digital Credentials for the Events must be presented by the Participant on a digital device in their possession. No other laminates may be worn on the SXSW lanyard for the badge to be valid. If Credentials are not worn or presented correctly by a Participant, SXSW reserves the right to deny that Participant’s entry into SXSW Events.</p>
                                </li>
                                <li>
                                    <p>x. Entry and Restrictions. SXSW Credentials allow the Participant entry or other access to specific defined Events, but do not guarantee admission or other access to all elements of an Event. Event admission and participation are subject to certain limitations, including, without limitation, venue capacity, geoblocking, technical limitations and age restrictions in compliance with state and local laws. Age restrictions and capacity are specific to each venue and are set by relevant local, state and federal authorities. Venues may each have their own restrictions limiting entry unless Credential holder complies with certain Venue policies (e.g., masking), or restricting entry with certain foods, beverages, or other items such as chairs or bags that are non-transparent or do not fit specified dimensions. Wristbands are valid Credentials for specific Events applicable to the Wristband type, but will not afford the Participant access to the SXSW Trade Show, conference and keynote sessions, or other SXSW conference activities, unless SXSW specifies otherwise.</p>
                                </li>
                                <li>
                                    <p>y. Credentials Cannot be Prizes. SXSW Credentials may not be used as a prize or incentive in any form of promotion, contest, game, or sweepstakes without advance written approval from SXSW.</p>
                                </li>
                                <li>
                                    <p>z. No Tampering with Credentials. Tampering with any Credentials, including, without limitation, Wristbands (e.g., stretching, tearing, cutting, taping, etc.) is not permitted. If tampering is evident, the applicable Credentials will be invalidated and may be confiscated, and Participant will not be allowed entry to any/all SXSW venues and/or Events where the Credentials are required. No refunds will be issued in such case.</p>
                                </li>
                                <li>
                                    <p>aa. Content Use; Anti-Piracy.</p>
                                </li>
                                <li>
                                    <p>ab. A. Participant is strictly prohibited from copying, republishing, downloading, transmitting, modifying, renting, leasing, loaning, selling, assigning, distributing, recording, licensing, sublicensing, reverse engineering, or creating any derivative works based on any content delivered by SXSW as part of the Events, or otherwise using any Event content in a manner that does not comply with these Terms, the SXSW Terms of Use, any applicable laws or regulations, or other content usage guidelines provided by SXSW in writing, unless Participant has obtained express permission from SXSW and any applicable rightsholder(s). Any Participant found in violation of this or any other provision of the SXSW Terms of Use (available here: https://www.sxsw.com/terms-of-use/) or the SXSW EDU Terms of Use (available here: https://www.sxswedu.com/terms-of-use/) will be subject to any and all legal remedies available to SXSW and/or any applicable rightsholder(s) of the content at issue.</p>
                                </li>
                                <li>
                                    <p>a. b. Participant agrees to not use any device, software, internet site, web-based service, or other means to remove, alter, bypass, avoid, interfere with, or circumvent any copyright, trademark, or other proprietary notices marked on the Event content or any digital rights management mechanism, device, or other content protection or access control measure associated with the Event content, including, without limitation, any applicable geo-filtering mechanisms.</p>
                                </li>
                                <li>
                                    <p>ad. b. Participant agrees to not use any device, software, internet site, web-based service, or other means to remove, alter, bypass, avoid, interfere with, or circumvent any copyright, trademark, or other proprietary notices marked on the Event content or any digital rights management mechanism, device, or other content protection or access control measure associated with the Event content, including, without limitation, any applicable geo-filtering mechanisms.</p>
                                </li>
                                <li>
                                    <p>ee. Image Release. Photographs and/or audio/video recordings taken at the Events by SXSW, or others on behalf of SXSW, may include Participant’s image, name, voice and/or likeness. By attending and/or participating in the Events, Participant hereby grants SXSW permission to perpetually use, and to sublicense to third-parties, Participant’s photograph, image, likeness, voice and statements (whether in writing or orally) for any purpose, including, without limitation, commercial purposes, without compensation or credit to the Participant, in any and all media, worldwide, now known or hereafter devised.</p>
                                </li>
                                <li>
                                    <p>af. SXSW Lost and Found. SXSW is not responsible for lost or damaged items. As a courtesy only, and without assuming any legal duty or liability, a Lost and Found may be located at Registration during the Events, which is where Participants may drop off found items. Participants can also email a description of the item and the location it was lost/found to reg@sxsw.com. After ninety (90) days following the Event, unclaimed lost and found items may be disposed of at SXSW’s discretion.</p>
                                </li>
                                <li>
                                    <p>ag. Code of Conduct. Participant hereby agrees to the Code of Conduct applicable to the Event Credentials Participant is purchasing or using, which is incorporated herein by this reference. The SXSW Code of Conduct applicable to the Events is available here: https://www.sxsw.com/attend/code-of-conduct/, and the SXSW EDU Code of Conduct applicable to the Events is available here: https://www.sxswedu.com/code-of-conduct/. If SXSW determines that a Participant violated the SXSW Code of Conduct, SXSW reserves the right, in its sole discretion, to revoke that Participant’s Credentials without refund, deferral, credit, or further responsibility to Participant.</p>
                                </li>
                                <li>
                                    <p>ah. Weapons-Free Policy. SXSW is a private event and maintains a Weapons-Free Policy for all Events, which is incorporated herein by this reference and available at: https://www.sxsw.com/weapons-free-policy/, and Participant agrees to its terms. SXSW reserves the right, in its sole discretion, without refund, deferral or credit to Participant, to deactivate and/or revoke the Credentials of a Participant if such Participant violates this Weapons-Free Policy. Participant agrees that this policy is in force, and agrees to comply with the policy, regardless of the terms of any signs posted on the premises or venue of any Event.</p>
                                </li>
                                <li>
                                    <p>ai. Safety. Participant agrees to comply with the safety, hygiene and CDC identified pandemic level communicable illnesses (including COVID-19) guidelines established by relevant health authorities, including, without limitation, Austin Public Health, Texas Department of State Health Services, the Centers for Disease Control, and any guidelines set forth in the Attendee Safety Resources, which is incorporated herein by this reference. The Attendee Safety Resources for SXSW Event is available here: https://www.sxsw.com/attendee-safety/ and for SXSW EDU Event is available here: https://www.sxswedu.com/sxsw-edu-attendee-safety-resources/. The Attendee Safety Pages will be updated as the date of the Event(s) approaches.</p>
                                </li>
                                <li>
                                    <p>aj. Additional SXSW Policies. Participant has read, understands, and agrees to the following policies: Terms of Use, Privacy Policy and RFID Policy applicable to the Event in which Participant is participating or for which Participant is purchasing Credentials to attend, which policies apply to the Events and are incorporated herein by this reference. The SXSW Terms of Use, are available here: https://www.sxsw.com/terms-of-use/, The SXSW Privacy Policy is available here: https://www.sxsw.com/privacy-policy/, and the SXSW RFID Policy is available here: https://www.sxsw.com/rfid. The SXSW EDU Terms of Use are available here: https://www.sxswedu.com/terms-of-use/, the SXSW EDU Privacy Policy is available here: https://www.sxswedu.com/privacy-policy/ and the SXSW EDU RFID Policy is available here: https://www.sxswedu.com/rfid/.</p>
                                </li>
                                <li>
                                    <p>ak. Privacy. SXSW takes the privacy of its users very seriously. SXSW and SXSW EDU websites and at the Events. The current SXSW Privacy Policy is available here: https://www.sxsw.com/privacy-policy/ and the SXSW EDU Privacy Policy is available here: https://www.sxswedu.com/privacy-policy/.</p>
                                </li>
                                <li>
                                    <p>al. VOLUNTARY PARTICIPATION AND ASSUMPTION OF RISK. PARTICIPANT UNDERSTANDS AND AGREES THAT PARTICIPATING IN THE EVENTS IS VOLUNTARY AND MAY INVOLVE CERTAIN RISKS OF PHYSICAL INJURY, DAMAGE TO PROPERTY, WHETHER PHYSICAL PROPERTY OR INTELLECTUAL PROPERTY, AND OTHER DAMAGES OR LOSSES THAT MAY BE SUSTAINED BY PARTICIPANT, AND PARTICIPANT ASSUMES ALL RISK OF DAMAGE, PROPERTY LOSS, AND/OR PERSONAL INJURY WHICH MAY OCCUR AS A RESULT OF PARTICIPATING IN THE EVENTS, INCLUDING, WITHOUT LIMITATION, EXPOSURE TO CDC IDENTIFIED PANDEMIC LEVEL COMMUNICABLE ILLNESSES (INCLUDING COVID-19). PARTICIPANT HEREBY RELEASES SXSW, ITS OWNERS, ITS SPONSORS AND ITS OFFICIAL VENUES, AND EACH OF THEIR RESPECTIVE OFFICERS, DIRECTORS, SHAREHOLDERS, AFFILIATES, MANAGERS, EMPLOYEES, VOLUNTEERS, CONTRACTORS, SUPPLIERS AND REPRESENTATIVES (THE “RELEASED PARTIES”) FROM ANY AND ALL LIABILITY ASSOCIATED WITH PARTICIPATING IN THE EVENTS, INCLUDING LIABILITY FOR THE NEGLIGENCE OF ANY RELEASED PARTIES, UNLESS SUCH LIABILITY IS DUE TO THE GROSS NEGLIGENCE OF THE RELEASED PARTIES, IN WHICH CASE THE RELEASE WILL STILL APPLY TO ANY OF THE RELEASED PARTIES THAT WERE NOT GROSSLY NEGLIGENT.</p>
                                </li>
                                <li>
                                    <p>am. LIMITATION OF LIABILITY. IN NO EVENT SHALL SXSW BE LIABLE TO ANY PARTICIPANT, OR ANY OTHER PERSON OR ENTITY FOR ANY PERSONAL INJURY OR DAMAGES TO PROPERTY, DATA LOSS, DAMAGES FOR LOSS OF BUSINESS PROFITS OR OTHER PECUNIARY LOSS, INCLUDING ANY DIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, PUNITIVE OR SIMILAR DAMAGES, ARISING OUT OF ANY PARTICIPANT’S USE OF THE CREDENTIALS AND/OR PARTICIPATION IN THE EVENTS, EVEN IF SXSW OR PARTICIPANT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                                </li>
                                <li>
                                    <p>an. NO WARRANTIES. EXCEPT AS MAY BE EXPRESSLY SET FORTH IN THESE TERMS, PARTICIPANT’S PARTICIPATION IN THE EVENTS, AND ALL SERVICES AND PRODUCTS PROVIDED IN CONNECTION WITH THE EVENTS, ARE PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND. SXSW EXPRESSLY DISCLAIMS ALL EXPRESS, IMPLIED, OR STATUTORY WARRANTIES, REPRESENTATIONS OR CONDITIONS, WHETHER WRITTEN OR ORAL, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SECURITY, RELIABILITY, INTEGRATION, SAFETY, OR ANY WARRANTIES THAT MAY ARISE FROM COURSE OF DEALING. SXSW EXPRESSLY DISCLAIMS ANY WARRANTIES NOT EXPRESSLY STATED HEREIN AND HAS MADE NO REPRESENTATIONS OR WARRANTIES TO PARTICIPANT ABOUT THE SUITABILITY, CONDITION OR SAFETY OF THE SXSW EVENTS, SXSW PLATFORM OR DIGITAL TRANSMISSION OF THE EVENTS, YOUR ABILITY TO ACCESS OR USE SXSW CONTENT OR SERVICES, ANY EQUIPMENT PROVIDED BY SXSW OR ITS VENDORS, SXSW SERVICES OR PRODUCTS SUPPLIED AS PART OF THE EVENTS OR THAT THE EVENTS, INCLUDING ANY STREAMING, WILL OPERATE WITHOUT INTERRUPTION OR BE ERROR FREE.</p>
                                </li>
                                <li>
                                    <p>ao. Arbitration.</p>
                                </li>
                                <li>
                                    <p>ap. a. SXSW is committed to customer satisfaction, so if you have a problem or dispute, we will try to resolve your concerns. But if we are unsuccessful, you or we may pursue claims as explained in this section.</p>
                                </li>
                                <li>
                                    <p>aq. b. To give SXSW an opportunity to resolve informally any disputes between you and SXSW arising out of or relating in any way to these Terms (including any linked terms and conditions), our Privacy Policy, the Credentials, the Applications, or any services and/or products provided by SXSW (“Claim(s)”), you agree to communicate your Claim to SXSW by contacting info@sxsw.com (“Customer Support”). You agree not to bring any suit or to initiate arbitration proceedings until 60 days after the date on which you communicated your Claim to Customer Support have elapsed. If SXSW is not able to resolve your Claim within 60 days, you may seek relief through arbitration or in small claims court, as set forth below.</p>
                                </li>
                                <li>
                                    <p>ar. c. You and SXSW agree that any and all Claims will be resolved by binding arbitration, rather than in court, except that you and we may assert Claims on an individual basis in small claims court if they qualify. This includes any Claims you assert against us, our subsidiaries, or any companies offering products and/or services through us (which are beneficiaries of this arbitration agreement).</p>
                                </li>
                                <li>
                                    <p>as. d. There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including statutory damages, attorneys’ fees and costs). The arbitrator must follow and enforce these Terms.</p>
                                </li>
                                <li>
                                    <p>at. e. Arbitrations will be conducted by the American Arbitration Association (“AAA”) under its rules, including the AAA Consumer Rules. Payment of all filing, administration and arbitrator fees will be governed by the AAA’s rules, except as provided in this section. If you commence an arbitration in accordance with the Terms of Use, you will be required to pay AAA’s filing fee. You will not be responsible for paying any other fees for the arbitration, other than the filing fee; all other fees or expenses charged by AAA will be paid by SXSW (unless the arbitrator finds that either the substance of your Claim or the relief sought is frivolous or brought for an improper purpose). Further, if AAA determines that you are unable to pay any part of the filing fee, then SXSW will pay that part too.</p>
                                </li>
                                <li>
                                    <p>au. f. Any and all proceedings to resolve Claims will be conducted only on an individual basis and not in a class, consolidated, or representative action. The arbitrator will have authority to decide issues as to the scope of this arbitration agreement and the arbitrability of Claims. If for any reason a Claim proceeds in court rather than in arbitration, you and SXSW each waive any right to a jury trial.</p>
                                </li>
                                <li>
                                    <p>av. To begin an arbitration proceeding, you must send a letter requesting arbitration and describing your Claim(s) to “SXSW: General Counsel,” at CT Corporation System, 1999 Bryan Street, Suite 900, Dallas, TX, 75201. If we request arbitration against you, we will give you notice at the email address or street address you have provided. The AAA’s rules and filing instructions are available at www.adr.org or by calling 1-800-778-7879.</p>
                                </li>
                                <li>
                                    <p>aw. Indemnification. Participant agrees to indemnify, defend, and hold SXSW and its affiliates, and each of their respective officers, directors, shareholders, managers, employees, volunteers, contractors, suppliers, and representatives harmless from and against any and all claims, demands and all other liabilities, including, without limitation, costs and attorneys’ fees, made by any third party arising out of or in connection with Participant’s participation in the Events, use of the Credentials, or any violation of the Terms by Participant.</p>
                                </li>
                                <li>
                                    <p>ax. Choice of Law and Exclusive Venue and Jurisdiction. These Terms are governed by the laws of the State of Texas, without regard to its principles of conflicts of laws, except that the Arbitration provision of these Terms shall be governed by the Federal Arbitration Act. In the event that the Agreement to Arbitrate above is found not to apply to you or to a particular Claim, you agree that any Claim that has arisen or may arise between you and SXSW must be resolved exclusively by a state or federal court located in Travis County, Texas, in a case brought in your individual capacity and not in any representative capacity or as a class action. Both you and SXSW agree to submit to the personal jurisdiction to a court of competent jurisdiction located in Travis County, Texas for the purpose of litigating all such Claims or disputes.</p>
                                </li>
                            </ul >
                        </div >
                    </div >
                )}
            </div>
        </main>
    )
}
