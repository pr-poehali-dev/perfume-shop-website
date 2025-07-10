import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Perfume {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  volume: string;
  category: string;
  isFavorite: boolean;
}

const Index = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([
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
  ]);

  const [editingPerfume, setEditingPerfume] = useState<Perfume | null>(null);
  const [activeSection, setActiveSection] = useState("catalog");

  const toggleFavorite = (id: number) => {
    setPerfumes(
      perfumes.map((p) =>
        p.id === id ? { ...p, isFavorite: !p.isFavorite } : p,
      ),
    );
  };

  const updatePerfume = (updatedPerfume: Perfume) => {
    setPerfumes(
      perfumes.map((p) => (p.id === updatedPerfume.id ? updatedPerfume : p)),
    );
    setEditingPerfume(null);
  };

  const reviews = [
    {
      id: 1,
      name: "Анна К.",
      rating: 5,
      text: "Невероятный аромат! Держится весь день и получаю множество комплиментов.",
    },
    {
      id: 2,
      name: "Дмитрий М.",
      rating: 5,
      text: "Заказывал для жены - она в восторге. Качество на высшем уровне.",
    },
    {
      id: 3,
      name: "Елена С.",
      rating: 4,
      text: "Отличный магазин, быстрая доставка. Парфюм соответствует описанию.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-light to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-luxury-gold to-yellow-600 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-luxury-dark to-luxury-gold bg-clip-text text-transparent">
                PERFUME BOUTIQUE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection("catalog")}
                className={`font-medium transition-colors ${activeSection === "catalog" ? "text-luxury-gold" : "text-gray-600 hover:text-luxury-gold"}`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection("favorites")}
                className={`font-medium transition-colors ${activeSection === "favorites" ? "text-luxury-gold" : "text-gray-600 hover:text-luxury-gold"}`}
              >
                Избранное
              </button>
              <button
                onClick={() => setActiveSection("reviews")}
                className={`font-medium transition-colors ${activeSection === "reviews" ? "text-luxury-gold" : "text-gray-600 hover:text-luxury-gold"}`}
              >
                Отзывы
              </button>
              <button
                onClick={() => setActiveSection("contacts")}
                className={`font-medium transition-colors ${activeSection === "contacts" ? "text-luxury-gold" : "text-gray-600 hover:text-luxury-gold"}`}
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-luxury-dark">
            Эксклюзивная парфюмерия
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте для себя мир роскошных ароматов из лучших парфюмерных домов
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-luxury-gold to-yellow-600 hover:from-yellow-600 hover:to-luxury-gold text-white px-8"
            onClick={() => setActiveSection("catalog")}
          >
            Перейти к каталогу
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      {activeSection === "catalog" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-luxury-dark">Каталог</h3>
              <Badge variant="secondary" className="bg-luxury-gold text-white">
                {perfumes.length} товаров
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perfumes.map((perfume) => (
                <Card
                  key={perfume.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
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
                      onClick={() => toggleFavorite(perfume.id)}
                    >
                      <Icon
                        name={perfume.isFavorite ? "Heart" : "HeartHandshake"}
                        size={16}
                        className={
                          perfume.isFavorite ? "text-red-500" : "text-gray-400"
                        }
                      />
                    </Button>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {perfume.name}
                        </CardTitle>
                        <CardDescription className="text-luxury-gold font-medium">
                          {perfume.brand}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{perfume.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {perfume.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-luxury-dark">
                        {perfume.price.toLocaleString()} ₽
                      </span>
                      <span className="text-sm text-gray-500">
                        {perfume.volume}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-luxury-dark hover:bg-luxury-gold">
                        В корзину
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEditingPerfume(perfume)}
                          >
                            <Icon name="Edit" size={16} />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Редактировать товар</DialogTitle>
                          </DialogHeader>
                          {editingPerfume && (
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                  Название
                                </Label>
                                <Input
                                  id="name"
                                  value={editingPerfume.name}
                                  onChange={(e) =>
                                    setEditingPerfume({
                                      ...editingPerfume,
                                      name: e.target.value,
                                    })
                                  }
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="price" className="text-right">
                                  Цена
                                </Label>
                                <Input
                                  id="price"
                                  type="number"
                                  value={editingPerfume.price}
                                  onChange={(e) =>
                                    setEditingPerfume({
                                      ...editingPerfume,
                                      price: parseInt(e.target.value),
                                    })
                                  }
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="brand" className="text-right">
                                  Бренд
                                </Label>
                                <Input
                                  id="brand"
                                  value={editingPerfume.brand}
                                  onChange={(e) =>
                                    setEditingPerfume({
                                      ...editingPerfume,
                                      brand: e.target.value,
                                    })
                                  }
                                  className="col-span-3"
                                />
                              </div>
                              <Button
                                onClick={() => updatePerfume(editingPerfume)}
                                className="bg-luxury-gold hover:bg-yellow-600"
                              >
                                Сохранить изменения
                              </Button>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Favorites Section */}
      {activeSection === "favorites" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-luxury-dark mb-8">
              Избранное
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perfumes
                .filter((p) => p.isFavorite)
                .map((perfume) => (
                  <Card
                    key={perfume.id}
                    className="hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{perfume.name}</CardTitle>
                      <CardDescription className="text-luxury-gold font-medium">
                        {perfume.brand}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">
                          {perfume.price.toLocaleString()} ₽
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleFavorite(perfume.id)}
                        >
                          <Icon
                            name="Heart"
                            size={16}
                            className="text-red-500"
                          />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {perfumes.filter((p) => p.isFavorite).length === 0 && (
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
      )}

      {/* Reviews Section */}
      {activeSection === "reviews" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-luxury-dark mb-8">
              Отзывы клиентов
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className={
                              i < review.rating
                                ? "text-luxury-gold fill-current"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contacts Section */}
      {activeSection === "contacts" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-luxury-dark mb-8">
              Контакты
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-luxury-gold"
                    />
                    <span>Адрес</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Москва, ул. Тверская, 15
                    <br />
                    ТЦ "Галерея", 2 этаж
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Phone" size={20} className="text-luxury-gold" />
                    <span>Телефон</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    +7 (495) 123-45-67
                    <br />
                    Ежедневно с 10:00 до 22:00
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Mail" size={20} className="text-luxury-gold" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    info@perfumeboutique.ru
                    <br />
                    Ответим в течение 24 часов
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Clock" size={20} className="text-luxury-gold" />
                    <span>Часы работы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Пн-Вс: 10:00 - 22:00
                    <br />
                    Без выходных
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
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
                <li>
                  <button
                    onClick={() => setActiveSection("catalog")}
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Каталог
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("favorites")}
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Избранное
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("reviews")}
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Отзывы
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("contacts")}
                    className="hover:text-luxury-gold transition-colors"
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-luxury-gold">
                Следите за нами
              </h4>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-gray-300 hover:text-luxury-gold cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-gray-300 hover:text-luxury-gold cursor-pointer transition-colors"
                />
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-gray-300 hover:text-luxury-gold cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Perfume Boutique. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
