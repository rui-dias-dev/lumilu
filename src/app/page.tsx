import CollectionSlider from '@/components/CollectionSlider';
import HeroSection from '@/components/HeroSection';
import SubscribeSection from '@/components/SubscribeSection';
import ThankYouSection from '@/components/ThankYouSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionSlider />
      <SubscribeSection />
      <ThankYouSection />
    </>
  );
}
