import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const contactItems = [
  {
    icon: "MapPin",
    title: "Адрес",
    content: 'Москва, ул. Тверская, 15\nТЦ "Галерея", 2 этаж',
  },
  {
    icon: "Phone",
    title: "Телефон",
    content: "+7 (495) 123-45-67\nЕжедневно с 10:00 до 22:00",
  },
  {
    icon: "Mail",
    title: "Email",
    content: "info@perfumeboutique.ru\nОтветим в течение 24 часов",
  },
  {
    icon: "Clock",
    title: "Часы работы",
    content: "Пн-Вс: 10:00 - 22:00\nБез выходных",
  },
];

export const ContactsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-luxury-dark mb-8">Контакты</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactItems.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon
                    name={item.icon as any}
                    size={20}
                    className="text-luxury-gold"
                  />
                  <span>{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 whitespace-pre-line">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
