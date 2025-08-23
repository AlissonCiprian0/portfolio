import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import type { WorkCarouselProps } from '@/components/Home/components/WorkCarousel/types';
import { WORK } from '@/components/Home/constants';
import CarouselCard from './CarouselCard';

const CarouselScrollArea = ({
  scrollViewportRef,
}: Pick<WorkCarouselProps, 'scrollViewportRef'>) => {
  return (
    <ScrollArea
      className='w-full rounded-md sm:whitespace-nowrap'
      prefix='10'
      ref={scrollViewportRef}
    >
      <div className='pl-0 xl:pl-[22vw]'>
        <div className='flex overflow-hidden flex-col items-center space-y-10 p-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:w-max'>
          {Object.values(WORK).map((workItem) => (
            <CarouselCard
              key={workItem.key}
              url={workItem.url}
              imageUrl={workItem.image}
              title={workItem.title}
              date={workItem.date}
              gitHub={workItem.gitHub}
              description={workItem.description}
            />
          ))}
        </div>
      </div>

      <ScrollBar orientation='horizontal' className='hidden sm:block' />
    </ScrollArea>
  );
};

export default CarouselScrollArea;
