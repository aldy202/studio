import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PackageIcon, UtensilsIcon, SparklesIcon, BlendIcon, ZapIcon } from 'lucide-react'; // ZapIcon for cheese/choco, Blend for Mix
import Link from 'next/link';

const menuItems = [
  {
    id: 'frozen',
    title: 'Frozen Food',
    price: 'Rp 10k',
    description: 'Mau stok camilan di rumah? Dapatkan Kaju Aroma Frozen Food, praktis dan tahan lama!',
    imageSrc: 'https://picsum.photos/seed/kaju_frozen/600/400',
    imageHint: 'frozen snack package',
    icon: <PackageIcon className="h-8 w-8 text-primary mb-2" />,
  },
  {
    id: 'ready',
    title: 'Siap Makan',
    price: 'Rp 12k',
    description: 'Ingin camilan cepat saji? Coba Kaju Aroma Siap Makan, langsung santap!',
    imageSrc: 'https://picsum.photos/seed/kaju_ready/600/400',
    imageHint: 'snack ready eat',
    icon: <UtensilsIcon className="h-8 w-8 text-primary mb-2" />,
  },
];

const variants = [
  { name: 'Keju Aroma', imageSrc: 'https://picsum.photos/seed/kaju_cheese/400/300', imageHint: 'cheese snack', icon: <ZapIcon className="h-5 w-5 mr-2 text-secondary-foreground" /> },
  { name: 'Coklat Aroma', imageSrc: 'https://picsum.photos/seed/kaju_choco/400/300', imageHint: 'chocolate snack', icon: <ZapIcon className="h-5 w-5 mr-2 text-secondary-foreground" /> },
  { name: 'Mix Varian (Keju & Coklat)', imageSrc: 'https://picsum.photos/seed/kaju_mix/400/300', imageHint: 'cheese chocolate mix', icon: <BlendIcon className="h-5 w-5 mr-2 text-secondary-foreground" /> },
];

const toppings = [
  { name: 'Vanilla', imageSrc: 'https://picsum.photos/seed/kaju_vanilla_top/300/200', imageHint: 'vanilla topping' },
  { name: 'Coklat', imageSrc: 'https://picsum.photos/seed/kaju_choco_top/300/200', imageHint: 'chocolate topping' },
  { name: 'Matcha', imageSrc: 'https://picsum.photos/seed/kaju_matcha_top/300/200', imageHint: 'matcha topping' },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Menu Kaju Aroma</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {menuItems.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="relative h-60 w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={item.imageHint}
                />
              </div>
              <CardHeader className="items-center text-center">
                {item.icon}
                <CardTitle className="text-2xl text-foreground">{item.title}</CardTitle>
                <CardDescription className="text-xl font-semibold text-primary">{item.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-center">{item.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild variant="secondary" className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link href="https://www.instagram.com/kajuaroma" target="_blank" rel="noopener noreferrer">
                    Pesan {item.title}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Separator className="my-12 bg-border" />

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">Varian Rasa</h3>
          <p className="text-muted-foreground">Pilih favoritmu atau campur keduanya!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {variants.map((variant) => (
            <Card key={variant.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="relative h-48 w-full">
                <Image src={variant.imageSrc} alt={variant.name} layout="fill" objectFit="cover" data-ai-hint={variant.imageHint} />
              </div>
              <CardContent className="p-4 text-center">
                 <div className="flex items-center justify-center mb-2">
                    {variant.icon}
                    <h4 className="text-lg font-medium text-foreground">{variant.name}</h4>
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator className="my-12 bg-border" />

        <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-2">
                 <SparklesIcon className="h-8 w-8 text-primary mr-2" />
                 <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Pilihan Topping</h3>
            </div>
          <p className="text-muted-foreground">Tambahkan sentuhan akhir yang manis!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppings.map((topping) => (
            <Card key={topping.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="relative h-40 w-full">
                <Image src={topping.imageSrc} alt={topping.name} layout="fill" objectFit="cover" data-ai-hint={topping.imageHint} />
              </div>
              <CardContent className="p-4 text-center">
                <h4 className="text-lg font-medium text-foreground">{topping.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-lg text-muted-foreground">
          Topping bisa dicampur atau dipisah? <span className="font-semibold text-primary">Terserah kamu!</span>
        </p>
      </div>
    </section>
  );
}
