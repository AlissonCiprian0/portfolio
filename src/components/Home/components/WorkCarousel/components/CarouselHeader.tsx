import AppContainer from '@/components/AppContainer/AppContainer';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { WorkCarouselProps } from '@/components/Home/components/WorkCarousel/types';

const CarouselHeader = ({
  isAtStart,
  isAtEnd,
  handleScrollRight,
  handleScrollLeft,
}: Pick<
  WorkCarouselProps,
  'isAtStart' | 'isAtEnd' | 'handleScrollRight' | 'handleScrollLeft'
>) => {
  return (
    <AppContainer.Spaced>
      <div className='flex flex-col gap-3 mt-15'>
        <div className='flex items-center gap-2'>
          <span className='font-medium text-[.9em]'>Trabalho 👨🏻‍💻</span>
          <div className='hidden md:block'>
            <Button
              variant='ghost'
              size='sm'
              className='cursor-pointer rounded-full'
              onClick={handleScrollLeft}
              disabled={isAtStart}
            >
              <ChevronLeft
                className={`size-3.5 ${
                  !isAtStart ? 'text-orange-400' : 'text-muted-foreground'
                }`}
              />
            </Button>

            <Button
              variant='ghost'
              size='sm'
              className='cursor-pointer rounded-full'
              onClick={handleScrollRight}
              disabled={isAtEnd}
            >
              <ChevronRight
                className={`size-3.5 ${
                  !isAtEnd ? 'text-orange-400' : 'text-muted-foreground'
                }`}
              />
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
  );
};

export default CarouselHeader;
