import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BrandStorySection() {
  return (
    <section className="py-24 bg-osur-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-light leading-tight">
              The true distinction lies in the details
            </h3>

            <div className="space-y-6 text-sm leading-relaxed">
              <div className="space-y-4">
                <h4 className="text-3xl font-light text-osur-gray" style={{ fontFamily: 'var(--font-serif)' }}>
                  Adn
                </h4>
                <p>
                  We are an exclusive and timeless brand<br />
                  focused on designing and manufacturing unique pieces.<br />
                  Contemporary craftsmanship is our essence, so we are committed to the simplicity and quality of our creations.
                </p>
                <p>
                  We admire and understand culture, tradition, fashion and know-how as an art,<br />
                  thus pampering all the details in each of our models<br />
                  to be part of your closet and become pieces full of history.
                </p>
                <p className="font-medium">
                  100% Made in Spain in our workshop
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-osur-brown transition-colors border-b border-osur-black hover:border-osur-brown pb-1"
              >
                We
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src="https://ext.same-assets.com/2802413564/2916675006.jpeg"
              alt="Sool Craftsmanship"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute left-8 hidden xl:block">
        <p className="text-xs tracking-[0.3em] [writing-mode:vertical-lr] uppercase text-osur-gray">
          Our DNA
        </p>
      </div>
    </section>
  );
}
