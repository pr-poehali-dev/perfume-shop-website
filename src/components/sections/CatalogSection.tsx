import { Badge } from "@/components/ui/badge";
import { PerfumeCard } from "@/components/PerfumeCard";
import { CatalogFilters } from "@/components/CatalogFilters";
import { Perfume } from "@/types/perfume";
import { useCatalogFilters } from "@/hooks/useCatalogFilters";

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
  const { filteredPerfumes, totalCount, filteredCount, setFilters } =
    useCatalogFilters(perfumes);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-luxury-dark">Каталог</h3>
          <Badge variant="secondary" className="bg-luxury-gold text-white">
            {totalCount} товаров
          </Badge>
        </div>

        <CatalogFilters
          onFilterChange={setFilters}
          totalCount={totalCount}
          filteredCount={filteredCount}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              onToggleFavorite={onToggleFavorite}
              onEdit={onEditPerfume}
            />
          ))}
        </div>

        {filteredPerfumes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Товары не найдены</p>
            <p className="text-gray-400 mt-2">Попробуйте изменить фильтры</p>
          </div>
        )}
      </div>
    </section>
  );
};
