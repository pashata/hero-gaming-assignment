import * as React from 'react';
import styled from '@emotion/styled';
import { formatTimestamp } from '../utils';

const MainCounterParagraph = styled.p`
    text-align: center;
    font-size: var(--font-size-extra-large);
    font-weight: var(--font-weight-light);
    padding: var(--spacing-2) 0;
`;

/**
 * @param {Object} props
 * @param {number} props.timestamp
 */
export default function MainCounter({ timestamp }) {
    return (
        <MainCounterParagraph>
            {formatTimestamp(timestamp)}
        </MainCounterParagraph>
    )
}