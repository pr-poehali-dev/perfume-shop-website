import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigateToCatalog: () => void;
}

export const HeroSection = ({ onNavigateToCatalog }: HeroSectionProps) => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-6 text-luxury-dark">
          Эксклюзивная парфюмерия
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Откройте для себя мир роскошных ароматов из лучших парфюмерных домов
          по розничным и оптовым ценам{" "}
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-luxury-gold to-yellow-600 hover:from-yellow-600 hover:to-luxury-gold text-white px-8"
          onClick={onNavigateToCatalog}
        >
          Перейти к каталогу
        </Button>
      </div>
    </section>
  );
};
