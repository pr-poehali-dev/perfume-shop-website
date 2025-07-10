import { Badge } from "@/components/ui/badge";
import { PerfumeCard } from "@/components/PerfumeCard";
import { Perfume } from "@/types/perfume";

interface CatalogSectionProps {
  perfumes: Perfume[];
  onToggleFavorite: (id: number) => void;
  onEditPerfume: (perfume: Perfume) => void;
}

export const CatalogSection = ({
  perfumes,
  onToggleFavorite,
  onEditPerfume,
}: CatalogSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-luxury-dark">Каталог</h3>
          <Badge variant="secondary" className="bg-luxury-gold text-white">
            {perfumes.length} товаров
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfumes.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              onToggleFavorite={onToggleFavorite}
              onEdit={onEditPerfume}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
