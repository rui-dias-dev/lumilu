export interface ShopifyBuyConfig {
  productId: string;
  moneyFormat: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Record<string, any>;
}

export interface Product {
  id: string;
  name: string;
  collection: string;
  slug: string;
  description: string[];
  bgColor: string;
  classnames: {
    background: string;
  };
  images: { src: string; alt: string }[];
  shopifyBuyConfig: ShopifyBuyConfig;
  dimensions: {
    lengthCm: number;
    widthCm: number;
    thicknessMm: number;
    weightKg: number;
  };
  price: {
    amount: number;
    currency: string;
  };
  features: {
    title: string;
    detail: string;
  }[];
  careInstructions: {
    icon: 'moon' | 'flower' | 'seaweed' | 'sun';
    text: string;
  }[];
  sustainable: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    detail: string;
    note?: string;
  };
}

export const products: Product[] = [
  {
    id: 'lua-algarve',
    name: 'LUA',
    collection: 'Algarve Collection',
    slug: 'lua-algarve',
    description: [
      'This minimalist and organic yoga mat is inspired by Portugal’s natural beauty, features elements of water and the moon’s cycle, symbolizing balance, renewal, and transformation. Designed for those seeking a deeper connection to nature and mindfulness, it blends art, spirituality, and function to enhance any yoga or meditation practice.',
      'With its soothing, grounding energy, this mat is particularly well-suited for both Pitta and Vata personalities. The moon’s calming influence helps balance Pitta’s intensity while offering stability and relaxation to Vata’s restless nature, making it ideal for those looking to cultivate tranquility, intuition, and harmony in their practice.',
    ],
    bgColor: '#5C6A9A',
    classnames: {
      background: 'lua',
    },
    images: [
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/LUA-product-page-7_bu9jjy.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/LUA-product-page-8_updl8c.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/LUA-product-page_yqupat.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/LUA-product-page-3_onraqs.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/LUA-product-page-4_gq4ew9.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/LUA-product-page-5_umocgs.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/LUA-product-page-1_emha5p.jpg', alt: '' },
    ],
    dimensions: { lengthCm: 178, widthCm: 61, thicknessMm: 3, weightKg: 2.3 },
    price: { amount: 85.0, currency: 'EUR' },
    features: [
      {
        title: 'Antibacterial non‑slip top layer',
        detail:
          'The top layer is designed for enhanced hygiene and grip. Integrated antibacterial technology helps prevent odor and bacteria buildup, maintaining freshness over time. Its non‑slip texture ensures a secure grip, even during high‑intensity or hot yoga sessions.',
      },
      {
        title: 'Soft suede microfiber middle layer',
        detail:
          'Provides softness and moisture absorption, wicking away sweat to improve traction in any practice—yoga, Pilates or meditation.',
      },
      {
        title: 'Natural rubber base',
        detail:
          'Crafted from natural tree rubber and premium vegan microfiber, offering durability and eco‑friendly support. A slight natural scent may be present on unboxing; it fades within days.',
      },
      {
        title: 'Printing',
        detail:
          'Water‑based, eco‑friendly heat/thermal transfer printing for a long‑lasting design. Roll with the print facing out to preserve it.',
      },
      {
        title: 'Non‑toxic manufacturing',
        detail: '100% free from latex, PVC, silicone, toxic glue, and phthalates.',
      },
    ],
    careInstructions: [
      {
        icon: 'moon',
        text: 'Hand wash only. Wipe clean with a damp cloth and a few spritzes of spray. We recommend a mix of tea tree oil, water, and vinegar.',
      },
      {
        icon: 'moon',
        text: 'Hang to air‑dry; avoid prolonged exposure to direct sunlight. To preserve the mat’s appearance, roll the mat with the design facing out.',
      },
    ],
    sustainable: {
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852578/LUA-product-page-9_quafv1.jpg',
        alt: '',
      },
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
    shopifyBuyConfig: {
      productId: '15077815648629',
      moneyFormat: '%E2%82%AC{{amount_with_comma_separator}}',
      options: {
        product: {
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': 'calc(25% - 20px)',
                'margin-left': '20px',
                'margin-bottom': '50px',
              },
            },
            button: {
              color: '#000000',
              ':hover': {
                color: '#000000',
                'background-color': '#ddcfc3',
              },
              'background-color': '#f6e6d9',
              ':focus': {
                'background-color': '#ddcfc3',
              },
              'border-radius': '40px',
            },
          },
          contents: { img: false, title: false, price: false },
          text: { button: 'ADD TO CART' },
        },
        productSet: {
          styles: {
            products: {
              '@media (min-width: 601px)': {
                'margin-left': '-20px',
              },
            },
          },
        },
        modalProduct: {
          contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': '100%',
                'margin-left': '0px',
                'margin-bottom': '0px',
              },
            },
            button: {
              color: '#000000',
              ':hover': {
                color: '#000000',
                'background-color': '#ddcfc3',
              },
              'background-color': '#f6e6d9',
              ':focus': {
                'background-color': '#ddcfc3',
              },
              'border-radius': '40px',
            },
          },
          text: { button: 'ADD TO CART' },
        },
        cart: {
          styles: {
            button: {
              color: '#000000',
              ':hover': {
                color: '#000000',
                'background-color': '#ddcfc3',
              },
              'background-color': '#f6e6d9',
              ':focus': {
                'background-color': '#ddcfc3',
              },
              'border-radius': '40px',
            },
          },
          text: { total: 'Subtotal', button: 'Checkout' },
          popup: false,
        },
        toggle: {
          styles: {
            toggle: {
              'background-color': '#f6e6d9',
              ':hover': { 'background-color': '#ddcfc3' },
              ':focus': { 'background-color': '#ddcfc3' },
            },
            count: { color: '#000000', ':hover': { color: '#000000' } },
            iconPath: { fill: '#000000' },
          },
        },
      },
    },
  },

  {
    id: 'flor-algarve',
    name: 'FLOR',
    collection: 'Algarve Collection',
    slug: 'flor-algarve',
    description: [
      'Inspired by the traditions of beekeeping and the harmony between honeybees and flowers, this minimalist and organic yoga mat symbolizes connection, renewal, and the natural flow of energy. The design balances grounded stability with gentle transformation, making it perfect for those seeking mindfulness, creativity, and a deeper connection to nature in their practice.',
      'With its warm, nurturing aesthetic, this mat encourages a sense of harmony and flow in every movement. It is especially beneficial for Vata personalities, offering grounding and balance, while also supporting Pitta by promoting calm and emotional balance.',
    ],
    bgColor: '#B9B9DA',
    classnames: {
      background: 'flor',
    },
    images: [
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852601/FLOR-product-page-9_e5znmy.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852608/FLOR-product-page-10_yfodti.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852595/FLOR-product-page-6_v94ojf.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852594/FLOR-product-page-2_x64vqb.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852596/FLOR-product-page-7_uh7ix7.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852592/FLOR-product-page-3_rieu1p.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852591/FLOR-product-page-1_cjdxmb.jpg', alt: '' },
    ],
    dimensions: { lengthCm: 178, widthCm: 61, thicknessMm: 3, weightKg: 2.3 },
    price: { amount: 85.0, currency: 'EUR' },
    features: [
      {
        title: 'Antibacterial non‑slip top layer',
        detail:
          'The top layer is designed for enhanced hygiene and grip. Integrated antibacterial technology helps prevent odor and bacteria buildup, maintaining freshness over time. Its non‑slip texture ensures a secure grip, even during high‑intensity or hot yoga sessions.',
      },
      {
        title: 'Soft suede microfiber middle layer',
        detail:
          'Provides softness and moisture absorption, wicking away sweat to improve traction in any practice—yoga, Pilates or meditation.',
      },
      {
        title: 'Natural rubber base',
        detail:
          'Crafted from natural tree rubber and premium vegan microfiber, offering durability and eco‑friendly support. A slight natural scent may be present on unboxing; it fades within days.',
      },
      {
        title: 'Printing',
        detail:
          'Water‑based, eco‑friendly heat/thermal transfer printing for a long‑lasting design. Roll with the print facing out to preserve it.',
      },
      {
        title: 'Non‑toxic manufacturing',
        detail: '100% free from latex, PVC, silicone, toxic glue, and phthalates.',
      },
    ],
    careInstructions: [
      {
        icon: 'flower',
        text: 'Hand wash only. Wipe clean with a damp cloth and a few spritzes of spray. We recommend a mix of tea tree oil, water, and vinegar.',
      },
      {
        icon: 'flower',
        text: 'Hang to air‑dry; avoid prolonged exposure to direct sunlight. To preserve the mat’s appearance, roll the mat with the design facing out.',
      },
    ],
    sustainable: {
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852604/FLOR-product-page-11_iork8q.jpg',
        alt: '',
      },
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
    shopifyBuyConfig: {
      productId: '15077865128309',
      moneyFormat: '%E2%82%AC{{amount_with_comma_separator}}',
      options: {
        product: {
          styles: {
            button: {
              color: '#000000',
              'background-color': '#f6e6d9',
              ':hover': { 'background-color': '#ddcfc3' },
              'border-radius': '40px',
            },
          },
          contents: { img: false, title: false, price: false },
          text: { button: 'ADD TO CART' },
        },
        cart: {
          styles: { button: { color: '#000000', 'background-color': '#f6e6d9' } },
          text: { total: 'Subtotal', button: 'Checkout' },
          popup: false,
        },
        toggle: {
          styles: {
            toggle: { 'background-color': '#f6e6d9' },
            count: { color: '#000000' },
            iconPath: { fill: '#000000' },
          },
        },
      },
    },
  },

  {
    id: 'sol-algarve',
    name: 'SOL',
    collection: 'Algarve Collection',
    slug: 'sol-algarve',
    description: [
      'Inspired by the warmth of the sunset, this yoga mat captures the essence of the earth’s natural energy, symbolizing vitality, renewal, and grounded connection. The design evokes the calming glow of the setting sun and the nourishing presence of seaweed, creating a perfect balance of energy and stability. Ideal for those seeking a harmonious and rejuvenating practice.',
      'It is especially beneficial for Kapha  personalities, as its energizing qualities stimulate motivation and transformation, counteracting Kapha’s tendency toward stagnation. It also supports Vata types by offering nourishing and grounding energy to promote stability and calm.',
    ],
    bgColor: '#DCA2AC',
    classnames: {
      background: 'sol',
    },
    images: [
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852544/SOL-product-page-9_hkgmu4.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852543/SOL-product-page-10_vhwpqa.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852544/SOL-product-page-8_qlpmsg.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852548/SOL-product-page-7_wtyibu.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852555/SOL-product-page-3_idxjfn.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852550/SOL-product-page-4_flgxfh.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852548/SOL-product-page_kwsdjl.jpg', alt: '' },
    ],
    dimensions: { lengthCm: 178, widthCm: 61, thicknessMm: 3, weightKg: 2.3 },
    price: { amount: 85.0, currency: 'EUR' },
    features: [
      {
        title: 'Antibacterial non‑slip top layer',
        detail:
          'The top layer is designed for enhanced hygiene and grip. Integrated antibacterial technology helps prevent odor and bacteria buildup, maintaining freshness over time. Its non‑slip texture ensures a secure grip, even during high‑intensity or hot yoga sessions.',
      },
      {
        title: 'Soft suede microfiber middle layer',
        detail:
          'Provides softness and moisture absorption, wicking away sweat to improve traction in any practice—yoga, Pilates or meditation.',
      },
      {
        title: 'Natural rubber base',
        detail:
          'Crafted from natural tree rubber and premium vegan microfiber, offering durability and eco‑friendly support. A slight natural scent may be present on unboxing; it fades within days.',
      },
      {
        title: 'Printing',
        detail:
          'Water‑based, eco‑friendly heat/thermal transfer printing for a long‑lasting design. Roll with the print facing out to preserve it.',
      },
      {
        title: 'Non‑toxic manufacturing',
        detail: '100% free from latex, PVC, silicone, toxic glue, and phthalates.',
      },
    ],
    careInstructions: [
      {
        icon: 'seaweed',
        text: 'Hand wash only. Wipe clean with a damp cloth and a few spritzes of spray. We recommend a mix of tea tree oil, water, and vinegar.',
      },
      {
        icon: 'seaweed',
        text: 'Hang to air‑dry; avoid prolonged exposure to direct sunlight. To preserve the mat’s appearance, roll the mat with the design facing out.',
      },
    ],
    sustainable: {
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852544/SOL-product-page-11_jsaa4r.jpg',
        alt: '',
      },
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
    shopifyBuyConfig: {
      productId: '15077864341877',
      moneyFormat: '%E2%82%AC{{amount_with_comma_separator}}',
      options: {
        product: {
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': 'calc(25% - 20px)',
                'margin-left': '20px',
                'margin-bottom': '50px',
              },
            },
            button: {
              color: '#000000',
              ':hover': { color: '#000000', 'background-color': '#ddcfc3' },
              'background-color': '#f6e6d9',
              ':focus': { 'background-color': '#ddcfc3' },
              'border-radius': '40px',
            },
          },
          contents: { img: false, title: false, price: false },
          text: { button: 'ADD TO CART' },
        },
        productSet: { styles: { products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } } } },
        modalProduct: {
          contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
          styles: {
            product: {
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0px', 'margin-bottom': '0px' },
            },
            button: {
              color: '#000000',
              ':hover': { color: '#000000', 'background-color': '#ddcfc3' },
              'background-color': '#f6e6d9',
              ':focus': { 'background-color': '#ddcfc3' },
              'border-radius': '40px',
            },
          },
          text: { button: 'ADD TO CART' },
        },
        cart: {
          styles: {
            button: {
              color: '#000000',
              ':hover': { color: '#000000', 'background-color': '#ddcfc3' },
              'background-color': '#f6e6d9',
              ':focus': { 'background-color': '#ddcfc3' },
              'border-radius': '40px',
            },
          },
          text: { total: 'Subtotal', button: 'Checkout' },
          popup: false,
        },
        toggle: {
          styles: {
            toggle: {
              'background-color': '#f6e6d9',
              ':hover': { 'background-color': '#ddcfc3' },
              ':focus': { 'background-color': '#ddcfc3' },
            },
            count: { color: '#000000', ':hover': { color: '#000000' } },
            iconPath: { fill: '#000000' },
          },
        },
      },
    },
  },

  {
    id: 'praia-algarve',
    name: 'PRAIA',
    collection: 'Algarve Collection',
    slug: 'praia-algarve',
    description: [
      'Inspired by the playful charm of coastal beach towns, this yoga mat captures a sense of lightness, joy, and renewal. The flowing lines and ice cream-colored palette evoke the carefree spirit of summer by the sea, symbolizing ease, movement, and a deep connection to simple pleasures. Designed for those who seek a refreshing and uplifting practice, it encourages a sense of fluidity and relaxation, making every movement feel effortless and free.',
      'This mat is especially suited for Pitta personalities, as its cooling and soothing qualities help to soften intensity and bring balance. It also benefits Kapha types by adding a touch of playfulness and lightness, encouraging movement and renewal.',
    ],
    bgColor: '#B4E1C2',
    classnames: {
      background: 'praia',
    },
    images: [
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852563/PRAIA-product-page-9_jsg7ny.jpg', alt: '' },
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852562/PRAIA-product-page-10_ly2i72.jpg',
        alt: '',
      },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852569/PRAIA-product-page-6_ofvup1.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852578/PRAIA-product-page-2_oirxot.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852571/PRAIA-product-page-5_ge4abj.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852571/PRAIA-product-page-4_pvdwhk.jpg', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852579/PRAIA-product-page-3_qmjnsb.jpg', alt: '' },
    ],
    dimensions: { lengthCm: 178, widthCm: 61, thicknessMm: 3, weightKg: 2.3 },
    price: { amount: 85.0, currency: 'EUR' },
    features: [
      {
        title: 'Antibacterial non‑slip top layer',
        detail:
          'The top layer is designed for enhanced hygiene and grip. Integrated antibacterial technology helps prevent odor and bacteria buildup, maintaining freshness over time. Its non‑slip texture ensures a secure grip, even during high‑intensity or hot yoga sessions.',
      },
      {
        title: 'Soft suede microfiber middle layer',
        detail:
          'Provides softness and moisture absorption, wicking away sweat to improve traction in any practice—yoga, Pilates or meditation.',
      },
      {
        title: 'Natural rubber base',
        detail:
          'Crafted from natural tree rubber and premium vegan microfiber, offering durability and eco‑friendly support. A slight natural scent may be present on unboxing; it fades within days.',
      },
      {
        title: 'Printing',
        detail:
          'Water‑based, eco‑friendly heat/thermal transfer printing for a long‑lasting design. Roll with the print facing out to preserve it.',
      },
      {
        title: 'Non‑toxic manufacturing',
        detail: '100% free from latex, PVC, silicone, toxic glue, and phthalates.',
      },
    ],
    careInstructions: [
      {
        icon: 'sun',
        text: 'Hand wash only. Wipe clean with a damp cloth and a few spritzes of spray. We recommend a mix of tea tree oil, water, and vinegar.',
      },
      {
        icon: 'sun',
        text: 'Hang to air‑dry; avoid prolonged exposure to direct sunlight. To preserve the mat’s appearance, roll the mat with the design facing out.',
      },
    ],
    sustainable: {
      image: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750852562/PRAIA-product-page-11_ze5x6o.jpg',
        alt: '',
      },
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
    shopifyBuyConfig: {
      productId: '15077864931701',
      moneyFormat: '%E2%82%AC{{amount_with_comma_separator}}',
      options: {
        product: {
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': 'calc(25% - 20px)',
                'margin-left': '20px',
                'margin-bottom': '50px',
              },
            },
            button: {
              color: '#000000',
              ':hover': { color: '#000000', 'background-color': '#ddcfc3' },
              'background-color': '#f6e6d9',
              ':focus': { 'background-color': '#ddcfc3' },
              'border-radius': '40px',
            },
          },
          contents: { img: false, title: false, price: false },
          text: { button: 'ADD TO CART' },
        },
        productSet: { styles: { products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } } } },
        modalProduct: {
          contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
          styles: {
            product: {
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0px', 'margin-bottom': '0px' },
            },
            button: {
              color: '#000000',
              ':hover': { color: '#000000', 'background-color': '#ddcfc3' },
              'background-color': '#f6e6d9',
              ':focus': { 'background-color': '#ddcfc3' },
              'border-radius': '40px',
            },
          },
          text: { button: 'ADD TO CART' },
        },
        cart: {
          styles: {
            button: {
              color: '#000000',
              ':hover': { color: '#000000', 'background-color': '#ddcfc3' },
              'background-color': '#f6e6d9',
              ':focus': { 'background-color': '#ddcfc3' },
              'border-radius': '40px',
            },
          },
          text: { total: 'Subtotal', button: 'Checkout' },
          popup: false,
        },
        toggle: {
          styles: {
            toggle: {
              'background-color': '#f6e6d9',
              ':hover': { 'background-color': '#ddcfc3' },
              ':focus': { 'background-color': '#ddcfc3' },
            },
            count: { color: '#000000', ':hover': { color: '#000000' } },
            iconPath: { fill: '#000000' },
          },
        },
      },
    },
  },
];
