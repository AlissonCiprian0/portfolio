import { ThemeProvider } from '@/components/theme-provider';
import { AuroraBackground } from '@/components/AuroraBackground/AuroraBackground';
import Menu from '@/components/Menu/Menu';
import AppContainer from '@/components/AppContainer/AppContainer';
import Home from '@/components/Home/Home';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <AuroraBackground>
        <Menu />

        <AppContainer>
          <AppContainer.Spaced>
            <Home.MainCTA />
          </AppContainer.Spaced>

          <Home.WorkCarousel.Container>
            <Home.WorkCarousel.Header />
            <Home.WorkCarousel.ScrollArea />
          </Home.WorkCarousel.Container>
        </AppContainer>

        <Footer />
      </AuroraBackground>
    </ThemeProvider>
  );
}

export default App;
