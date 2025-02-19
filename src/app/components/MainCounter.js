import * as React from 'react';
import styled from '@emotion/styled';

const MainCounterParagraph = styled.p`
    text-align: center;
    font-size: var(--font-size-extra-large);
    font-weight: var(--font-weight-light);
    padding: var(--spacing-3) 0;
`;

/**
 * @param {Object} props
 * @param {string} props.displayTime
 */
export default function MainCounter({ displayTime }) {
    return (
        <MainCounterParagraph>
            {displayTime}
        </MainCounterParagraph>
    )
}