import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { UniversalRouter } from './universal-router'
import ListPage from './pages/ListPage'
import SinglePage from './pages/SinglePage'
import NotFoundPage from './pages/NotFoundPage'
import { ToastContainer } from 'react-toast'

import './reset.css'
import './main.css'

export function Root(props) {
  return (
    <UniversalRouter location={props.location}>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/single/:id" component={SinglePage} />
        <Route component={ NotFoundPage} />
      </Switch>
      <ToastContainer />
    </UniversalRouter>
  )
}
