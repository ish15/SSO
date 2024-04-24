import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Box, 
  Container, 
  CssBaseline, 
  Grid, 
  Card, 
  CardContent, 
  CardActionArea, 
  Link 
} from '@mui/material';
import { 
  createTheme, 
  ThemeProvider 
} from '@mui/material/styles';
import { 
  Fastfood as FastfoodIcon
} from '@mui/icons-material'; // Importing icons

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9ee6e2',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h5: {
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
});

const recipes = [
  { 
    title: 'Vegetable Stir Fry', 
    description: 'Healthy and colorful mix of vegetables stir-fried in a savory sauce.', 
    action: 'View Recipe', 
    onClick: () => window.open('https://www.example.com/vegetable-stir-fry', '_blank')
  },
  { 
    title: 'Mushroom Risotto', 
    description: 'Creamy Italian rice dish cooked with mushrooms, onions, and parmesan cheese.', 
    action: 'View Recipe', 
    onClick: () => window.open('https://www.example.com/mushroom-risotto', '_blank')
  },
  { 
    title: 'Caprese Salad', 
    description: 'Simple and refreshing Italian salad made with fresh tomatoes, mozzarella, basil, and balsamic glaze.', 
    action: 'View Recipe', 
    onClick: () => window.open('https://www.example.com/caprese-salad', '_blank')
  },
  { 
    title: 'Vegetable Paella', 
    description: 'Spanish rice dish cooked with saffron, vegetables, and flavorful spices.', 
    action: 'View Recipe', 
    onClick: () => window.open('https://www.example.com/vegetable-paella', '_blank')
  },
  { 
    title: 'Vegetarian Chili', 
    description: 'Hearty and spicy chili made with beans, tomatoes, peppers, and a blend of spices.', 
    action: 'View Recipe', 
    onClick: () => window.open('https://www.example.com/vegetarian-chili', '_blank')
  },
  { 
    title: 'Greek Salad', 
    description: 'Classic Greek salad with tomatoes, cucumbers, olives, onions, and feta cheese.', 
    action: 'View Recipe', 
    onClick: () => window.open('https://www.example.com/greek-salad', '_blank')
  }
];


const RecipeApp = ({ currentUser }) => {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expanded card
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container 
        component="main" 
        sx={{ 
          minHeight: '100vh', 
          pt: 2, 
          pb: 80, // Adjusted padding bottom to accommodate bottom bar
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' // Center content horizontally
        }}
      >
        <Box sx={{mt:4, mb: 10, textAlign: 'center' }}> {/* Center-align text */}
          <Typography variant="h4" component="h1" gutterBottom >
            Welcome to Your Recipe App, {currentUser || 'User'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Discover and explore delicious vegetarian recipes from around the world.
          </Typography>
        </Box>
        <Grid container spacing={4}> {/* Reduced spacing between grid items */}
          {recipes.map((recipe, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                transform: expanded === index ? 'scale(1.05)' : 'scale(1)', 
                transition: 'transform 0.3s', 
                backgroundColor: '#f5f5f5', 
                color: '#333', 
                padding: '16px', 
                borderRadius: '15px', 
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', 
                overflow: 'hidden' 
              }}>
                <CardActionArea onClick={() => handleExpandClick(index)}>
                  <CardContent sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: 140 
                  }}>
                    <FastfoodIcon fontSize="large" />
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {recipe.title}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', mb: 1 }}>
                      {recipe.description}
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="secondary" // Using primary color for button
                      onClick={() => window.open('https://www.simplyrecipes.com/', '_blank')} // Redirect to Simply Recipes website
                      sx={{ width: '100%' }}
                    >
                      {recipe.action}
                    </Button>

                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" color="secondary" onClick={() => window.open('https://mail.facebook.com/', '_blank')}>
            Facebook
          </Button>
          <Button variant="contained" color="secondary" onClick={() => window.open('https://www.youtube.com/', '_blank')}>
            YouTube
          </Button>
          <Button variant="contained" color="secondary" onClick={() => window.open('https://www.instagram.com/', '_blank')}>
            Instagram
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default RecipeApp;
