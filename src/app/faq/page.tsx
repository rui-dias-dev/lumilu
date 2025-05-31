import Link from 'next/link';
import React, { FC } from 'react';

const Faq: FC = () => {
  return (
    <section className="bg-cream relative px-6 py-12 md:px-24 lg:px-48">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-12 lg:grid-cols-2">
        {/* Left Column FAQs */}
        <div className="space-y-8">
          <div>
            <p className="mb-2 font-semibold italic">What are your yoga mats made of?</p>
            <p className="mb-4">
              Our yoga mats are made from eco-friendly materials like natural tree rubber, antibacterial coating, and
              suede microfiber. We use water-based colors in heat transfer printing. Providing durability, softness, and
              excellent grip.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">Are your yoga mats eco-friendly and sustainable?</p>
            <p className="mb-4">
              Yes! From eco-friendly materials to responsible production, we are committed to protecting both your
              practice and the planet. All mats are produced in smaller batches. We carefully choose materials that are
              kind to the Earth while providing the highest quality for your yoga practice. Additionally, we are proud
              to have the RoHS certificate, ensuring that our products meet rigorous sustainability standards.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">What size and thickness are your mats?</p>
            <p className="mb-4">
              Our yoga mats measure 178 × 61 cm, with a 3mm thickness and a lightweight design of approximately 2.3 kg.
              Their versatile size makes them ideal for both travel and regular practice. The 3mm thickness provides the
              perfect balance of support and stability, making it great for balancing poses. Whether for yoga, Pilates,
              or body-balance training, this mat is designed to support your movement with comfort and ease.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">Do your mats have a non-slip surface?</p>
            <p className="mb-4">
              Yes! Our mats are designed with three layers. The top one is an antibacterial non-slip layer to prevent
              slipping—especially during sweaty sessions. More sweat = more grip. The anti-slip layer also adds
              durability, extending the mat’s lifespan.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">Are your yoga mats suitable for hot yoga?</p>
            <p className="mb-4">
              Yes! All our mats are designed for hot yoga with extra grip and a sweat-resistant material.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">How do I clean and maintain my yoga mat?</p>
            <p className="mb-4">
              To clean your mat, wipe it with a damp cloth and mild soap. Avoid soaking it in water. For deep cleaning,
              use a mixture of water, tea tree oil, and vinegar or a specialized yoga mat spray. To preserve the mat’s
              appearance, roll the mat with the design facing out.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">
              Can I use your mats for other workouts, like Pilates or stretching?
            </p>
            <p>
              Absolutely! Our mats are versatile and great for Pilates, stretching, bodyweight exercises, and
              meditation.
            </p>
          </div>
        </div>

        {/* Right Column FAQs */}
        <div className="space-y-8">
          <div>
            <p className="mb-2 font-semibold italic">How long does shipping take?</p>
            <p className="mb-4">
              Orders are processed within 1–2 business days and typically arrive within 5–10 days for domestic orders
              and 7–21 days for international orders.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">Do you offer international shipping?</p>
            <p className="mb-4">
              Yes, we ship worldwide! International shipping times vary depending on your location. Shipping fees are
              calculated at checkout.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">How much does shipping cost?</p>
            <p className="mb-4">Shipping costs vary by location and order size.</p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">Can I track my order?</p>
            <p className="mb-4">
              Yes! Once your order ships, you’ll receive a tracking number via email to monitor your delivery.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">What is your return policy?</p>
            <p className="mb-4">
              We accept returns within 30 days of purchase, provided the mat is unused and in its original packaging.
              Customers are responsible for return shipping unless the product is defective.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">My yoga mat arrived damaged. What should I do?</p>
            <p className="mb-4">
              If your mat arrives damaged or defective, please contact us at{' '}
              <Link href="mailto:hello@lumilu.eu" className="text-primary underline">
                hello@lumilu.eu
              </Link>{' '}
              within 7 days of delivery with a photo, and we’ll arrange a replacement or refund.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">Do your yoga mats come with a warranty?</p>
            <p className="mb-4">
              Yes! We offer a 30-day warranty against material defects and manufacturing issues. Normal wear and tear is
              not covered.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">Do you offer discounts for bulk or wholesale orders?</p>
            <p className="mb-4">
              Yes! If you’re interested in bulk purchases or wholesale, contact us at{' '}
              <Link href="mailto:hello@lumilu.eu" className="text-primary underline">
                hello@lumilu.eu
              </Link>{' '}
              for special pricing.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">How do I store my yoga mat properly?</p>
            <p className="mb-4">
              Store your mat rolled up in a cool, dry place, away from direct sunlight to prevent damage or fading. To
              preserve the mat’s appearance, roll the mat with the design facing out.
            </p>
          </div>

          <div>
            <p className="mb-2 font-semibold italic">How can I contact customer service?</p>
            <p>
              You can reach us via email at{' '}
              <Link href="mailto:hello@lumilu.eu" className="text-primary underline">
                hello@lumilu.eu
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
