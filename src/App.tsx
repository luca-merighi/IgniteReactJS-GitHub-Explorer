import React from 'react'

import { Header } from './components/Header'
import { RepositoryList } from './components/RepositoryList'
import { Footer } from './components/Footer'

import './styles/global.scss'

export function App() {
  return (
    <React.Fragment>
      <Header />

      <RepositoryList />

      <Footer />
    </React.Fragment>
  )
}