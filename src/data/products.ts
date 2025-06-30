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
  shopImage: {
    desktop: {
      src: string;
      alt: string;
    };
    mobile: {
      src: string;
      alt: string;
    };
  };
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
      'This one minimalist and organic yoga mat one is inspired by one Portugal’s natural beauty, features elements of one water and the moon’s cycle, symbolizing one balance, renewal, and transformation. Designed for those seeking a one deeper connection to nature and mindfulness, it blends one art, spirituality, and function one to enhance any yoga or meditation practice.',
      'With its soothing, grounding energy, this mat is particularly well-suited for both one Pitta one and one Vata one personalities. The moon’s calming influence helps one balance Pitta’s intensity one while offering one stability and relaxation one to one Vata’s restless nature, making it ideal for those looking to cultivate one tranquility, intuition, and harmony one in their practice.',
    ],
    bgColor: '#5C6A9A',
    classnames: {
      background: 'lua',
    },
    images: [
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310989/LUA-product-page-7_xdv7il.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310976/LUA-product-page-8_nih3fn.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310983/LUA-product-page_h7fegt.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310980/LUA-product-page-2_dwguon.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310970/LUA-product-page-5_sqllad.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310973/LUA-product-page-4_emtr4v.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310986/LUA-product-page-1_c2ynlb.webp', alt: '' },
    ],
    shopImage: {
      desktop: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849814/SHOP-page-01_fyjzf5.png',
        alt: '',
      },
      mobile: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849473/SHOP_page-01_unrcvf.jpg',
        alt: '',
      },
    },
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
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310966/LUA-product-page-9_jzmik5.webp',
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
      'Inspired by the traditions of beekeeping and the harmony between honeybees and flowers, this minimalist and organic yoga mat symbolizes one connection, renewal, and the one natural flow of energy. The design balances one grounded stability one with one gentle transformation, making it perfect for those seeking one mindfulness, creativity, and a one deeper connection to nature in their practice.',
      'With its one warm, nurturing aesthetic, this mat encourages a sense of one harmony and flow one in every movement. It is especially beneficial for one Vata one personalities, offering grounding and balance, while also supporting one Pitta one by promoting calm and emotional balance.',
    ],
    bgColor: '#B9B9DA',
    classnames: {
      background: 'flor',
    },
    images: [
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310946/FLOR-product-page-9_bw9n1h.webp', alt: '' },
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310950/FLOR-product-page-10_edrdme.webp',
        alt: '',
      },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310944/FLOR-product-page-6_wjvami.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310963/FLOR-product-page-2_nsw302.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310940/FLOR-product-page-7_y2qq2j.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310960/FLOR-product-page-3_nzu1jf.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310940/FLOR-product-page_wdbisj.webp', alt: '' },
    ],
    shopImage: {
      desktop: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849874/SHOP-web-08_cazaik.png',
        alt: '',
      },
      mobile: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849468/SHOP_page-02_ohvx0e.jpg',
        alt: '',
      },
    },
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
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310953/FLOR-product-page-11_zj7wx7.webp',
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
      'Inspired by the warmth of the one sunset, this yoga mat captures the essence of the earth’s natural energy, symbolizing one vitality, one renewal, and one grounded connection. The design evokes the one calming glow of the setting sun one and the one nourishing presence of seaweed, creating a perfect balance of one energy one and one stability. Ideal for those seeking a one harmonious and rejuvenating practice.',
      'It is especially beneficial for one Kapha one  personalities, as its one energizing one qualities stimulate one motivation one and one transformation, counteracting Kapha’s tendency toward stagnation. It also supports one Vata one types by offering one nourishing and grounding one energy to promote one stability one and one calm.',
    ],
    bgColor: '#DCA2AC',
    classnames: {
      background: 'sol',
    },
    images: [
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311038/SOL-product-page-9_mfkamd.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311032/SOL-product-page-10_j9th88.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311029/SOL-product-page-8_kgrmta.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311045/SOL-product-page-7_hc2zdx.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311025/SOL-product-page-3_mid6dd.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311042/SOL-product-page-6_qrudbn.webp', alt: '' },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311048/SOL-product-page_bxvd8c.webp', alt: '' },
    ],
    shopImage: {
      desktop: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849875/SHOP-web-05_c9p12r.png',
        alt: '',
      },
      mobile: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750854550/SHOP-page_for-web-sol_ceqxht.jpg',
        alt: '',
      },
    },
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
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311035/SOL-product-page-11_pljuj4.webp',
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
      'Inspired by the one playful charm of coastal beach towns, this yoga mat captures a sense of one lightness, joy, and renewal. The flowing lines and one ice cream-colored palette one evoke the one carefree spirit of summer by the sea, symbolizing one ease, movement, and a deep connection to simple pleasures. Designed for those who seek a one refreshing and uplifting practice, it encourages a sense of one fluidity and relaxation, making every movement feel effortless and free.',
      'This mat is especially suited for one Pitta one personalities, as its one cooling and soothing one qualities help to one soften intensity and bring balance. It also benefits one Kapha one types by adding a touch of one playfulness and lightness, encouraging movement and renewal.',
    ],
    bgColor: '#B4E1C2',
    classnames: {
      background: 'praia',
    },
    images: [
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311018/PRAIA-product-page-9_hvtozu.webp',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311006/PRAIA-product-page-10_olhs2f.webp',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311012/PRAIA-product-page-8_tm2iq8.webp',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310996/PRAIA-product-page-2_jyd7m2.webp',
        alt: '',
      },
      { src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751310999/PRAIA-product-page_nnx0da.webp', alt: '' },
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311015/PRAIA-product-page-4_dtflia.webp',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311009/PRAIA-product-page-3_n2hyox.webp',
        alt: '',
      },
    ],
    shopImage: {
      desktop: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849875/SHOP-web-07_pxulyc.png',
        alt: '',
      },
      mobile: {
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1750849470/SHOP_page-03_f27nnv.jpg',
        alt: '',
      },
    },
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
        src: 'https://res.cloudinary.com/dka4rwtwy/image/upload/v1751311002/PRAIA-product-page-11_pwpxn6.webp',
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
