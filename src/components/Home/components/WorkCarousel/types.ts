export type WorkCarouselProps = {
  scrollViewportRef?: React.RefObject<HTMLDivElement | null>;
  isAtStart?: boolean;
  isAtEnd?: boolean;
  handleScrollRight?: () => void;
  handleScrollLeft?: () => void;
  onScroll?: () => void;
};
