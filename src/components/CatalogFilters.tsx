import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface CatalogFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  totalCount: number;
  filteredCount: number;
}

export interface FilterState {
  search: string;
  category: string;
  priceRange: [number, number];
  sortBy: string;
}

export const CatalogFilters = ({
  onFilterChange,
  totalCount,
  filteredCount,
}: CatalogFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    priceRange: [0, 30000],
    sortBy: "name",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const resetFilters = () => {
    const resetState = {
      search: "",
      category: "all",
      priceRange: [0, 30000] as [number, number],
      sortBy: "name",
    };
    setFilters(resetState);
    onFilterChange(resetState);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Filter" size={20} />
            <span>Фильтры</span>
            <span className="text-sm text-gray-500">
              ({filteredCount} из {totalCount})
            </span>
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Поиск */}
            <div>
              <Label htmlFor="search">Поиск</Label>
              <Input
                id="search"
                placeholder="Название или бренд..."
                value={filters.search}
                onChange={(e) => updateFilters({ search: e.target.value })}
              />
            </div>

            {/* Категория */}
            <div>
              <Label>Категория</Label>
              <Select
                value={filters.category}
                onValueChange={(value) => updateFilters({ category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="Женский">Женский</SelectItem>
                  <SelectItem value="Мужской">Мужской</SelectItem>
                  <SelectItem value="Унисекс">Унисекс</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Сортировка */}
            <div>
              <Label>Сортировка</Label>
              <Select
                value={filters.sortBy}
                onValueChange={(value) => updateFilters({ sortBy: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Сортировать по" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-asc">По цене (возр.)</SelectItem>
                  <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
                  <SelectItem value="brand">По бренду</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Сброс фильтров */}
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full"
              >
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить
              </Button>
            </div>
          </div>

          {/* Цена */}
          <div className="mt-4">
            <Label>
              Цена: {filters.priceRange[0].toLocaleString()} -{" "}
              {filters.priceRange[1].toLocaleString()} ₽
            </Label>
            <div className="mt-2">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) =>
                  updateFilters({ priceRange: value as [number, number] })
                }
                min={0}
                max={30000}
                step={500}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
