import { useState, useMemo } from "react";
import { Perfume } from "@/types/perfume";
import { FilterState } from "@/components/CatalogFilters";

export const useCatalogFilters = (perfumes: Perfume[]) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    priceRange: [0, 30000],
    sortBy: "name",
  });

  const filteredPerfumes = useMemo(() => {
    let result = [...perfumes];

    // Фильтр по поиску
    if (filters.search) {
      result = result.filter(
        (perfume) =>
          perfume.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          perfume.brand.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    // Фильтр по категории
    if (filters.category !== "all") {
      result = result.filter(
        (perfume) => perfume.category === filters.category,
      );
    }

    // Фильтр по цене
    result = result.filter(
      (perfume) =>
        perfume.price >= filters.priceRange[0] &&
        perfume.price <= filters.priceRange[1],
    );

    // Сортировка
    switch (filters.sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "brand":
        result.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
    }

    return result;
  }, [perfumes, filters]);

  return {
    filters,
    setFilters,
    filteredPerfumes,
    totalCount: perfumes.length,
    filteredCount: filteredPerfumes.length,
  };
};
