import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
import { Colors } from '../constants/Colors';

export const StyledCarousel = styled(Carousel) <{ hasDarkIndicators: boolean; hasDarkArrows: boolean }>`
    ${({ hasDarkIndicators }) => hasDarkIndicators && `
        .control-dots .dot {
            background: ${Colors.lightGray};
        }

        .control-dots .dot.selected {
            background: ${Colors.darkGray};
        }
    `}

    ${({ hasDarkArrows }) => hasDarkArrows && `
        .carousel .control-next {
            &:before {
                border-left-color: ${Colors.darkGray};
            }
        }

        .carousel .control-prev {
            &:before {
                border-right-color: ${Colors.darkGray};
            }
        }
    `}
`
