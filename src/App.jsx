import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Razer1 } from './components/Razer1'
import { Razer2 } from './components/Razer2'
import { Razer3 } from './components/Razer3'
import { Razer4 } from './components/Razer4'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/razer1' element={<Razer1 className='main-img-container' />} />
            <Route path='/razer2' element={<Razer2 className='main-img-container' />} />
            <Route path='/razer3' element={<Razer3 className='main-img-container' />} />
            <Route path='/razer4' element={<Razer4 className='main-img-container' />} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
