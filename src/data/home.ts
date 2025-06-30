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
      image: { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/HOME_for-web-flor_xn8prf.png', alt: '' },
    },
    {
      link: { href: '/shop/praia-algarve' },
      image: { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/HOME_for-web-praia_mgbtk9.png', alt: '' },
    },
    {
      link: { href: '/shop/sol-algarve' },
      image: { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/HOME_for-web-sol_dunyjq.png', alt: '' },
    },
    {
      link: { href: '/shop/lua-algarve' },
      image: { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/HOME_for-web-lua_ngpmlx.png', alt: '' },
    },
  ],
};
