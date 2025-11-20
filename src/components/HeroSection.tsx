import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-32">
        {/* Left Side - Text */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-osur-brown">Editorial</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              A look works if it is easy, unique and timeless. Our proposals always are.
            </h2>
          </div>
          <Link
            href="/editorial"
            className="inline-block text-sm tracking-wider hover:text-osur-brown transition-colors border-b border-osur-black hover:border-osur-brown pb-1"
          >
            Read
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="relative aspect-[3/4] lg:aspect-square">
          <img
            src="https://ext.same-assets.com/2802413564/3304508340.jpeg"
            alt="Sool Fashion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Vertical Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-xs tracking-[0.3em] [writing-mode:vertical-lr] uppercase">
          Editorial
        </p>
      </div>
    </section>
  );
}
