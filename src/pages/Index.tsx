import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  description: string;
  industry: string;
  scope: string[];
  results: string[];
}

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Концепция партнерства на рынке доставки еды',
      description: 'Разработка стратегии партнерства и развития дистрибуционной сети',
      industry: 'Foodtech',
      scope: ['Анализ рынка', 'Оценка конкурентов', 'Модель партнерства'],
      results: [
        'Предложена модель развития партнерской сети',
        'Разработаны KPI эффективности',
        'Сформированы рекомендации по масштабированию'
      ]
    },
    {
      id: 2,
      title: 'Ценностное предложение для торговой сети',
      description: 'Формирование уникального позиционирования для федеральной торговой сети',
      industry: 'Retail',
      scope: ['Customer research', 'Анализ целевой аудитории', 'Value proposition'],
      results: [
        'Сегментирована целевая аудитория',
        'Выявлены ключевые драйверы выбора',
        'Подготовлено ценностное предложение'
      ]
    },
    {
      id: 3,
      title: 'Исследование энергетических рынков',
      description: 'Оценка спроса на СПГ и электроэнергию с учетом макротрендов',
      industry: 'Энергетика',
      scope: ['Прогнозирование спроса', 'Анализ регуляторики', 'Оценка инвестиций'],
      results: [
        'Построены прогнозы спроса до 2030',
        'Оценены риски регуляторных изменений',
        'Выявлены перспективные сегменты'
      ]
    },
    {
      id: 4,
      title: 'Стратегия развития логистической компании',
      description: 'Комплексная стратегия роста в условиях изменяющегося рынка',
      industry: 'Логистика',
      scope: ['Стратегический анализ', 'Операционная модель', 'Финансовая модель'],
      results: [
        'Разработана 5-летняя стратегия',
        'Оптимизирована операционная модель',
        'Определены приоритетные направления'
      ]
    },
    {
      id: 5,
      title: 'Стимулирование инвестиций в промышленность',
      description: 'Разработка предложений для развития обрабатывающих секторов России',
      industry: 'Промышленность',
      scope: ['Анализ best practices', 'Оценка барьеров', 'Меры поддержки'],
      results: [
        'Проанализированы международные практики',
        'Выявлены ключевые барьеры',
        'Предложен пакет мер господдержки'
      ]
    },
    {
      id: 6,
      title: 'Беспилотный грузовой автотранспорт',
      description: 'Оценка перспектив внедрения автономного грузового транспорта',
      industry: 'Транспорт',
      scope: ['Технологический анализ', 'Экономическая модель', 'Регуляторика'],
      results: [
        'Оценен потенциал рынка',
        'Построена модель окупаемости',
        'Выявлены регуляторные барьеры'
      ]
    }
  ];

  const competencies = [
    {
      title: 'Анализ отраслевых рынков',
      description: 'Глубокое исследование динамики, структуры и драйверов отраслевых рынков'
    },
    {
      title: 'Разработка стратегий',
      description: 'Формирование долгосрочных стратегий развития бизнеса на основе данных'
    },
    {
      title: 'Финансовое моделирование',
      description: 'Построение прогнозных моделей и оценка экономической эффективности'
    },
    {
      title: 'Конкурентный анализ',
      description: 'Комплексная оценка конкурентной среды и позиционирования'
    }
  ];

  const values = {
    professional: ['Интеллектуальная любознательность', 'Ответственность за результат', 'Прозрачность', 'Поддержка', 'Самоотдача'],
    personal: ['Саморазвитие', 'Проявленность', 'Чувственность', 'Эмпатия', 'Эстетика']
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-32">
        
        <section className="animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.poehali.dev/files/photo_2025-08-23_09-39-36.jpg" 
                alt="Виктория Волобуева"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6 flex-1">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">
                Виктория Волобуева
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Аналитик в управленческом консалтинге
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl border-l-2 border-primary pl-6">
                Формирующийся эксперт, связующее звено между данными и стратегическими решениями
              </p>
            </div>
          </div>
        </section>

        <section className="animate-fade-in space-y-12">
          <div className="border-t border-border pt-12">
            <h2 className="text-3xl font-semibold mb-8">Обо мне</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <span className="font-medium text-foreground">Миссия:</span> Помогать бизнес-лидерам принимать смелые 
                и обоснованные стратегические решения в условиях неопределенности — с опорой на аналитику и факты
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4 text-foreground">Профессиональные ценности</h3>
                <div className="flex flex-wrap gap-2">
                  {values.professional.map((value) => (
                    <Badge key={value} variant="secondary" className="text-sm py-1.5 px-3 font-normal">
                      {value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4 text-foreground">Личные ценности</h3>
                <div className="flex flex-wrap gap-2">
                  {values.personal.map((value) => (
                    <Badge key={value} variant="outline" className="text-sm py-1.5 px-3 font-normal">
                      {value}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="animate-fade-in space-y-12">
          <div className="border-t border-border pt-12">
            <h2 className="text-3xl font-semibold mb-8">Ключевые компетенции</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {competencies.map((comp) => (
                <div key={comp.title} className="space-y-2">
                  <h3 className="text-lg font-medium text-foreground">{comp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-fade-in space-y-12">
          <div className="border-t border-border pt-12">
            <h2 className="text-3xl font-semibold mb-8">Проекты</h2>
            <div className="grid gap-6">
              {projects.map((project) => (
                <Card 
                  key={project.id}
                  className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                          <Badge variant="outline" className="text-xs">{project.industry}</Badge>
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <Icon 
                        name={selectedProject?.id === project.id ? "ChevronUp" : "ChevronDown"} 
                        className="text-muted-foreground ml-4"
                        size={20}
                      />
                    </div>

                    {selectedProject?.id === project.id && (
                      <div className="mt-6 pt-6 border-t border-border space-y-6 animate-fade-in">
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3">Области работы</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.scope.map((item) => (
                              <Badge key={item} className="text-xs py-1 px-3 font-normal">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3">Результаты</h4>
                          <ul className="space-y-2">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-fade-in space-y-12">
          <div className="border-t border-border pt-12">
            <h2 className="text-3xl font-semibold mb-8">Образование</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-lg font-medium text-foreground">Новосибирский государственный университет</h3>
                <p className="text-muted-foreground">Бакалавр экономики</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-lg font-medium text-foreground">НИУ ВШЭ</h3>
                <p className="text-muted-foreground">Магистр по направлению «Маркетинг: цифровые технологии и маркетинговые коммуникации»</p>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fade-in">
          <div className="border-t border-border pt-12">
            <h2 className="text-3xl font-semibold mb-8">Контакты</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" className="gap-2">
                <Icon name="Mail" size={18} />
                Написать
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Icon name="Linkedin" size={18} />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Icon name="FileText" size={18} />
                Резюме
              </Button>
            </div>
          </div>
        </section>

        <footer className="border-t border-border pt-12 pb-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Виктория Волобуева. Портфолио аналитика управленческого консалтинга
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;