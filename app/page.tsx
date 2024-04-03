//components
import { Button } from '@/components/ui/button';
import TrendingSectionCard from '@/components/ui_elements/trending_section_card';
//images
import cards_shoes_image_1 from '../components/images/cards_images/shoes/cards_shoes_image_1.png'
import cards_shoes_image_2 from '../components/images/cards_images/shoes/cards_shoes_image_2.png'
import cards_shoes_image_3 from '../components/images/cards_images/shoes/cards_shoes_image_3.png'

export default function Home() {
  return (
    <>
      <main>
        <header className="bg-[url('../components/images/header_image.jpeg')] w-full h-screen bg-center bg-no-repeat bg-cover mb-[80px]">
          <div className='max-w-[1440px] mx-auto h-full flex justify-end items-end px-3'>
            <div className='mb-[50px] '>
              <div className='max-w-[389px]'>
                <h1 className='font-medium text-[72px] leading-[93.63px] mb-[42px]'>Denim Collection</h1>
                <p className='text-[22px] mb-[51px]'>An enigmatic and contemporary collection that exalts nautical style through meticulous fabrics, prints, and precise forms.</p>
              </div>
              <div className='flex gap-[21px]'>
                <Button className='text-[22px] p-[30px] py-6'>View Collection</Button>
                <Button variant={"ghost"} className='text-[22px] p-[30px] py-6'>View Collection</Button>
              </div>
            </div>
          </div>
        </header>
        <section className='max-w-[1440px] mx-auto px-3'>
          <h2 className='text-[24px] mb-[50px]'>Trending</h2>
          <div className='flex justify-between'>
            <TrendingSectionCard image={cards_shoes_image_1} title='New from Jordan' />
            <TrendingSectionCard image={cards_shoes_image_1} title='Trail Running Essentials' />
            <TrendingSectionCard image={cards_shoes_image_1} title='Tourney-Ready Gear' />
          </div>
        </section>
      </main>
    </>
  );
}

//bg-[url('../components/images/header_image.jpeg')]