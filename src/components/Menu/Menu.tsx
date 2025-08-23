import { ModeToggle } from '@/components/ui/mode-toggle';
import { Menubar } from '@/components/ui/menubar';
import { Button } from '@/components/ui/button';

const Menu = () => {
  return (
    <div className='p-5 flex justify-center items-center fixed top-0 left-0 right-0 z-50'>
      <Menubar className='w-4xl py-6 px-1.5 rounded-full'>
        <Button variant='menu'>Trabalho</Button>
        <Button variant='menu' className='rounded-full'>
          Sobre
        </Button>
        <Button variant='menu' className='rounded-full'>
          Contato
        </Button>

        <div className='ml-auto flex items-center gap-2'>
          <ModeToggle />
        </div>
      </Menubar>
    </div>
  );
};

export default Menu;
