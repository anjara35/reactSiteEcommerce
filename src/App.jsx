import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './components/Catalogue';
import Layout from './components/Layout';
import Panier from './components/Panier';
import AboutUs from './components/AboutUs';
import ProductsDetails from "./components/ProductsDetails.jsx";

function App() {

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Catalogue/>}></Route>
      <Route path="/product/:id" element={<ProductsDetails />} />
      <Route path="panier" element={<Panier/>}/>
      <Route path="aboutus" element={<AboutUs/>}/>
    </Route>
   </Routes>
  )
}

export default App