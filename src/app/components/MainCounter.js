import * as React from 'react';
import { calculateStopwatchValue, formatTimestamp } from '../utils';
import './MainCounter.css';

/**
 * @param {Object} props
 * @param {Stopwatch} props.stopwatch
 */
export default function MainCounter({ stopwatch }) {
    const { started, toggles } = stopwatch;
    const {
        isRunning,
        totalTime,
        lastToggle
    } = calculateStopwatchValue(started, toggles)
    
    return (
        <p className='main-counter'>
            {formatTimestamp(totalTime)}
        </p>
    )
}