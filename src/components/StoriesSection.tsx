import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    title: "Footwear in the cinema: Coco Chanel's movie costumes (II)",
    href: "#"
  },
  {
    title: "Footwear in the movies: Paco Rabanne's designs for Barbarella",
    href: "#"
  },
  {
    title: "Footwear in the movies: Manolo Blahnik and Sex and the City (II)",
    href: "#"
  }
];

export default function StoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-sm tracking-[0.2em] uppercase text-osur-brown">
            Les histoires
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="group">
              <Link href={story.href}>
                <h4 className="text-xl font-light hover:text-osur-brown transition-colors">
                  {story.title}
                </h4>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href="/stories"
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
          Themes
        </p>
      </div>
    </section>
  );
}
