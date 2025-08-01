import { FishAndLines } from '@/assets/icons';
import React from 'react';
import SubscribeSection from './SubscribeSection';
import Image from 'next/image';
import Link from 'next/link';
import Wave from './Wave';

const ContactAndAboutSection = () => {
  return (
    <section className="grid">
      <FishAndLines className="h-auto w-full lg:max-h-[500px]" />
      <div className="bg-green relative w-full pt-[86px] pb-16 text-center text-sm text-white lg:pt-[170px] lg:pb-[97px] lg:text-left">
        <Wave />
        <div className="px-[58px] lg:grid lg:grid-cols-12 lg:gap-[15px] lg:px-[190px]">
          <div className="relative col-span-6">
            <Image
              fill
              src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310066/About_for-web-desktop_fywhg2.webp'}
              alt=""
              className="hidden object-contain lg:inline-block"
            />
          </div>
          <div className="col-start-8 col-end-12">
            <p className="px-14 lg:max-w-[345px] lg:px-0">
              As a graphic designer and passionate yoga lover,
              <span className="font-semibold">
                creativity and movement have always been a big part of my life.
              </span>{' '}
              Wanting to deepen my personal practice, I completed my 200-hour Yoga Teacher Training - and in the
              process, I discovered my dharma.
            </p>
            <p className="mt-3 px-14 lg:max-w-[345px] lg:px-0">
              In my early 30s, I realized my true calling was to blend design, yoga, and mindful living by creating
              beautifully crafted yoga mats. Now, I get to share my love for design, marketing, and yoga with a like -
              minded community, <span className="font-semibold">bringing art and intention into every practice.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative lg:hidden">
        <Image alt="" src={'/images/contact/multiphoto.jpg'} width={1024} height={1278} className="h-full w-full" />
      </div>
      <div className="items-center px-[58px] py-16 text-center text-sm lg:grid lg:grid-cols-12 lg:gap-[15px] lg:px-[190px] lg:py-0 lg:text-left">
        <div className="col-start-2 col-end-5 lg:max-w-[255px] lg:justify-self-end">
          <p>
            We’d love to hear from you! Whether you have a question about our yoga mats, need assistance with an order,
            or just want to say hello, feel free to reach out.
          </p>
          <p className="mt-4 font-bold">
            <Link href="mailto:hello@lumilu.eu" className="">
              hello@lumilu.eu
            </Link>
          </p>
        </div>
        <div className="relative col-start-6 col-end-13 lg:h-[580px]">
          <Image
            alt=""
            src={'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311357/9_opqin4.webp'}
            width={1024}
            height={1278}
            className="h-full w-full lg:max-h-[580px] lg:object-contain"
          />
        </div>
      </div>

      <SubscribeSection />
    </section>
  );
};

export default ContactAndAboutSection;
