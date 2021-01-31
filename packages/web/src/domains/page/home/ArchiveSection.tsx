import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@nerve/core/tokens';

import { useConfigContext } from '@nerve/shared/context';

import {
    BodyText,
    Container,
    Heading,
    Icon,
    TextButton,
} from '@nerve/core/components';

const StyledArchiveSection = styled.section`
    padding: ${spacing.layout.l} 0;

    ${breakpoints.m} {
        padding: ${spacing.layout.xl} 0;
    }

    .title {
        margin-bottom: ${spacing.component.m};
        ${breakpoints.m} {
            align-items: center;
            display: flex;
        }
    }

    .title .period {
        color: ${({ theme }) => theme.typography.accentDark};
    }

    .copy {
        max-width: 450px;
        margin-bottom: ${spacing.component.l};
    }
`;

export const ArchiveSection: React.FC = () => {
    const { links } = useConfigContext();

    return (
        <StyledArchiveSection>
            <Container>
                <Heading color="light" size="m" as="h2" className="title">
                    <span>
                        The Archive<span className="period">.</span>
                    </span>
                </Heading>
                <BodyText color="medium" size="m" className="copy">
                    Check out our past shows and discover why our brand of
                    theatre will get under your skin.
                </BodyText>
                <TextButton
                    color="primary"
                    size="m"
                    to={links.archivePage!}
                    endIcon={<Icon name="ArrowRight" size="s" />}
                    animateIconOnHover
                >
                    take me there
                </TextButton>
            </Container>
        </StyledArchiveSection>
    );
};
