import { useState } from "react";
import { Perfume } from "@/types/perfume";
import { usePerfumes } from "@/hooks/usePerfumes";
import { useNavigation } from "@/hooks/useNavigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { FavoritesSection } from "@/components/sections/FavoritesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { PerfumeEditDialog } from "@/components/PerfumeEditDialog";

const Index = () => {
  const { perfumes, toggleFavorite, updatePerfume, getFavorites } =
    usePerfumes();
  const { activeSection, navigateToSection } = useNavigation();
  const [editingPerfume, setEditingPerfume] = useState<Perfume | null>(null);

  const handleEditPerfume = (perfume: Perfume) => {
    setEditingPerfume(perfume);
  };

  const handleSavePerfume = (updatedPerfume: Perfume) => {
    updatePerfume(updatedPerfume);
    setEditingPerfume(null);
  };

  const handleNavigateToCatalog = () => {
    navigateToSection("catalog");
  };

  const renderCurrentSection = () => {
    switch (activeSection) {
      case "catalog":
        return (
          <CatalogSection
            perfumes={perfumes}
            onToggleFavorite={toggleFavorite}
            onEditPerfume={handleEditPerfume}
          />
        );
      case "favorites":
        return (
          <FavoritesSection
            favorites={getFavorites()}
            onToggleFavorite={toggleFavorite}
          />
        );
      case "reviews":
        return <ReviewsSection />;
      case "contacts":
        return <ContactsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-light to-white">
      <Header activeSection={activeSection} onNavigate={navigateToSection} />

      <HeroSection onNavigateToCatalog={handleNavigateToCatalog} />

      {renderCurrentSection()}

      <Footer onNavigate={navigateToSection} />

      <PerfumeEditDialog
        perfume={editingPerfume}
        isOpen={!!editingPerfume}
        onClose={() => setEditingPerfume(null)}
        onSave={handleSavePerfume}
      />
    </div>
  );
};

export default Index;
