import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, GithubIcon } from 'lucide-react';

type CarouselCardProps = {
  url: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  gitHub: string;
};

const CarouselCard = ({
  url,
  imageUrl,
  title,
  description,
  date,
  gitHub,
}: CarouselCardProps) => {
  return (
    <div className='cursor-pointer w-full h-70 border border-purple-200 dark:border-neutral-800 rounded-lg sm:w-90 relative transition-all duration-200 ease-in-out'>
      <a href={url} className='cursor-pointer' target='_blank' rel='noreferrer'>
        <div className='h-full rounded-lg bg-linear-to-t dark:from-[#4f3e0a] to-background relative group [clip-path:inset(-50px_0_0_0)]'>
          <img
            src={imageUrl}
            alt={title}
            className='object-unset w-[100%] h-auto sm:w-auto sm:h-[100%] group-hover:-translate-y-7 transition-transform duration-200 ease-in-out'
          />

          <div className='absolute bottom-0 left-0 right-0 bg-background border-t rounded-b-md h-25 group-hover:h-30 transition-height delay-75 duration-200 ease-in-out px-5 flex items-center justify-between gap-2'>
            <div className='w-full flex items-center justify-between gap-2 group-hover:-translate-y-4 transition-all delay-100'>
              <div className='flex flex-col w-1/1'>
                <div className='flex items-center gap-1'>
                  <span className='block text-md font-medium text-shadow-muted-foreground group-hover:text-orange-900 dark:group-hover:text-orange-400'>
                    {title}
                  </span>

                  <ArrowRight className='size-3.5 text-orange-900 dark:text-orange-400 mt-0.5 hidden group-hover:block' />
                </div>

                <span className='text-xs text-muted-foreground text-wrap min-w-0 leading-5'>
                  {description}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <Badge
                  variant='secondary'
                  className='bg-purple-200 dark:bg-muted dark:text-zinc-200'
                >
                  Frontend
                </Badge>

                <Badge variant='outline' className='dark:text-zinc-200'>
                  Projeto de estudo
                </Badge>
              </div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 pb-1 px-5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-100 delay-0'>
              <div>
                <span className='text-xs text-muted-foreground'>
                  Data: {date}
                </span>
              </div>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.open(gitHub, '_blank', 'noopener noreferrer');
                }}
                size='sm'
                variant='link'
                className='cursor-pointer'
              >
                <div className='flex items-center gap-2'>
                  <GithubIcon className='size-4 text-muted-foreground' />
                  <span className='text-xs text-muted-foreground -mt-0.5'>
                    Ver no GitHub
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CarouselCard;
