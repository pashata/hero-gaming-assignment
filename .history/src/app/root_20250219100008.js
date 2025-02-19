import './main.css'

import * as React from 'react'

import { UniversalRouter } from './universal-router'

export function Root(props) {
  return (
    <UniversalRouter location={props.location}>
      <div className='root'></div>
    </UniversalRouter>
  )
}
