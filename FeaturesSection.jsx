import React from 'react';
import { Box, Typography, Grid, Paper, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';

// Estilizações
const SectionContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#283d62',
  padding: theme.spacing(8, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#003366',
  borderRadius: '8px',
  margin: theme.spacing(2),
}));

const BenefitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: '#ffffff',
  backgroundColor: '#ff4081',
  '&:hover': {
    backgroundColor: '#ff4081',
    opacity: 0.9,
  },
}));

// Componente de Features
function FeaturesSection() {
  return (
    <SectionContainer>
      <Typography variant="h4" gutterBottom component="div" sx={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
        Principais Benefícios
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Economia de Tempo
            </Typography>
            <Typography variant="body1">
              Nossos chatbots automatizam respostas para perguntas frequentes, economizando horas de trabalho manual.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Suporte 24/7
            </Typography>
            <Typography variant="body1">
              Ofereça suporte ininterrupto aos seus clientes, em qualquer fuso horário, sem a necessidade de operadores humanos.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Integração Fácil
            </Typography>
            <Typography variant="body1">
              Integre com suas ferramentas atuais de maneira simples e eficiente, sem complexidade técnica.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Alta Precisão
            </Typography>
            <Typography variant="body1">
              Nossa IA é treinada com os melhores modelos de linguagem, garantindo respostas precisas e confiáveis.
            </Typography>
          </FeatureCard>
        </Grid>
      </Grid>

      <Divider sx={{ width: '80%', marginY: 6, backgroundColor: '#ffffff' }} />

      <Typography variant="h4" gutterBottom component="div" sx={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
        Nossos Números
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Consultas Respondidas
            </Typography>
            <Typography variant="h4" component="div">
              <CountUp end={150000} duration={2} separator="," />
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Empresas Atendidas
            </Typography>
            <Typography variant="h4" component="div">
              <CountUp end={300} duration={2} separator="," />
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Clientes Satisfeitos
            </Typography>
            <Typography variant="h4" component="div">
              <CountUp end={25000} duration={2} separator="," />
            </Typography>
          </FeatureCard>
        </Grid>
      </Grid>

      <Divider sx={{ width: '80%', marginY: 6, backgroundColor: '#ffffff' }} />

      <Typography variant="h4" gutterBottom component="div" sx={{ color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
        Como Funciona
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Passo 1: Escolha seu Plano
            </Typography>
            <Typography variant="body1">
              Explore nossos pacotes e selecione o plano que mais se ajusta às suas necessidades.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Passo 2: Integre à sua Plataforma
            </Typography>
            <Typography variant="body1">
              Utilize nossa API simples para conectar o chatbot ao seu sistema.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Passo 3: Personalize Respostas
            </Typography>
            <Typography variant="body1">
              Ajuste o chatbot de acordo com o tom e as necessidades da sua empresa.
            </Typography>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FeatureCard elevation={3}>
            <Typography variant="h6" gutterBottom>
              Passo 4: Comece a Usar
            </Typography>
            <Typography variant="body1">
              Ative o chatbot e comece a melhorar o atendimento ao cliente automaticamente.
            </Typography>
          </FeatureCard>
        </Grid>
      </Grid>

      <BenefitButton variant="contained" size="large">
        Experimente Agora
      </BenefitButton>
    </SectionContainer>
  );
}

export default FeaturesSection;
