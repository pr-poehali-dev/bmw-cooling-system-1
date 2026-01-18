import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [compatibilityResult, setCompatibilityResult] = useState<string | null>(null);

  const categories = [
    { name: 'Моторные масла', icon: 'Droplet', items: 342 },
    { name: 'Фильтры', icon: 'Filter', items: 567 },
    { name: 'Тормозная система', icon: 'Disc', items: 234 },
    { name: 'Подвеска', icon: 'Wind', items: 189 },
    { name: 'Электрика', icon: 'Zap', items: 421 },
    { name: 'Трансмиссия', icon: 'Settings', items: 156 },
  ];

  const brands = ['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Honda'];
  const models: Record<string, string[]> = {
    'BMW': ['3 Series', '5 Series', 'X5', 'X3'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE'],
    'Audi': ['A4', 'A6', 'Q5', 'Q7'],
  };

  const handleCheckCompatibility = () => {
    if (selectedBrand && selectedModel && selectedYear) {
      setCompatibilityResult(`✓ Найдено 47 совместимых запчастей для ${selectedBrand} ${selectedModel} ${selectedYear} года`);
    } else {
      setCompatibilityResult('Заполните все поля для проверки');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Wrench" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">AutoParts Pro</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#catalog" className="text-foreground hover:text-accent transition-colors font-medium">
                Каталог
              </a>
              <a href="#compatibility" className="text-foreground hover:text-accent transition-colors font-medium">
                Подбор запчастей
              </a>
              <a href="#contacts" className="text-foreground hover:text-accent transition-colors font-medium">
                Контакты
              </a>
            </nav>
            <Button variant="outline" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-secondary to-background py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Оригинальные запчасти для вашего автомобиля
              </h2>
              <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                Профессиональный поставщик автозапчастей и расходных материалов. 
                Гарантия качества, быстрая доставка, техническая поддержка.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Search" size={18} className="mr-2" />
                  Подобрать запчасти
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/107ede2b-1974-4262-96c5-c6170dcff8c4/files/4eb91654-f617-4ccd-9858-4418db45c614.jpg"
                alt="Автозапчасти"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-3">Каталог запчастей</h3>
            <p className="text-muted-foreground">Выберите категорию для поиска нужных деталей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center">
                      <Icon name={category.icon as any} size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{category.items} товаров</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="compatibility" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-3">Проверка совместимости</h3>
              <p className="text-muted-foreground">Укажите параметры вашего автомобиля для подбора совместимых запчастей</p>
            </div>
            
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <Label htmlFor="brand" className="mb-2 block font-medium">Марка автомобиля</Label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Выберите марку" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="model" className="mb-2 block font-medium">Модель</Label>
                    <Select 
                      value={selectedModel} 
                      onValueChange={setSelectedModel}
                      disabled={!selectedBrand}
                    >
                      <SelectTrigger id="model">
                        <SelectValue placeholder="Выберите модель" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedBrand && models[selectedBrand]?.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="year" className="mb-2 block font-medium">Год выпуска</Label>
                    <Input
                      id="year"
                      type="number"
                      placeholder="2020"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      min="1990"
                      max="2026"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleCheckCompatibility} 
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  <Icon name="CheckCircle" size={18} className="mr-2" />
                  Проверить совместимость
                </Button>

                {compatibilityResult && (
                  <div className={`mt-6 p-4 rounded-md ${compatibilityResult.includes('✓') ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                    <p className={`font-medium ${compatibilityResult.includes('✓') ? 'text-green-800' : 'text-yellow-800'}`}>
                      {compatibilityResult}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={28} className="text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-2">Гарантия качества</h4>
                <p className="text-sm text-muted-foreground">Только оригинальные запчасти от проверенных производителей</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Truck" size={28} className="text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-2">Быстрая доставка</h4>
                <p className="text-sm text-muted-foreground">Доставка по Москве в день заказа, по России 2-5 дней</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Headphones" size={28} className="text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-2">Поддержка 24/7</h4>
                <p className="text-sm text-muted-foreground">Консультации по подбору и техническим характеристикам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-3">Контакты</h3>
            <p className="text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-border mb-6">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-accent mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Адрес офиса</h4>
                        <p className="text-muted-foreground">г. Москва, ул. Автозаводская, д. 15, офис 301</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-accent mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Телефон</h4>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-accent mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Email</h4>
                        <p className="text-muted-foreground">info@autoparts-pro.ru</p>
                        <p className="text-muted-foreground">sales@autoparts-pro.ru</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-accent mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">График работы</h4>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                        <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                        <p className="text-muted-foreground">Вс: выходной</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Обратная связь</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.ru" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Опишите ваш вопрос..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={24} />
              <span className="font-bold text-lg">AutoParts Pro</span>
            </div>
            <p className="text-sm opacity-90">© 2026 AutoParts Pro. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
