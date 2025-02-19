import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UniversalRouter } from './universal-router'
import ListPage from './pages/ListPage'
import SinglePage from './pages/SinglePage'
import NotFoundPage from './pages/NotFoundPage'
import './main.css'

export function Root(props) {
  return (
    <UniversalRouter location={props.location}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/single" element={<SinglePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </UniversalRouter>
  )
}
