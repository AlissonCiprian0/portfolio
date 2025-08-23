import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileText, Github, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const MainCTA = () => (
  <div className='flex flex-col gap-5'>
    <div className='flex items-center gap-3'>
      <Avatar className='cursor-pointer size-12'>
        <AvatarImage
          src='https://avatars.githubusercontent.com/u/110416220?v=4'
          alt='Alisson Cipriano'
        />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>

      <div className='h-10'>
        <Separator orientation='vertical' />
      </div>

      <div className='flex gap-5'>
        <a
          href='/Alisson_Cipriano_-_Curriculo.pdf'
          className='flex items-center gap-1 font-extralight text-[.9em] text-muted-foreground cursor-pointer hover:text-accent-foreground'
        >
          <FileText className='size-4' />
          <span className='sr-only'>Currículo</span>
        </a>

        <a
          href='https://www.linkedin.com/in/alisson-cipriano-aa4420206/'
          className='flex items-center gap-1 font-extralight text-[.9em] text-muted-foreground cursor-pointer hover:text-accent-foreground'
        >
          <Linkedin className='size-4' />
          <span className='sr-only'>LinkedIn</span>
        </a>

        <a
          href='https://github.com/alissoncipriano'
          className='flex items-center gap-1 font-extralight text-[.9em] text-muted-foreground cursor-pointer hover:text-accent-foreground'
        >
          <Github className='size-4' />
          <span className='sr-only'>GitHub</span>
        </a>
      </div>
    </div>

    <div className='flex flex-col gap-1 pr-0 lg:pr-35'>
      <div className='flex items-center gap-2'>
        <b className='font-medium'>Alisson Cipriano ✌️😉</b>
      </div>

      <p className='text-muted-foreground text-sm leading-6'>
        Um desenvolvedor fullstack apaixonado por criar soluções inovadoras e
        envolventes utilizando tecnologias modernas e eficientes.
      </p>
    </div>
  </div>
);

export default MainCTA;
