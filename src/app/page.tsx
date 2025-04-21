import CollectionSlider from '@/components/CollectionSlider';
import HeroSection from '@/components/HeroSection';
import SubscribeSection from '@/components/SubscribeSection';
import ThankYouSection from '@/components/ThankYouSection';
import TowelsSection from '@/components/TowelsSection';

export default function Home() {
  return (
    <>
      <HeroSection className="my-20 md:my-0 md:mt-52" />
      <CollectionSlider className="mt-28" />
      <SubscribeSection />
      <ThankYouSection />
      <TowelsSection />
    </>
  );
}
