import * as React from 'react'
import './StopwatchLoader.css';

/**
 * @param {Object} props
 * @param {string} props.message
 */
export default function StopwatchLoader({ message = 'Loading'}) {
    return (
        <div className='stopwatch-loader'>
            <div className="stopwatch-loader__container">
                <div className="stopwatch-loader__top" />
                <div className='stopwatch-loader__out'>
                    <div className="stopwatch-loader__needle" />
                </div>
            </div>
            <span className="stopwatch-loader__message">{message}</span>
        </div>
    )
}