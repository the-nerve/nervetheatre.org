import styled, { css } from 'styled-components';
import { LogoProps, AvailableLogoSizes } from './__types';

const logoWidth: AvailableLogoSizes = {
    l: '150px',
    m: '100px',
    s: '75px',
    xs: '50px',
};

export const Logo = styled.i<LogoProps>`
    display: inline-flex;
    height: auto;
    line-height: 0;

    svg {
        height: auto;
        width: ${(props) => logoWidth[props.size]};
    }

    ${(props) =>
        props.color === 'standard' &&
        `
        .bracket {
            fill: var(--logoBracketStandard);
        }
        .text {
            fill: var(--logoTextStandard);
        }
    `};
    ${(props) =>
        props.color === 'inverted' &&
        `
        .bracket {
            fill: var(--logoBracketStandard);
        }
        .text {
            fill: var(--logoTextInverted);
        }
    `};
    ${(props) =>
        props.color === 'light' &&
        `
        .bracket,
        .text {
            fill: var(--logoLight);
        }
    `};
    ${(props) =>
        props.color === 'dark' &&
        `
        .bracket,
        .text {
            fill: var(--logoDark);
        }
    `};
`;