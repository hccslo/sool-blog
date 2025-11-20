import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function VideoSection() {
  return (
    <section className="py-24 bg-osur-black text-white">
      <div className="container mx-auto px-6">
        {/* Main Video */}
        <div className="mb-16">
          <div className="relative aspect-video bg-[#d4c4a8] flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-8xl font-light text-osur-brown-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                Sool
              </div>
            </div>
            <button className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-osur-black ml-1" fill="currentColor" />
            </button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-osur-brown-dark text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Art and Passion
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-osur-gray mb-2">Vlog</p>
            <h3 className="text-3xl md:text-4xl font-light">OUR VIDEOPODCAST</h3>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Link href="#" className="group">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-osur-gray flex-shrink-0">
                {/* Video thumbnail placeholder */}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Play className="w-3 h-3 text-osur-black ml-0.5" fill="currentColor" />
                </div>
                <h4 className="text-lg group-hover:text-osur-brown transition-colors">The materials</h4>
              </div>
            </div>
          </Link>

          <Link href="#" className="group">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-osur-gray flex-shrink-0">
                {/* Video thumbnail placeholder */}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Play className="w-3 h-3 text-osur-black ml-0.5" fill="currentColor" />
                </div>
                <h4 className="text-lg group-hover:text-osur-brown transition-colors">Craftsmanship</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-end">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-osur-brown transition-colors"
          >
            Visit our channel
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute left-8 hidden xl:block">
        <p className="text-xs tracking-[0.3em] [writing-mode:vertical-lr] uppercase text-osur-gray">
          Video
        </p>
      </div>
    </section>
  );
}
