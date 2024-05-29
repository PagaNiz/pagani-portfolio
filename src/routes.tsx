import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultPage from './Pages/DefaultPage'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

function AppRouter() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage/>}>
            <Route index element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default AppRouter
