import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./Carousel.styles";
import { CarouselProps as CarouselPropsBase } from "react-responsive-carousel";

interface CarouselProps extends Partial<CarouselPropsBase> {
    className?: string;
    hasDarkIndicators?: boolean;
    hasDarkArrows?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ className, hasDarkIndicators = true, children, hasDarkArrows = true, onChange, showArrows = true }) => (
    <S.StyledCarousel className={className} preventMovementUntilSwipeScrollTolerance swipeScrollTolerance={50} infiniteLoop showStatus={false} showThumbs={false} onChange={onChange} showArrows={showArrows} hasDarkArrows={hasDarkArrows} hasDarkIndicators={hasDarkIndicators}>
        {children}
    </S.StyledCarousel>
)

export default Carousel;
