import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

const footerBreakpoint = breakpoints.s;

export const FooterNav = styled.nav`
    ${footerBreakpoint} {
        display: flex;
    }

    ul {
        list-style: none;
    }

    /* All footer links */
    a {
        display: block;
    }

    /* All footer links (in menu lists) */
    li > a {
        padding: ${spacing.component.xs} 0;
    }

    /* Give active items a cool little bracket */
    a.--is-active {
        padding-left: ${spacing.component.s};
        position: relative;

        &:before {
            color: var(--typeAccent);
            content: '[';
            left: 0;
            position: absolute;
        }
    }

    /* Our brand mark */
    .brand {
        margin-bottom: ${spacing.layout.xs};
        ${footerBreakpoint} {
            margin-right: ${spacing.layout.m};
            margin-bottom: 0;
        }
    }

    .menus {
        ${footerBreakpoint} {
            flex: 1 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .menu:not(:last-child) {
        margin-bottom: ${spacing.layout.s};
        ${footerBreakpoint} {
            margin-bottom: 0;
        }
    }

    .menu-title {
        margin-bottom: ${spacing.component.m};
    }

    /* Company and contact info */
    .company {
        margin-bottom: ${spacing.component.m};
    }

    /**
     * Style specific menus
     */
    .menu.social a {
        align-items: center;
        display: flex;

        i {
            margin-right: ${spacing.component.s};
            position: relative;
            top: 2px;
        }
    }
`;