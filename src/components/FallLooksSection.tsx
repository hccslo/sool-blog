import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'Egina Black',
    image: 'https://ext.same-assets.com/2802413564/1721133985.jpeg',
    href: '#'
  },
  {
    name: 'Erula Black',
    image: 'https://ext.same-assets.com/2802413564/2596063945.jpeg',
    href: '#'
  },
  {
    name: 'Diva Black',
    image: 'https://ext.same-assets.com/2802413564/210952805.jpeg',
    href: '#'
  },
  {
    name: 'Black Dome',
    image: 'https://ext.same-assets.com/2802413564/3755289172.jpeg',
    href: '#'
  }
];

export default function FallLooksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Lifestyle Images */}
          <div className="space-y-8">
            <img
              src="https://ext.same-assets.com/2802413564/3115278562.jpeg"
              alt="Fall Look 1"
              className="w-full h-auto"
            />
          </div>

          {/* Right - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.2em] uppercase text-osur-brown">Le Style</p>
              <h3 className="text-4xl md:text-5xl font-light leading-tight">
                Fall looks<br />
                elegant, easy and updated,<br />
                but very natural
              </h3>
              <p className="text-sm leading-relaxed">
                In Sool we believe that elegance is based on the naturalness and timelessness of its essence. Our footwear always brings to a look that "chic" point that distinguishes the elegant from the anodyne from the naturalness.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-osur-brown transition-colors border-b border-osur-black hover:border-osur-brown pb-1"
            >
              Buy the look
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto transition-transform group-hover:scale-105"
                />
              </div>
              <h4 className="text-center text-sm mb-4">{product.name}</h4>
              <div className="text-center">
                <Link
                  href={product.href}
                  className="text-xs tracking-wider border-b border-osur-black hover:text-osur-brown hover:border-osur-brown transition-colors pb-1"
                >
                  GO TO THE STORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute left-8 hidden xl:block">
        <p className="text-xs tracking-[0.3em] [writing-mode:vertical-lr] uppercase text-osur-gray">
          Le Style
        </p>
      </div>
    </section>
  );
}
