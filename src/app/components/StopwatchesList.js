import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { calculateStopwatchValue } from '../utils';
import './StopwatchesList.css';

/**
 * @param {Object} props
 * @param {Stopwatch[]} props.stopwatches
 */
export default function StopwatchesList({ stopwatches }) {    
    return (
        <ol className='stopwatches-list'>
            {stopwatches.map(({ started, toggles, __id }) => {
                const { totalTimeDisplay, isRunning } = calculateStopwatchValue(started, toggles);
                return (
                    <li key={__id}>
                        <Link
                            className={classNames('stopwatches-list__item', {
                                'stopwatches-list__item--running': isRunning
                            })}
                            to={`/single/${__id}`}
                        >
                            {totalTimeDisplay}
                        </Link>
                    </li>
                )
            })}
        </ol>
    )
}