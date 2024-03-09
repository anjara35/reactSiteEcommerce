import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue';
import Layout from './components/Layout';
import Panier from './components/Panier';
import AboutUs from './components/AboutUs';
import DetailsProduits from './components/DetailsProduits';

function App() {

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Catalogue/>}></Route>
      <Route path="panier" element={<Panier/>}/>
      <Route path="aboutus" element={<AboutUs/>}/>
      <Route path="detailsproduits" element={<DetailsProduits/>}/>
    </Route>
   </Routes>
  )
}

export default App