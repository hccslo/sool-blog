import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    title: 'Our 10 tips for healthy feet',
    href: '#'
  },
  {
    title: 'What is Vegetable Leather?',
    href: '#'
  }
];

export default function CraftsmanshipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h3 className="text-sm tracking-[0.2em] uppercase text-osur-brown mb-12">
            The feet on the ground
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left - Main Featured Article */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://ext.same-assets.com/2802413564/676028902.webp"
                alt="Local craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-light">
                Local craftsmanship. The key to our respectful production
              </h4>
              <p className="text-sm leading-relaxed text-osur-gray">
                In Sool our goal is to offer a more sustainable fashion through a commitment to handcrafted footwear: made by local shoemakers, with environmentally friendly materials and maintaining the Mediterranean essence in each design.
              </p>
            </div>
          </div>

          {/* Right - Product Image */}
          <div className="relative">
            <img
              src="https://ext.same-assets.com/2802413564/3406971899.jpeg"
              alt="O·SUR Products"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Additional Articles */}
        <div className="space-y-6 mb-8">
          {articles.map((article, index) => (
            <div key={index} className="border-t border-osur-black/10 pt-6">
              <Link href={article.href} className="text-lg hover:text-osur-brown transition-colors">
                {article.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-osur-brown transition-colors"
          >
            See all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute left-8 hidden xl:block">
        <p className="text-xs tracking-[0.3em] [writing-mode:vertical-lr] uppercase text-osur-gray">
          The Production
        </p>
      </div>
    </section>
  );
}
