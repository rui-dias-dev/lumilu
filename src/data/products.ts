// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  collection: string;
  slug: string;
  description: string;
  images: { src: string; alt: string }[];
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
    description: `This minimalist and organic yoga mat is inspired by Portugal’s natural beauty, features elements of water and the moon’s cycle, symbolizing balance, renewal, and transformation. Designed for those seeking a deeper connection to nature and mindfulness, it blends art, spirituality, and function to enhance any yoga or meditation practice. With its soothing, grounding energy, this mat is particularly well‑suited for both Pitta and Vata personalities. The moon’s calming influence helps balance Pitta’s intensity while offering stability and relaxation to Vata’s restless nature, making it ideal for those looking to cultivate tranquility, intuition, and harmony in their practice.`,
    images: [
      { src: '/images/home/carousel/HOME-01.png', alt: 'Lua Mat – top view' },
      { src: '/images/home/carousel/HOME-02.png', alt: 'Lua Mat – detail view' },
      { src: '/images/home/carousel/HOME-03.png', alt: 'Lua Mat on the beach' },
      { src: '/images/home/carousel/HOME-04.png', alt: 'Lua Mat close‑up' },
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
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
  },

  {
    id: 'flor-algarve',
    name: 'FLOR',
    collection: 'Algarve Collection',
    slug: 'flor-algarve',
    description: `Inspired by the traditions of beekeeping and the harmony between honeybees and flowers, this minimalist and organic yoga mat symbolizes connection, renewal, and the natural flow of energy. The design balances grounded stability with gentle transformation, making it perfect for those seeking mindfulness, creativity, and a deeper connection to nature in their practice. With its warm, nurturing aesthetic, this mat encourages a sense of harmony and flow in every movement. It is especially beneficial for Vata personalities, offering grounding and balance, while also supporting Pitta by promoting calm and emotional equilibrium.`,
    images: [
      { src: '/images/home/carousel/FLOR-01.png', alt: 'Flor Mat – top view' },
      { src: '/images/home/carousel/FLOR-02.png', alt: 'Flor Mat – detail view' },
      { src: '/images/home/carousel/FLOR-03.png', alt: 'Flor Mat on the beach' },
      { src: '/images/home/carousel/FLOR-04.png', alt: 'Flor Mat close‑up' },
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
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
  },

  {
    id: 'sol-algarve',
    name: 'SOL',
    collection: 'Algarve Collection',
    slug: 'sol-algarve',
    description: `Inspired by the warmth of the sunset, this yoga mat captures the essence of the earth’s natural energy, symbolizing vitality, renewal, and grounded connection. The design evokes the calming glow of the setting sun and the nourishing presence of seaweed, creating a perfect balance of energy and stability. Ideal for those seeking a harmonious and rejuvenating practice, it encourages a deep connection to nature, bringing a sense of vitality and renewal to every movement. It is especially beneficial for Kapha personalities, as its energizing qualities stimulate motivation and transformation, counteracting Kapha’s tendency toward stagnation. It also supports Vata types by offering nourishing and grounding energy to promote stability and calm.`,
    images: [
      { src: '/images/home/carousel/SOL-01.png', alt: 'Sol Mat – top view' },
      { src: '/images/home/carousel/SOL-02.png', alt: 'Sol Mat – detail view' },
      { src: '/images/home/carousel/SOL-03.png', alt: 'Sol Mat on the beach' },
      { src: '/images/home/carousel/SOL-04.png', alt: 'Sol Mat close‑up' },
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
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
  },
  {
    id: 'praia-algarve',
    name: 'PRAIA',
    collection: 'Algarve Collection',
    slug: 'praia-algarve',
    description: `Inspired by the playful charm of coastal beach towns, this yoga mat captures a sense of lightness, joy, and renewal. The flowing lines and ice cream–colored palette evoke the carefree spirit of summer by the sea, symbolizing ease, movement, and a deep connection to simple pleasures. Designed for those who seek a refreshing and uplifting practice, it encourages a sense of fluidity and relaxation, making every movement feel effortless and free. This mat is especially suited for Pitta personalities, as its cooling and soothing qualities help to soften intensity and bring balance. It also benefits Kapha types by adding a touch of playfulness and lightness, encouraging movement and renewal.`,
    images: [
      { src: '/images/home/carousel/PRAIA-01.png', alt: 'Praia Mat – top view' },
      { src: '/images/home/carousel/PRAIA-02.png', alt: 'Praia Mat – detail view' },
      { src: '/images/home/carousel/PRAIA-03.png', alt: 'Praia Mat on the beach' },
      { src: '/images/home/carousel/PRAIA-04.png', alt: 'Praia Mat close‑up' },
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
      title: 'Sustainable',
      detail: `At Lumilu, sustainability isn’t just a buzzword—it’s at the heart of everything we do. From eco‑friendly materials to responsible production, we are committed to protecting both your practice and the planet. All mats are produced in smaller batches with materials kind to the Earth.`,
      note: 'Eco‑conscious packaging & includes a recycled polyester carrying strap. Please recycle the packaging responsibly.',
    },
  },
];
