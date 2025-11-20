import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductSection() {
  return (
    <section className="py-24 bg-osur-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Image */}
          <div className="relative bg-osur-cream p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="aspect-square bg-white rounded-full flex items-center justify-center p-12 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-serif text-osur-brown">DOMO</div>
                  <div className="text-sm text-osur-gray">Pocket Shoe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-light leading-tight">
                Sool presents DOMO<br />
                The foldable shoe: The refined pocket shoe
              </h3>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Corinne Ferrer, designer and creator of the brand: as an entrepreneur who travels the world, she knows what it's like to need to take off her shoes and move on.
                </p>
                <p>
                  Domo is the answer: a foldable, stylish and immensely comfortable pocket shoe that lets you keep up the pace without leaving your feet bare.
                </p>
                <p>
                  A versatile model to wear with any outfit, from a formal office suit to a more urban and casual outfit, such as jeans.
                </p>
                <p>
                  The leather sole is cushioned and has an insole made of aloe vera microfiber, a raw material with healing, cell regenerating and toning properties. The ballerina design adapts to the shape of the foot and provides maximum support.
                </p>
                <p>
                  The pocket shoe with high-end hand-stitched finishes, 100% leather of the highest quality and ecological materials, becomes the ideal companion for your bag, always at hand!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-osur-black hover:bg-osur-black hover:text-white transition-colors"
              >
                BLACK DOME
              </Button>
              <Button
                variant="outline"
                className="border-osur-black hover:bg-osur-black hover:text-white transition-colors"
              >
                RED DOME
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
