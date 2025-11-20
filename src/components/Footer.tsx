import { Instagram, Facebook, Youtube, PinIcon as Pinterest } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-osur-black/10">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter */}
        <div className="mb-16 text-center max-w-md mx-auto">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="border-osur-black/20 focus:border-osur-brown"
            />
            <Button className="bg-osur-black hover:bg-osur-brown transition-colors">
              →
            </Button>
          </div>
          <div className="flex items-center gap-2 justify-center text-sm">
            <Instagram className="w-5 h-5" />
            <span>Sool</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-xs tracking-wider">
          <Link href="/about" className="hover:text-osur-brown transition-colors">
            SOBRE SOOL
          </Link>
          <Link href="/collaborations" className="hover:text-osur-brown transition-colors">
            COLABORACIONES
          </Link>
          <Link href="/contact" className="hover:text-osur-brown transition-colors">
            CONTACTO
          </Link>
          <Link href="/privacy" className="hover:text-osur-brown transition-colors">
            POLÍTICA DE PRIVACIDAD
          </Link>
          <Link href="/cookies" className="hover:text-osur-brown transition-colors">
            POLÍTICA DE COOKIES
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <Link href="#" className="hover:text-osur-brown transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-osur-brown transition-colors">
            <Youtube className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-osur-brown transition-colors">
            <Pinterest className="w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-osur-gray">
          <p>©2025 Sool · <Link href="/privacy" className="hover:text-osur-brown">Política de Privacidad</Link></p>
        </div>
      </div>
    </footer>
  );
}
