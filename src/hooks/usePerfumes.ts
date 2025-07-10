import { useState } from "react";
import { Perfume } from "@/types/perfume";
import { perfumesData } from "@/data/perfumes";

export const usePerfumes = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>(perfumesData);

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
