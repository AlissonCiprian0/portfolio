import AppContainer from '@/components/AppContainer/AppContainer';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WORK } from '../constants';
import { Badge } from '@/components/ui/badge';

const WorkCarousel = () => (
  <>
    <AppContainer.Spaced>
      <div className='flex flex-col gap-3 mt-15'>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-[.9em]'>Trabalho 👨🏻‍💻</span>
          <div className='hidden md:block'>
            <Button
              variant='ghost'
              size='sm'
              className='cursor-pointer rounded-full'
            >
              <ChevronLeft className='size-3.5 text-muted-foreground' />
            </Button>

            <Button
              variant='ghost'
              size='sm'
              className='cursor-pointer rounded-full '
            >
              <ChevronRight className='size-3.5 text-orange-400' />
            </Button>
          </div>

          <div className='ml-auto'>
            <Button
              variant='menu'
              className='h-7 font-light text-orange-400 hover:text-orange-400 gap-1 group'
            >
              <span className='block leading-none -mt-0.5'>Ver todos</span>
              <ChevronRight className='size-3.5 text-orange-400 mt-[1.3px] group-hover:translate-x-1 transition-transform duration-200 ease-in-out' />
            </Button>
          </div>
        </div>

        <Separator />
      </div>
    </AppContainer.Spaced>

    <ScrollArea className='w-full rounded-md sm:whitespace-nowrap' prefix='10'>
      <div className='pl-0 xl:pl-[22vw]'>
        <div className='flex flex-col items-center space-y-10 p-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:w-max overflow-hidden'>
          {Object.values(WORK).map((workItem) => (
            <div
              key={workItem.key}
              className='cursor-pointer w-full h-70 border rounded-lg sm:w-90 relative transition-all duration-200 ease-in-out'
            >
              <a
                href={workItem.url}
                className='cursor-pointer'
                target='_blank'
                rel='noreferrer'
              >
                <div className='h-full rounded-lg bg-linear-to-t from-[#4f3e0a] to-background relative group [clip-path:inset(-50px_0_0_0)]'>
                  <img
                    src={workItem.image}
                    alt={workItem.title}
                    className='object-unset w-[100%] h-auto sm:w-auto sm:h-[100%] group-hover:-translate-y-7 transition-transform duration-200 ease-in-out'
                  />

                  <div className='absolute bottom-0 left-0 right-0 bg-background border-t rounded-b-md h-25 px-5 flex items-center justify-between gap-2'>
                    <div className='flex flex-col w-1/1'>
                      <div className='flex items-center gap-1'>
                        <span className='block text-md font-medium text-shadow-muted-foreground group-hover:text-orange-400'>
                          {workItem.title}
                        </span>

                        <ArrowRight className='size-3.5 text-orange-400 mt-0.5 hidden group-hover:block' />
                      </div>

                      <span className='text-xs text-muted-foreground text-wrap min-w-0 leading-5'>
                        {workItem.description}
                      </span>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <Badge variant='secondary' className='text-zinc-200'>
                        Frontend
                      </Badge>

                      <Badge variant='outline' className='text-zinc-200'>
                        Projeto de estudo
                      </Badge>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <ScrollBar orientation='horizontal' className='hidden sm:block' />
    </ScrollArea>
  </>
);

export default WorkCarousel;
