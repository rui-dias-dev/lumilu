import CollectionSlider from '@/components/CollectionSlider';
import HeroSection from '@/components/HeroSection';
import SubscribeSection from '@/components/SubscribeSection';
import ThankYouSection from '@/components/ThankYouSection';
import TowelsSection from '@/components/TowelsSection';
import Wave from '@/components/Wave';

export default function Home() {
  return (
    <>
      <HeroSection className="my-20 md:my-52 md:mt-52" />
      <CollectionSlider className="md:mt-28" />
      <ThankYouSection />
      <SubscribeSection />
      <section className="relative bg-[#E8C943] pb-16 text-center text-white md:grid md:text-left">
        <Wave />
        <div className="md:max-w-[360px] md:justify-self-start">
          <h2 className="relative z-10 px-16 text-3xl font-bold">Prefer to shop in person?</h2>
          <p className="relative z-10 px-16 text-xl font-medium">Visit one of our trusted retailers</p>
        </div>

        <ul className="mt-10 text-center md:grid md:grid-cols-3 md:space-y-0 md:pl-[400px] md:text-left">
          {/* Portugal */}
          <li>
            <p className="text-xl font-medium">Portugal</p>
            <div className="mt-3.5">
              <p className="font-bold">Livraria Centésima Página</p>
              <p>Avenida Central, 118-120,</p>
              <p>4710-229</p>
              <p>Braga, Portugal</p>
            </div>
          </li>

          {/* Italy */}
          <li>
            <p className="text-xl font-medium">Italy</p>
            <div className="mt-3.5">
              <p className="font-bold">Mon Miel</p>
              <p>Via Armistizio, 16, 35142 </p>
              <p>Padova, Italy</p>
            </div>
          </li>

          {/* Estonia */}
          <li>
            <p className="text-xl font-medium">Estonia</p>
            <div className="mt-3.5">
              <p className="font-bold">Levi</p>
              <p>Solaris - Estonia pst 9, 10143</p>
              <p>Tallinn, Estonia</p>
            </div>
            <div className="mt-3.5">
              <p>Tasku - Riia tn 1, 51004 </p>
              <p>Tartu, Estonia</p>
            </div>
          </li>
        </ul>
      </section>
      <TowelsSection />
    </>
  );
}
