import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Catalogue from './components/Catalogue'
import Layout from './components/Layout'

function App() {

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path="catalogue" element={<Catalogue/>}/>
    </Route>
   </Routes>
  )
}

export default App
