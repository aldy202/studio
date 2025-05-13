import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-card text-card-foreground py-20 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/kaju_hero/1600/900"
          alt="Kaju Aroma Snacks"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          data-ai-hint="snack cheese chocolate"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
          Selamat datang di <span className="text-primary">Kaju Aroma</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
          – Camilan Kekinian dengan Keju dan Coklat Enak! –
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-foreground/90">
          Menikmati camilan ringan yang praktis dan lezat, Kaju Aroma hadir untuk memanjakan lidah Anda. Dengan varian rasa keju dan coklat, siap disantap langsung atau sebagai frozen food. Topping? Tentu saja kami punya Vanilla, Coklat, dan Matcha! Yuk, coba varian favoritmu sekarang!
        </p>
        <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link href="https://www.instagram.com/kajuaroma" target="_blank" rel="noopener noreferrer">
            Tunggu apa lagi? Pesan Sekarang!
          </Link>
        </Button>
      </div>
    </section>
  );
}
