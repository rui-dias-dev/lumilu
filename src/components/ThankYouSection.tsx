import { ShellWithWaves } from '@/assets/icons';
import React, { FC } from 'react';

const ThankYouSection: FC = ({}) => {
  return (
    <section className="p-14 text-center lg:grid lg:grid-cols-12 lg:gap-2.5 lg:px-48">
      <div className="m-auto text-lg lg:col-start-3 lg:col-end-11 lg:max-w-[705px]">
        <p>
          At Lumilu, everything is created with passion, purpose, and attention to detail. As a small, independent
          company, with no investors’ obligations, we enjoy complete freedom of always selecting natural materials and
          sustainability over price or profit goals. Every design, material, and decision is carefully considered to
          bring you a yoga mat that is both beautiful and functional.
        </p>
        <br />
        <p>
          Each mat is crafted with thoughtfulness and love, ensuring that every element - from the texture to the design
          - enhances your practice. This is more than just a product; it’s a reflection of my dedication to design,
          movement, and mindful living. My hope is that these mats bring you as much joy, inspiration, and connection as
          they have brought me in creating them.
        </p>
        <br />
        <strong className="mb-14">Thank you for being part of this journey.</strong>

        <ShellWithWaves className="m-auto mt-14" />
      </div>
    </section>
  );
};

export default ThankYouSection;
