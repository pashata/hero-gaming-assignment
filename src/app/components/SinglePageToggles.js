/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as React from 'react';
import { StopwatchButton } from '../components';

const SinglePageTogglesWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export default function SinglePageToggles() {
    return (
        <SinglePageTogglesWrapper>
            <StopwatchButton>Lap</StopwatchButton>
            <StopwatchButton theme='danger'>Stop</StopwatchButton>
        </SinglePageTogglesWrapper>
    )
}