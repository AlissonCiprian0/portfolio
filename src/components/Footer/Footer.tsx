import { GithubIcon, Linkedin } from 'lucide-react';
import AppContainer from '@/components/AppContainer/AppContainer';

const Footer = () => {
  return (
    <footer className='bg-background border-t border-t-neutral-200 dark:border-t-muted py-4 mt-10'>
      <AppContainer.Spaced>
        <div className='container mx-auto flex justify-between items-center gap-10'>
          <p className='text-sm text-muted-foreground'>
            Alisson Cipriano &copy; {new Date().getFullYear()}. Todos os
            direitos reservados.
          </p>

          <div className='flex gap-4'>
            <a
              href='https://www.linkedin.com/in/alisson-cipriano-aa4420206/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='size-4 text-muted-foreground hover:text-primary' />
            </a>

            <a
              href='https://github.com/AlissonCiprian0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon className='size-4 text-muted-foreground hover:text-primary' />
            </a>
          </div>
        </div>
      </AppContainer.Spaced>
    </footer>
  );
};

export default Footer;
