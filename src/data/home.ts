type HomeProps = {
  carousel: {
    link: {
      href: string;
    };
    image: {
      src: string;
      alt: string;
    };
  }[];
};

export const home: HomeProps = {
  carousel: [
    { link: { href: '/shop/flor-algarve' }, image: { src: '/images/home/carousel/HOME-01.png', alt: '' } },
    { link: { href: '/shop/praia-algarve' }, image: { src: '/images/home/carousel/HOME-02.png', alt: '' } },
    { link: { href: '/shop/sol-algarve' }, image: { src: '/images/home/carousel/HOME-03.png', alt: '' } },
    { link: { href: '/shop/lua-algarve' }, image: { src: '/images/home/carousel/HOME-04.png', alt: '' } },
  ],
};
