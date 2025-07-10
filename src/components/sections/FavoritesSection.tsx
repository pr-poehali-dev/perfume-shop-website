import { PerfumeCard } from "@/components/PerfumeCard";
import { Perfume } from "@/types/perfume";
import Icon from "@/components/ui/icon";

interface FavoritesSectionProps {
  favorites: Perfume[];
  onToggleFavorite: (id: number) => void;
}

export const FavoritesSection = ({
  favorites,
  onToggleFavorite,
}: FavoritesSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-luxury-dark mb-8">Избранное</h3>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((perfume) => (
              <PerfumeCard
                key={perfume.id}
                perfume={perfume}
                onToggleFavorite={onToggleFavorite}
                onEdit={() => {}}
                showEditButton={false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon
              name="Heart"
              size={64}
              className="text-gray-300 mx-auto mb-4"
            />
            <p className="text-gray-500">Пока нет избранных товаров</p>
          </div>
        )}
      </div>
    </section>
  );
};
