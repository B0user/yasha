import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  IconButton,
  Modal,
  Fade
} from '@mui/material';
import { PlayArrow, Close, ArrowBack, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

// 5. Блок кейсов (портфолио «До/После») - 3 варианта
export const CasesBlock = ({ 
  variant = 'A',
  title = 'Наши работы',
  cases = [
    {
      id: 1,
      title: 'Ремонт подъезда',
      description: 'Полный ремонт подъезда в жилом доме',
      beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Сдано в срок', 'Без удорожаний']
    },
    {
      id: 2,
      title: 'Инженерные сети',
      description: 'Замена водопроводных и отопительных систем',
      beforeImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['По ГОСТ', 'Гарантия 5 лет']
    },
    {
      id: 3,
      title: 'Фасадные работы',
      description: 'Утепление и отделка фасада здания',
      beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Энергоэффективность', 'Современные материалы']
    }
  ],
  buttonText = 'Хочу так же — рассчитайте стоимость',
  buttonColor = '#ff6b35',
  backgroundColor = '#ffffff',
  onButtonClick,
  sx = {}
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const openModal = (caseItem) => {
    setSelectedCase(caseItem);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCase(null);
  };

  // Вариант A: Слайдер «до/после»
  const VariantA = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: '#2c3e50'
          }}
        >
          {title}
        </Typography>
        
        <Box sx={{ position: 'relative', mb: 6 }}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      height: 400,
                      backgroundImage: `url(${cases[currentSlide].beforeImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: 2,
                      position: 'relative'
                    }}
                  />
                  <Chip
                    label="ДО"
                    sx={{
                      position: 'absolute',
                      top: 15,
                      left: 15,
                      bgcolor: 'rgba(0,0,0,0.8)',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      height: 400,
                      backgroundImage: `url(${cases[currentSlide].afterImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderRadius: 2,
                      position: 'relative'
                    }}
                  />
                  <Chip
                    label="ПОСЛЕ"
                    sx={{
                      position: 'absolute',
                      top: 15,
                      left: 15,
                      bgcolor: buttonColor,
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </motion.div>
          
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            <ArrowBack />
          </IconButton>
          
          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#2c3e50' }}>
            {cases[currentSlide].title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
            {cases[currentSlide].description}
          </Typography>
          <Box sx={{ mb: 3 }}>
            {cases[currentSlide].tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                color="success"
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={onButtonClick}
            sx={{
              py: 2,
              px: 4,
              bgcolor: buttonColor,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': { 
                bgcolor: buttonColor,
                filter: 'brightness(0.9)'
              }
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );

  // Вариант B: Галерея карточек
  const VariantB = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: '#2c3e50'
          }}
        >
          {title}
        </Typography>
        
        <Grid container spacing={4}>
          {cases.map((caseItem, index) => (
            <Grid item xs={12} md={4} key={caseItem.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  height: '100%', 
                  boxShadow: 3,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}>
                  <Box
                    sx={{
                      height: 250,
                      backgroundImage: `url(${caseItem.afterImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative'
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2c3e50' }}>
                      {caseItem.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: '#666' }}>
                      {caseItem.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {caseItem.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          color="success"
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={onButtonClick}
            sx={{
              py: 2,
              px: 4,
              bgcolor: buttonColor,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': { 
                bgcolor: buttonColor,
                filter: 'brightness(0.9)'
              }
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );

  // Вариант C: Видео-кейсы
  const VariantC = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: '#2c3e50'
          }}
        >
          {title}
        </Typography>
        
        <Grid container spacing={4}>
          {cases.map((caseItem, index) => (
            <Grid item xs={12} md={6} key={caseItem.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  height: '100%', 
                  boxShadow: 3,
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6,
                    transition: 'box-shadow 0.3s ease'
                  }
                }}
                onClick={() => openModal(caseItem)}
                >
                  <Box
                    sx={{
                      height: 300,
                      backgroundImage: `url(${caseItem.afterImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          bgcolor: 'rgba(0,0,0,0.8)',
                          transform: 'scale(1.1)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <PlayArrow sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2c3e50' }}>
                      {caseItem.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
                      {caseItem.description}
                    </Typography>
                    <Box>
                      {caseItem.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          color="success"
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={onButtonClick}
            sx={{
              py: 2,
              px: 4,
              bgcolor: buttonColor,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': { 
                bgcolor: buttonColor,
                filter: 'brightness(0.9)'
              }
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>

      {/* Video Modal */}
      <Modal
        open={modalOpen}
        onClose={closeModal}
        closeAfterTransition
      >
        <Fade in={modalOpen}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: '80%' },
            maxWidth: 800,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 0,
            outline: 'none'
          }}>
            <Box sx={{ position: 'relative' }}>
              <IconButton
                onClick={closeModal}
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  bgcolor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  zIndex: 1,
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                }}
              >
                <Close />
              </IconButton>
              {selectedCase && (
                <Box sx={{ aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedCase.videoUrl}
                    title={selectedCase.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '8px' }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );

  const variants = {
    A: VariantA,
    B: VariantB,
    C: VariantC
  };

  const SelectedVariant = variants[variant] || VariantA;

  return <SelectedVariant />;
};
