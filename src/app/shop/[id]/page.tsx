import { products } from '@/data/products';
import { formatPrice } from '@/lib/formatters';
import { notFound } from 'next/navigation';
import { Fish } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import FeaturesAndCare from '@/components/FeaturesAndCare';
import CareInstructions from '@/components/CareInstructions';
import Sustainable from '@/components/Sustainable';
import YouMayLike from '@/components/YouMayLike';
import ProductCarousel from '@/components/ProductCarousel';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
interface Params {
  id: string;
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const price = formatPrice({
    amount: product.price.amount,
    currency: product.price.currency,
  });

  return (
    <div className={`text-white ${product.classnames.background ? product.classnames.background : ''}`}>
      <section
        className="product-section rounded-b-[150px] pt-10 pb-10 text-center lg:grid lg:gap-x-16 lg:rounded-b-[250px] lg:px-32 lg:text-left xl:px-48"
        style={{ backgroundColor: product.bgColor }}
      >
        <h1 className="product-title mb-7 px-14 text-xl lg:mb-0 lg:px-0">
          <strong>{product.name}</strong> | {product.collection}
        </h1>
        <ProductCarousel product={product} />
        <div className="product-description mt-6 space-y-4 px-14 lg:px-0">
          {product.description.length &&
            product.description.map((paragraph) => (
              <p key={paragraph} className="">
                {paragraph}
              </p>
            ))}
        </div>

        <div className="product-variables mt-6 px-14 lg:px-0">
          <p>
            {product.dimensions.lengthCm} X {product.dimensions.widthCm} CM | {product.dimensions.thicknessMm} MM |{' '}
            {product.dimensions.weightKg} KG
          </p>
          <p className="font-bold">{price}</p>
          <Fish width={80} height={71} />
        </div>
        <Button className="product-buy-button rounded-full bg-[#F6E6D9] px-16 py-6 text-black uppercase lg:hidden lg:justify-self-start">
          Add to cart
        </Button>
      </section>

      <FeaturesAndCare className="mt-8 text-center text-black lg:mt-24 lg:grid lg:grid-cols-2 lg:pl-48 lg:text-left" />
      <CareInstructions className="mt-10 px-14 text-sm lg:m-auto lg:mt-24 lg:max-w-[707px] lg:px-0" />
      <Sustainable className="mt-8" product={product} style={{ backgroundColor: product.bgColor }} />
      <YouMayLike />
    </div>
  );
}
