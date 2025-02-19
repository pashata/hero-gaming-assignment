import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UniversalRouter } from './universal-router'
import ListPage from './pages/ListPage'
import SinglePage from './pages/SinglePage'
import './main.css'

export function Root(props) {
  return (
    <UniversalRouter location={props.location}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </UniversalRouter>
  )
}
