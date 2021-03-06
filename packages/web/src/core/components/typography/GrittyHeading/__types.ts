import { AvailableSurface } from '@nerve/core/themes';
import { HeadingProps } from '../Heading/Heading';

export interface GrittyHeadingProps extends HeadingProps {
    offset?: number;
    bgColor: AvailableSurface;
}
