import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Perfume } from "@/types/perfume";
import Icon from "@/components/ui/icon";

interface PerfumeCardProps {
  perfume: Perfume;
  onToggleFavorite: (id: number) => void;
  onEdit: (perfume: Perfume) => void;
  showEditButton?: boolean;
}

export const PerfumeCard = ({
  perfume,
  onToggleFavorite,
  onEdit,
  showEditButton = true,
}: PerfumeCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={() => onToggleFavorite(perfume.id)}
        >
          <Icon
            name={perfume.isFavorite ? "Heart" : "HeartHandshake"}
            size={16}
            className={perfume.isFavorite ? "text-red-500" : "text-gray-400"}
          />
        </Button>
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{perfume.name}</CardTitle>
            <CardDescription className="text-luxury-gold font-medium">
              {perfume.brand}
            </CardDescription>
          </div>
          <Badge variant="outline">{perfume.category}</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{perfume.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-luxury-dark">
            {perfume.price.toLocaleString()} ₽
          </span>
          <span className="text-sm text-gray-500">{perfume.volume}</span>
        </div>

        <div className="flex space-x-2">
          <Button className="flex-1 bg-luxury-dark hover:bg-luxury-gold">
            В корзину
          </Button>
          {showEditButton && (
            <Button variant="outline" size="sm" onClick={() => onEdit(perfume)}>
              <Icon name="Edit" size={16} />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
