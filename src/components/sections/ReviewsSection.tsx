import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "@/types/perfume";
import Icon from "@/components/ui/icon";

const reviews: Review[] = [
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

export const ReviewsSection = () => {
  return (
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
  );
};
