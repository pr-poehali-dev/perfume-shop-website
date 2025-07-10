import { Section } from "@/types/perfume";
import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (section: Section) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const quickLinks = [
    { key: "catalog" as Section, label: "Каталог" },
    { key: "favorites" as Section, label: "Избранное" },
    { key: "reviews" as Section, label: "Отзывы" },
    { key: "contacts" as Section, label: "Контакты" },
  ];

  const socialIcons = [
    { name: "Instagram", icon: "Instagram" },
    { name: "Facebook", icon: "Facebook" },
    { name: "Twitter", icon: "Twitter" },
  ];

  return (
    <footer className="bg-luxury-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-luxury-gold">
              PERFUME BOUTIQUE
            </h4>
            <p className="text-gray-300">
              Эксклюзивная парфюмерия от лучших мировых брендов
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-luxury-gold">
              Быстрые ссылки
            </h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map(({ key, label }) => (
                <li key={key}>
                  <button
                    onClick={() => onNavigate(key)}
                    className="hover:text-luxury-gold transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-luxury-gold">
              Следите за нами
            </h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ name, icon }) => (
                <Icon
                  key={name}
                  name={icon as any}
                  size={20}
                  className="text-gray-300 hover:text-luxury-gold cursor-pointer transition-colors"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Perfume Boutique. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
