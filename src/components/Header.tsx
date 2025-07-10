import { Section } from "@/types/perfume";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const navItems = [
    { key: "catalog" as Section, label: "Каталог" },
    { key: "favorites" as Section, label: "Избранное" },
    { key: "reviews" as Section, label: "Отзывы" },
    { key: "contacts" as Section, label: "Контакты" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-luxury-gold to-yellow-600 rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={16} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-luxury-dark to-luxury-gold bg-clip-text text-transparent">
              ARA PERFUME
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`font-medium transition-colors ${
                  activeSection === key
                    ? "text-luxury-gold"
                    : "text-gray-600 hover:text-luxury-gold"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
