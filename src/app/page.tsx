import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StoriesSection from '@/components/StoriesSection';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import ProductSection from '@/components/ProductSection';
import FallLooksSection from '@/components/FallLooksSection';
import VideoSection from '@/components/VideoSection';
import BrandStorySection from '@/components/BrandStorySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <StoriesSection />
        <CraftsmanshipSection />
        <ProductSection />
        <FallLooksSection />
        <VideoSection />
        <BrandStorySection />
      </main>
      <Footer />
    </div>
  );
}
