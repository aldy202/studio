import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircleIcon } from "lucide-react";

const faqItems = [
  {
    id: "faq1",
    question: "Apa itu Kaju Aroma?",
    answer: "Kaju Aroma adalah camilan ringan yang terbuat dari kulit lumpia dengan isian keju atau coklat, lengkap dengan topping pilihan.",
  },
  {
    id: "faq2",
    question: "Bagaimana cara memesan?",
    answer: "Anda bisa memesan langsung melalui website ini dengan menekan tombol 'Pesan Sekarang' yang akan mengarahkan ke Instagram kami, atau menghubungi kami langsung di Instagram @kajuaroma.",
  },
  {
    id: "faq3",
    question: "Apakah bisa request campur topping?",
    answer: "Tentu saja, topping bisa dicampur atau dipisah sesuai permintaan Anda!",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
            <HelpCircleIcon className="h-10 w-10 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-card-foreground">Pertanyaan yang Sering Ditanyakan</h2>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b-muted-foreground/20">
              <AccordionTrigger className="text-lg hover:no-underline text-left text-card-foreground data-[state=open]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
