import React, { Children, isValidElement, useEffect } from 'react';
import { WorkCarousel } from '.';
import useWorkCarousel, { getScrollableElement } from './useWorkCarousel';

interface WorkCarouselContainerProps {
  children: React.ReactNode;
}

const WorkCarouselContainer = ({ children }: WorkCarouselContainerProps) => {
  const {
    scrollViewportRef,
    isAtStart,
    isAtEnd,
    handleScrollRight,
    handleScrollLeft,
    onScroll,
  } = useWorkCarousel();

  useEffect(() => {
    const scrolleableElement = getScrollableElement(scrollViewportRef);

    if (!scrolleableElement) return;
    scrolleableElement.addEventListener('scroll', onScroll);

    return () => {
      if (scrolleableElement) {
        scrolleableElement.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll, scrollViewportRef]);

  return (
    <div>
      {Children.map(children, (child) => {
        // Retorna qualquer child que não for um componente React
        // (como um texto puro, por exemplo)
        if (!isValidElement(child)) return child;

        if (child.type === WorkCarousel.Header)
          return (
            <WorkCarousel.Header
              isAtStart={isAtStart}
              isAtEnd={isAtEnd}
              handleScrollLeft={handleScrollLeft}
              handleScrollRight={handleScrollRight}
            />
          );

        if (child.type === WorkCarousel.ScrollArea)
          return (
            <WorkCarousel.ScrollArea scrollViewportRef={scrollViewportRef} />
          );

        return child;
      })}
    </div>
  );
};

export default WorkCarouselContainer;
