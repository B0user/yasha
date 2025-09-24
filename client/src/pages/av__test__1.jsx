import React from 'react';
import { Box, Container, Grid, Typography, Card, Avatar, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  HeroBlock, 
  BenefitsBlock, 
  CasesBlock, 
  ProcessBlock, 
  ReviewsBlock, 
  FinalCTABlock 
} from '../components/blocks';

// Данные для лендинга быстрого сбора заявок
const landingData = {
  hero: {
    title: 'Ремонт подъездов и инженерных сетей — смета за 1 день',
    subtitle: 'Бесплатный замер, полное сопровождение документации, гарантия до 5 лет',
    backgroundImage: '/smr/after/31.webp',
    ctaForm: {
      title: 'Получить бесплатную смету',
      buttonText: 'Получить бесплатную смету',
      fields: ['name', 'phone']
    }
  },
  
  benefits: [
    {
      icon: '📐',
      title: 'Бесплатная смета и замеры',
      description: 'Экономия до 50 тыс. ₽',
      number: '0₽'
    },
    {
      icon: '🛠️',
      title: 'Работаем по ГОСТ и СНИП',
      description: 'Гарантия до 5 лет',
      number: '5 лет'
    },
    {
      icon: '📑',
      title: 'Сопровождение документации',
      description: '«Под ключ»',
      number: '100%'
    },
    {
      icon: '👷',
      title: 'Собственные специалисты',
      description: 'Проектировщики и монтажные бригады',
      number: '24/7'
    }
  ],

  cases: [
    {
      id: 1,
      title: 'Капитальный ремонт подъезда',
      description: 'Полный ремонт подъезда с заменой инженерных сетей',
      beforeImage: '/smr/before/31.webp',
      afterImage: '/smr/after/31.webp',
      details: 'Сдано в срок, по смете без удорожаний'
    },
    {
      id: 2,
      title: 'Шлифовка бетонных ступенек',
      description: 'Восстановление поверхности ступенек в МКД',
      beforeImage: '/smr/before/41.webp',
      afterImage: '/smr/after/41.webp',
      details: 'Сдано в срок, по смете без удорожаний'
    },
    {
      id: 3,
      title: 'Гидроизоляция стилобата',
      description: 'Устройство гидроизоляции многоквартирного дома',
      beforeImage: '/smr/before/21.webp',
      afterImage: '/smr/after/21.webp',
      details: 'Сдано в срок, по смете без удорожаний'
    }
  ],

  process: [
    {
      number: '1',
      title: 'Заявка',
      description: 'Звонок в течение 30 минут',
      icon: '📞',
      timeline: 'День 1'
    },
    {
      number: '2',
      title: 'Замер и смета',
      description: 'За 1 день',
      icon: '📏',
      timeline: 'День 2'
    },
    {
      number: '3',
      title: 'Договор',
      description: 'С фиксированной ценой',
      icon: '📋',
      timeline: 'День 3'
    },
    {
      number: '4',
      title: 'Выполнение работ',
      description: 'И сдача с гарантией',
      icon: '🔨',
      timeline: '7-30 дней'
    }
  ],

  reviews: [
    {
      id: 1,
      name: 'Анна Петрова',
      position: 'Председатель ЖСК "Союзная 22"',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      text: 'Отличная работа по гидроизоляции! Все документы оформили быстро, работы выполнили качественно. Рекомендую!',
      date: '15.03.2024',
      project: 'Гидроизоляция стилобата',
      tags: ['ЖСК', 'Документооборот', 'Качественно']
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      position: 'Управляющий ЖК "Вернадский 93"',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      text: 'Делали капремонт подъездов. Все сроки соблюдены, цена не изменилась. Работаем уже второй год!',
      date: '28.02.2024',
      project: 'Капремонт 3-х подъездов',
      tags: ['УК', 'В срок', 'Постоянный клиент']
    },
    {
      id: 3,
      name: 'Елена Козлова',
      position: 'Технический директор "СтройДевелопмент"',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      text: 'Профессиональный подход к проектированию и выполнению работ. Все по ГОСТ и СНИП.',
      date: '10.02.2024',
      project: 'Инженерные сети',
      tags: ['Девелопер', 'ГОСТ', 'Профессионально']
    }
  ]
};

