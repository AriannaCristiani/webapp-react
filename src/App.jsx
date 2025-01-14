import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Movie from './pages/Movies/Movie'
import GlobalContext from './contexts/GlobalContext'
import { useState } from 'react'



function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<Movie />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
