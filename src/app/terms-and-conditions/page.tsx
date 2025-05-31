import Link from 'next/link';
import React, { FC } from 'react';

const TermsPage: FC = () => {
  return (
    <section className="bg-cream relative px-6 py-12 md:px-24 lg:px-48">
      {/*
        We switch from a single‐column layout to a 2‐column grid at `lg`.
        Each of these child <div> blocks will become grid cells.
      */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-12 lg:grid-cols-2">
        {/* Left Column: Terms & Conditions + Privacy Policy */}
        <div className="space-y-12">
          {/* Terms & Conditions */}
          <div>
            <h2 className="mb-4 font-semibold italic">Terms and Conditions</h2>
            <p className="mb-4">
              Welcome to Lumilu, your trusted source for high-quality yoga mats. By accessing or using this website, you
              agree to comply with and be bound by the following terms and conditions. If you do not agree with these
              terms, please refrain from using the site. You agree to use this website in accordance with the law and
              these Terms and Conditions. You shall not:
            </p>

            <p className="mb-2 font-semibold italic">You shall not:</p>
            <ul className="mb-6 list-inside list-disc space-y-2 pl-6">
              <li>Use the site for any illegal or unauthorized purpose.</li>
              <li>Distribute viruses or any other harmful software.</li>
              <li>Attempt to gain unauthorized access to any part of the website.</li>
            </ul>

            <p className="mb-4">
              We strive to provide accurate descriptions and prices for all our products. However, we do not guarantee
              that product information or pricing is error-free. We reserve the right to update product information and
              pricing at any time without notice.
            </p>

            <p className="mb-4">
              By placing an order on this website, you are making an offer to purchase the selected products. We reserve
              the right to accept or reject any order. Payments are processed through secure channels, and we accept
              major credit cards and other online payment methods.
            </p>

            <p className="mb-4">
              We aim to ship your order as quickly as possible. However, shipping times may vary based on location and
              other factors. Shipping fees will be added at checkout. You are responsible for providing accurate
              shipping information.
            </p>

            <p className="mb-4">
              If you&apos;re not satisfied with your purchase, please refer to our Return and Refund Policy for
              instructions on returning products. Any product returns must be made within a specified time frame
              (typically 30 days) and in original condition.
            </p>

            <p className="mb-4">
              We are not liable for any indirect, incidental, or consequential damages arising from your use of this
              website or products. Our total liability for any claim related to your purchase or use of this website
              shall not exceed the amount you paid for the product.
            </p>

            <p className="mb-4">
              All content, logos, graphics, and trademarks on this website are the property of Lumilu or its licensors
              and are protected by copyright and trademark laws. You may not use any content from the website without
              prior written consent.
            </p>

            <p className="mb-4">
              We take your privacy seriously. Please review our Privacy Policy for information on how we collect and use
              your personal data.
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="mb-4 font-semibold italic">Privacy Policy</h2>
            <p className="mb-4">
              Lumilu values your privacy and is committed to protecting your personal information. This Privacy Policy
              explains how we collect, use, and protect your data when you visit our website.
            </p>

            <p className="mb-4">
              We collect the following types of personal information when you visit or make a purchase on our website:
            </p>
            <ul className="mb-6 list-inside list-disc space-y-2 pl-6">
              <li>Personal Identification Information: Name, email address, phone number, and shipping address.</li>
              <li>
                Payment Information: Credit card or other payment method details (processed securely through third-party
                payment providers).
              </li>
              <li>
                Usage Data: Information about your interactions with the website, such as browsing behavior, IP address,
                and device information.
              </li>
            </ul>

            <p className="mb-4">We use your personal information for the following purposes:</p>
            <ul className="mb-6 list-inside list-disc space-y-2 pl-6">
              <li>To process and fulfill your orders.</li>
              <li>To communicate with you about your purchases, promotions, or customer support.</li>
              <li>To improve the functionality and content of our website.</li>
              <li>To send marketing emails, if you opt-in.</li>
            </ul>

            <p className="mb-4">
              We implement industry-standard security measures to protect your personal data from unauthorized access,
              disclosure, alteration, and destruction. However, no website is completely secure, and we cannot guarantee
              100% security.
            </p>

            <p className="mb-4">
              We do not sell or rent your personal information to third parties. However, we may share your information
              with trusted partners who assist in running our business (such as payment processors and shipping
              companies), but only for the purpose of completing your transaction.
            </p>

            <p className="mb-4">
              We use cookies to enhance your browsing experience and collect data on how our website is used. You can
              choose to disable cookies through your browser settings, but this may impact the functionality of the
              website.
            </p>

            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. If you would like to exercise
              any of these rights, please contact us at{' '}
              <Link href="mailto:hello@lumilu.eu" className="text-primary underline">
                hello@lumilu.eu
              </Link>
              .
            </p>

            <p className="mb-4">
              We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page
              with an updated revision date.
            </p>
          </div>
        </div>

        {/* Right Column: Return & Refund, Shipping, Limitation, Security, Consent */}
        <div className="space-y-12">
          <div className="mt-12 lg:mt-0">
            <p className="mb-4 font-semibold italic">Disclaimer</p>
            <p className="mb-4">
              While we strive to provide accurate and up-to-date information on our website, we do not guarantee that
              the content is free of errors or omissions. Prices, descriptions, and availability are subject to change
              without notice.
            </p>

            <p className="mb-4">
              Our website may contain links to external websites. We are not responsible for the content or practices of
              these third-party websites.
            </p>
          </div>

          {/* Return and Refund Policy */}
          <div>
            <h2 className="mb-4 font-semibold italic">Return and Refund Policy</h2>
            <p className="mb-4">
              At Lumilu, we want you to be completely satisfied with your purchase. If for any reason you&apos;re not
              happy with your yoga mat, you can return it within 30 days of receiving your order. To be eligible for a
              return, the mat must be unused, in its original packaging, and in re-sellable condition.
            </p>
            <p>
              To initiate a return, please contact our customer service at{' '}
              <Link href="mailto:hello@lumilu.eu" className="text-primary underline">
                hello@lumilu.eu
              </Link>
              , and we will guide you through the process. You are responsible for the cost of return shipping unless
              the item is damaged or defective upon receiving the goods. Once we receive the returned product, we will
              issue a full refund to the original payment method.
            </p>
          </div>

          {/* Shipping and Delivery Policy */}
          <div>
            <h2 className="mb-4 font-semibold italic">Shipping and Delivery Policy</h2>
            <p className="mb-4">
              We offer reliable and fast shipping options for all our customers. Once your order is placed, it will be
              processed and shipped within 1 to 3 working days, but not later than 6 working days. You can see the
              expected time of delivery during your checkout according to your local area. The customer is informed via
              e-mail within 24 hours of the expedition when the delivery is dispatched. If you have not received the
              goods nor a delivery notice from the post office within 7 days from the time you received our e-mail
              announcement of the expedition, please contact our office via email at{' '}
              <Link href="mailto:hello@lumilu.eu" className="text-primary underline">
                hello@lumilu.eu
              </Link>
              . Delivery times vary depending on your location. Most orders arrive within 5–10 business days for
              domestic orders, and 7–21 business days for international orders.
            </p>
            <p className="mb-4">
              Shipping fees will be calculated and displayed at checkout. Please ensure that you provide the correct
              delivery information, as we are not responsible for lost or delayed packages due to incorrect addresses.
            </p>
            <p>
              Please note that delivery times are estimates and can vary depending on your location and courier
              services.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="mb-4 font-semibold italic">Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by applicable law, Lumilu shall not be liable for any indirect,
              incidental, special, or consequential damages arising from or related to the use or inability to use our
              website, products, or services, even if we have been advised of the possibility of such damages. This
              includes, but is not limited to, damages for loss of profits, data, goodwill, or other intangible losses.
            </p>
            <p className="mb-4">
              Our liability to you for any claim arising from the use of our products or website will be limited to the
              amount you paid for the specific product(s) that gave rise to the claim.
            </p>

            <p className="mb-2 font-semibold italic">Lumilu is not responsible for:</p>
            <ul className="mb-6 list-inside list-disc space-y-2 pl-6">
              <li>
                Any issues arising from delays, mistakes, or damages caused by third-party shipping services or
                carriers.
              </li>
              <li>
                Any damage to the product or injury caused by improper use, misuse, or failure to follow care
                instructions for the yoga mats.
              </li>
              <li>
                Any loss or damage that results from an event beyond our control, such as natural disasters, pandemics,
                or other unforeseen circumstances (force majeure).
              </li>
            </ul>
          </div>

          {/* Security of Payment Information */}
          <div>
            <h2 className="mb-4 font-semibold italic">Security of Payment Information</h2>
            <p className="mb-4">
              We take your privacy and security seriously. All payment transactions are processed through secure,
              encrypted channels via trusted third-party payment providers such as Shopify. We do not store your credit
              card or payment details on our site.
            </p>
            <p>
              While we take steps to protect your information, no data transmission or storage system is 100% secure,
              and we cannot guarantee the absolute security of your personal information.
            </p>
          </div>

          {/* Consent to Communications */}
          <div>
            <h2 className="mb-4 font-semibold italic">Consent to Communications</h2>
            <p>
              By purchasing products or subscribing to our newsletter, you agree to receive marketing emails,
              newsletters, and promotional materials from Lumilu. You can unsubscribe at any time by clicking the
              “unsubscribe” link at the bottom of any email, or by contacting us directly at{' '}
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

export default TermsPage;
