import { useState } from "react";
import { Perfume } from "@/types/perfume";

const initialPerfumes: Perfume[] = [
  {
    id: 1,
    name: "Noir Élégant",
    brand: "Maison Luxe",
    price: 12500,
    image: "img/e2264b31-8687-4050-9807-20ab7d778f30.jpg",
    description: "Утонченный аромат с нотами черного перца и амбры",
    volume: "100ml",
    category: "Унисекс",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Crystalline",
    brand: "Parfum Royal",
    price: 15800,
    image: "img/6bda6ffc-3cbb-4994-8d2e-890e4a371ea4.jpg",
    description: "Кристально чистый аромат с цветочными нотами",
    volume: "50ml",
    category: "Женский",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Golden Essence",
    brand: "Prestige",
    price: 18200,
    image: "img/2a012740-faf9-4cc8-82e2-bddb58210f21.jpg",
    description: "Роскошный аромат с золотистыми нотами ванили",
    volume: "75ml",
    category: "Мужской",
    isFavorite: false,
  },
];

export const usePerfumes = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>(initialPerfumes);

  const toggleFavorite = (id: number) => {
    setPerfumes((prev) =>
      prev.map((perfume) =>
        perfume.id === id
          ? { ...perfume, isFavorite: !perfume.isFavorite }
          : perfume,
      ),
    );
  };

  const updatePerfume = (updatedPerfume: Perfume) => {
    setPerfumes((prev) =>
      prev.map((perfume) =>
        perfume.id === updatedPerfume.id ? updatedPerfume : perfume,
      ),
    );
  };

  const getFavorites = () => perfumes.filter((perfume) => perfume.isFavorite);

  return {
    perfumes,
    toggleFavorite,
    updatePerfume,
    getFavorites,
  };
};
