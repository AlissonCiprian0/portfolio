import { useCallback, useRef, useState } from 'react';

const scrollCSSSelector = '[data-radix-scroll-area-viewport]';

export const getScrollableElement = (
  ref: React.RefObject<HTMLDivElement | null>
) => {
  return ref.current?.querySelector(scrollCSSSelector);
};

const useWorkCarousel = () => {
  const scrollViewportRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScrollRight = () => {
    if (scrollViewportRef.current) {
      const scrolleableElement = getScrollableElement(scrollViewportRef);

      if (!scrolleableElement) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrolleableElement;

      const scrollAmount = clientWidth * 0.75;
      const newScrollLeft = scrollLeft + scrollAmount;
      const maxScrollLeft = scrollWidth - clientWidth;
      const finalScrollLeft = Math.min(newScrollLeft, maxScrollLeft);

      scrolleableElement.scrollTo({
        left: finalScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollViewportRef.current) {
      const scrolleableElement = getScrollableElement(scrollViewportRef);

      if (!scrolleableElement) return;

      const { scrollLeft } = scrolleableElement;
      const scrollAmount = scrollViewportRef.current.clientWidth * 0.75;
      const newScrollLeft = scrollLeft - scrollAmount;
      const finalScrollLeft = Math.max(newScrollLeft, 0);

      scrolleableElement.scrollTo({
        left: finalScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const onScroll = useCallback(() => {
    if (scrollViewportRef.current) {
      const scrolleableElement = getScrollableElement(scrollViewportRef);

      if (!scrolleableElement) return;

      const atStart = scrolleableElement.scrollLeft <= 0;
      setIsAtStart(atStart);

      const atEnd =
        Math.abs(
          scrolleableElement.scrollWidth -
            scrolleableElement.clientWidth -
            scrolleableElement.scrollLeft
        ) < 1;
      setIsAtEnd(atEnd);
    }
  }, [scrollViewportRef]);

  return {
    scrollViewportRef,
    isAtStart,
    isAtEnd,
    handleScrollRight,
    handleScrollLeft,
    onScroll,
  };
};

export default useWorkCarousel;
