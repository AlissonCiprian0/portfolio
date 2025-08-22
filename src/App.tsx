import { ThemeProvider } from '@/components/theme-provider';
import { AuroraBackground } from '@/components/AuroraBackground/AuroraBackground';
import Menu from '@/components/Menu/Menu';
import AppContainer from '@/components/AppContainer/AppContainer';
import Home from '@/components/Home/Home';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <AuroraBackground>
        <Menu />

        <AppContainer>
          <AppContainer.Spaced>
            <Home.MainCTA />
          </AppContainer.Spaced>

          <Home.WorkCarousel />
        </AppContainer>
      </AuroraBackground>
    </ThemeProvider>
  );
}

export default App;
