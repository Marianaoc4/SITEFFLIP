import * as React from 'react';
import { AppBar, Box, CssBaseline, IconButton, List, ListItem, ListItemText, Toolbar, Typography, Grid, Paper, Button, Tooltip } from '@mui/material';
import { Menu as MenuIcon, AddShoppingCart as AddShoppingCartIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import FeaturesSection from './FeaturesSection';


const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#283d62',
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: theme.zIndex.appBar,
  boxShadow: 'none',
}));

const DividerBar = styled(Box)(({ theme }) => ({
  height: '4px',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '200px',
  backgroundImage: 'url(Background.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
}));

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: '100%',
  minHeight: '50vh',
  paddingTop: '0px',
  backgroundColor: '#283d62',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  marginLeft: theme.spacing(2),
}));

const ConversText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '28px',
  color: '#ffffff',
  fontFamily: 'Poppins, sans-serif',
}));

const AiText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '38px',
  color: '#ffffff',
  WebkitTextStroke: '1px #ffffff',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Poppins, sans-serif',
}));

const GalleryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(40, 61, 98, 0.9)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
  width: '70vw',
  maxWidth: '1200px',
}));

const PackageCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#003366',
  height: 'auto',
  width: '100%',
  maxWidth: '300px',
  borderRadius: '8px',
  margin: '10px',
}));

const AddButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: '#ffffff',
  backgroundColor: '#ff4081',
  '&:hover': {
    backgroundColor: '#ff4081',
    opacity: 0.9,
  },
}));

function App() {
  const handleAddToCart = (itemName) => {
    alert(`Adicionado ${itemName} ao carrinho!`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
      <CssBaseline />
      <AppBarStyled>
        <Toolbar>
          <IconButton aria-label="open drawer" edge="start" sx={{ mr: 2 }}>
            <MenuIcon sx={{ color: '#ffffff' }} />
          </IconButton>
          <LogoContainer>
            <ConversText>CONVERS</ConversText>
            <AiText>AI</AiText>
          </LogoContainer>
          <List sx={{ display: 'flex', marginLeft: 'auto' }}>
            <ListItem button key="Profile" sx={{ width: 'auto', mx: 2 }}>
              <ListItemText primary="PERFIL" sx={{ color: '#ffffff' }} />
            </ListItem>
            <ListItem button key="Settings" sx={{ width: 'auto', mx: 2 }}>
              <ListItemText primary="AJUSTES" sx={{ color: '#ffffff' }} />
            </ListItem>
            <ListItem button key="Contact" sx={{ width: 'auto', mx: 2 }}>
              <ListItemText primary="CONTATO" sx={{ color: '#ffffff' }} />
            </ListItem>
          </List>
        </Toolbar>
        <DividerBar />
        {/* <BackgroundImage /> */}
      </AppBarStyled>

      <Main>
        <GalleryContainer>
          <Typography variant="h4" gutterBottom component="div" sx={{ color: '#ffffff' }}>
            Pacotes disponíveis
          </Typography>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Tooltip title="Inclui 100 consultas de IA, acesso a API e suporte 24/7">
                <PackageCard elevation={3}>
                  <Typography variant="h6" component="div">CHATBOT LLAMA 3.1</Typography>
                  <Typography variant="body1">R$ 50,00/mês</Typography>
                  <AddButton
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => handleAddToCart('CHATBOT LLAMA 3.1')}
                  >
                    Adicionar
                  </AddButton>
                </PackageCard>
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Tooltip title="Inclui 200 consultas de IA, acesso a API e suporte dedicado">
                <PackageCard elevation={3}>
                  <Typography variant="h6" component="div">CHATBOT GEMINI</Typography>
                  <Typography variant="body1">R$ 100,00/mês</Typography>
                  <AddButton
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => handleAddToCart('CHATBOT GEMINI')}
                  >
                    Adicionar
                  </AddButton>
                </PackageCard>
              </Tooltip>
            </Grid>
          </Grid>
        </GalleryContainer>
      </Main>
      <FeaturesSection />
    </div>
  );
}

export default App;
