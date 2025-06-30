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
    {
      link: { href: '/shop/flor-algarve' },
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751309882/HOME_for-web-flor_gl8mwz.webp',
        alt: '',
      },
    },
    {
      link: { href: '/shop/praia-algarve' },
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751309884/HOME_for-web-praia_ps1ckw.webp',
        alt: '',
      },
    },
    {
      link: { href: '/shop/sol-algarve' },
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751309887/HOME_for-web-sol_cpe7v1.webp',
        alt: '',
      },
    },
    {
      link: { href: '/shop/lua-algarve' },
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751309893/HOME_for-web-lua_cpfpqd.webp',
        alt: '',
      },
    },
  ],
};
