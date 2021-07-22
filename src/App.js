import Navigation from './Components/Navigation'
import Produtos from './Pages/Produtos'
import Home from './Pages/Home'
import React from 'react'

function App() {
  const { pathname } = window.location
  
  let Page
  pathname === '/produtos' ? Page = Produtos : Page = Home
  
  return (
    <div className='App'>
      <Navigation />
      <Page />
    </div>
  )
}

export default App