// Компонент контактов с фото руководителя
const ContactsBlock = () => (
  <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold', color: '#2c3e50' }}>
              Контакты
            </Typography>
            
            <Stack spacing={3}>
              <Box>
                <Typography variant="h4" sx={{ 
                  fontWeight: 'bold', 
                  color: '#ff6b35',
                  mb: 1,
                  fontSize: { xs: '1.8rem', md: '2.2rem' }
                }}>
                  +7 (495) 123-45-67
                </Typography>
                <Button 
                  variant="contained"
                  size="large"
                  href="tel:+74951234567"
                  sx={{ 
                    bgcolor: '#ff6b35',
                    mr: 2,
                    mb: 2,
                    '&:hover': { bgcolor: '#e55a2b' }
                  }}
                >
                  Позвонить
                </Button>
                <Button 
                  variant="outlined"
                  size="large"
                  href="https://wa.me/74951234567"
                  sx={{ 
                    borderColor: '#25D366',
                    color: '#25D366',
                    mr: 2,
                    mb: 2,
                    '&:hover': { 
                      borderColor: '#25D366',
                      bgcolor: '#25D36610'
                    }
                  }}
                >
                  WhatsApp
                </Button>
                <Button 
                  variant="outlined"
                  size="large"
                  href="https://t.me/uznurproject"
                  sx={{ 
                    borderColor: '#0088cc',
                    color: '#0088cc',
                    mb: 2,
                    '&:hover': { 
                      borderColor: '#0088cc',
                      bgcolor: '#0088cc10'
                    }
                  }}
                >
                  Telegram
                </Button>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 1 }}>
                  Адрес офиса:
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  г. Москва, ул. Примерная, д. 1, офис 100
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 1 }}>
                  Email:
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  info@uznur-project.ru
                </Typography>
              </Box>
            </Stack>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card sx={{ p: 4, textAlign: 'center', boxShadow: 4 }}>
              <Avatar
                src="/api/placeholder/150/150"
                sx={{
                  width: 150,
                  height: 150,
                  mx: 'auto',
                  mb: 3,
                  border: '4px solid #ff6b35'
                }}
              >
                Я
              </Avatar>
              
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 2 }}>
                Яшар Алиев
              </Typography>
              
              <Typography variant="h6" sx={{ color: '#ff6b35', mb: 3 }}>
                Руководитель УЗНУР-ПРОДЖЕКТ
              </Typography>
              
              <Typography variant="body1" sx={{ 
                color: '#666',
                fontStyle: 'italic',
                lineHeight: 1.6
              }}>
                "Я лично отвечаю за сроки и качество работ. 
                Каждый проект для нас — это репутация компании."
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const AVTest1Page = () => {
  return (
    <Box>
      {/* 1. Первый экран (главный оффер) */}
      <HeroBlock
        variant="A"
        title={landingData.hero.title}
        subtitle={landingData.hero.subtitle}
        backgroundImage={landingData.hero.backgroundImage}
        showForm={true}
        formTitle={landingData.hero.ctaForm.title}
        formButtonText={landingData.hero.ctaForm.buttonText}
        formFields={landingData.hero.ctaForm.fields}
        accentColor="#ff6b35"
        textColor="white"
      />

      {/* 2. Почему выбирают нас (УТП) */}
      <BenefitsBlock
        variant="A"
        title="Почему выбирают нас"
        subtitle="Работаем с УК, ЖСК и девелоперами"
        benefits={landingData.benefits}
        accentColor="#ff6b35"
        backgroundColor="#f8f9fa"
      />

      {/* 3. Кейсы «До/После» */}
      <CasesBlock
        variant="A"
        title="Наши работы"
        subtitle="Сдано в срок, по смете без удорожаний"
        cases={landingData.cases}
        ctaText="Хочу так же — рассчитайте стоимость"
        ctaButtonText="Рассчитать стоимость"
        accentColor="#ff6b35"
        backgroundColor="white"
      />

      {/* 4. Как мы работаем (простой процесс) */}
      <ProcessBlock
        variant="A"
        title="Как мы работаем"
        steps={landingData.process}
        accentColor="#ff6b35"
        backgroundColor="#f8f9fa"
      />

      {/* 5. Отзывы и доверие */}
      <ReviewsBlock
        variant="A"
        title="Отзывы наших клиентов"
        subtitle="Работаем с УК, ЖСК и девелоперами"
        reviews={landingData.reviews}
        accentColor="#ff6b35"
        backgroundColor="white"
      />

      {/* 6. CTA-блок (усиление оффера) */}
      <FinalCTABlock
        variant="B"
        title="Хотите узнать стоимость прямо сейчас?"
        subtitle="Оставьте заявку и получите бесплатную консультацию уже сегодня"
        benefits={[
          'Бесплатный выезд и замер',
          'Смета в день обращения',
          'Гарантия на все работы',
          'Фиксированная цена в договоре'
        ]}
        urgencyText="Акция действует до конца месяца!"
        contactInfo={{
          phone: '+7 (495) 123-45-67',
          email: 'info@uznur-project.ru',
          workingHours: 'Ежедневно с 9:00 до 21:00'
        }}
        accentColor="#ff6b35"
        backgroundColor="#2c3e50"
      />

      {/* 7. Контакты с фото Яшара */}
      <ContactsBlock />
    </Box>
  );
};

export default AVTest1Page;
