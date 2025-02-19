import * as React from 'react';
import styled from '@emotion/styled';
import { calculateStopwatchTime, formatTimestamp } from '../utils';

const MainCounterParagraph = styled.p`
    text-align: center;
    font-size: var(--font-size-extra-large);
    font-weight: var(--font-weight-light);
    padding: var(--spacing-3) 0;
`;

/**
 * @param {Object} props
 * @param {Stopwatch} props.stopwatch
 */
export default function MainCounter({ stopwatch }) {
    const [time, setTime] = React.useState(0);
    const { isRunning, totalTime } = React.useMemo(() => calculateStopwatchTime(stopwatch), [stopwatch]);

    React.useEffect(() => {
        let interval;
        if (isRunning) {
            console.log(isRunning)
            const intervalTime = Math.floor(Math.random() * 100);
            interval = setInterval(() => {
                setTime(oldTime => oldTime + intervalTime);
            }, intervalTime);
        }
        return () => clearInterval(interval);
    }, [isRunning])
    
    return (
        <MainCounterParagraph>
            {formatTimestamp(totalTime+time)}
        </MainCounterParagraph>
    )
}