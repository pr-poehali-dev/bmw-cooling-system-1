import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const antifreezeProducts = [
    {
      name: 'BMW Coolant G11',
      type: 'G11 (зелёный)',
      price: '890 ₽',
      volume: '1.5 л',
      temp: '-40°C',
      recommended: true
    },
    {
      name: 'BMW Coolant G12+',
      type: 'G12+ (красный)',
      price: '1 250 ₽',
      volume: '1.5 л',
      temp: '-45°C',
      recommended: true
    },
    {
      name: 'BMW Long Life Coolant',
      type: 'G12++ (синий)',
      price: '1 490 ₽',
      volume: '1.5 л',
      temp: '-50°C',
      recommended: true
    },
    {
      name: 'Castrol Radicool SF',
      type: 'G11/G12 универсальный',
      price: '750 ₽',
      volume: '1 л',
      temp: '-40°C',
      recommended: false
    },
    {
      name: 'Liqui Moly Kuhlerfrostschutz',
      type: 'G12++ (синий)',
      price: '1 120 ₽',
      volume: '1 л',
      temp: '-45°C',
      recommended: false
    },
    {
      name: 'Motul Inugel Expert',
      type: 'G12+ (красный)',
      price: '980 ₽',
      volume: '1 л',
      temp: '-37°C',
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Droplet" size={28} className="text-accent" />
              <h1 className="text-2xl font-bold text-primary">Антифриз для BMW</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              <Icon name="Phone" size={16} className="inline mr-2" />
              +7 (495) 123-45-67
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Система охлаждения BMW
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Система охлаждения BMW состоит из радиатора, расширительного бачка, 
                водяного насоса, термостата и патрубков. Для оптимальной работы 
                требуется качественный антифриз, соответствующий спецификациям производителя.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-accent" />
                  <span className="text-sm">Объём системы: 8-12 литров в зависимости от модели</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-accent" />
                  <span className="text-sm">Замена антифриза: каждые 2-3 года или 60 000 км</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={20} className="text-accent" />
                  <span className="text-sm">Рабочая температура: 80-105°C</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/projects/107ede2b-1974-4262-96c5-c6170dcff8c4/files/ccf4db90-7217-4d05-8957-05871b240236.jpg"
                alt="Система охлаждения BMW"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-primary mb-3">Каталог антифриза для BMW</h3>
            <p className="text-muted-foreground">Оригинальные и совместимые охлаждающие жидкости</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {antifreezeProducts.map((product) => (
              <Card key={product.name} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    {product.recommended && (
                      <Badge variant="default" className="bg-accent">
                        Рекомендуем
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{product.type}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Объём:</span>
                      <span className="font-medium">{product.volume}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Защита до:</span>
                      <span className="font-medium">{product.temp}</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <Icon name="ShoppingCart" size={20} className="text-accent cursor-pointer hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Какой антифриз нужен для BMW?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon name="Droplet" className="text-green-600" />
                    G11 (зелёный)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Для BMW до 1996 года. Силикатная основа, защита до -40°C. 
                  Срок службы 2-3 года.
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon name="Droplet" className="text-red-600" />
                    G12+ (красный)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Для BMW 1997-2008. Карбоксилатная основа, улучшенная защита. 
                  Срок службы до 5 лет.
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon name="Droplet" className="text-blue-600" />
                    G12++ (синий)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Для BMW с 2008 года. Лобридная технология, максимальная защита. 
                  Срок службы до 10 лет.
                </CardContent>
              </Card>

              <Card className="border-border bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-accent" />
                    Важно помнить
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Нельзя смешивать разные типы антифриза! 
                  При замене промывайте систему дистиллированной водой.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-90">© 2026 Антифриз для BMW. Профессиональный подбор охлаждающих жидкостей.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
