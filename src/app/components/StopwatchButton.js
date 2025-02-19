import * as React from 'react'
import './StopwatchButton.css';

/**
 * @param {Object} props
 * @param {'default' | 'danger' | 'success'} props.theme
 * @param {React.ReactNode} props.children
 * @param {() => void} onClick
 */
export default function StopwatchButton({ children, theme = 'default', onClick }) {
    return (
        <button className={`stopwatch-button stopwatch-button--${theme}`} onClick={onClick}>
            <span className={`stopwatch-button__inner stopwatch-button__inner--${theme}`}>{children}</span>        
        </button>
    )
}