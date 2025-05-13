import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InstagramIcon, PhoneIcon } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Hubungi Kami</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <Link href="https://www.instagram.com/kajuaroma" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-primary transition-colors">
            <InstagramIcon className="h-6 w-6 mr-2" />
            @kajuaroma
          </Link>
          <Link href="https://wa.me/62895364829020" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-primary transition-colors">
            <PhoneIcon className="h-6 w-6 mr-2" />
            +62-895-3648-29020 (Kaju Aroma)
          </Link>
        </div>
        <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link href="https://www.instagram.com/kajuaroma" target="_blank" rel="noopener noreferrer">
            Pesan Kaju Aroma Sekarang!
          </Link>
        </Button>
        <p className="mt-8 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kaju Aroma Delights. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
