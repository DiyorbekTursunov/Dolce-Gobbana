import { TrendingSectionCardProps } from "@/types/compnents"
import Image from "next/image"


export default function TrendingSectionCard({ image, title }: TrendingSectionCardProps) {
    return (
        <div className="max-w-[457px]">
            <Image src={image} alt="Card image" className="mb-[30px] w-full"/>
            <h3 className="text-[22px]">{title}</h3>
        </div>
    )
}
