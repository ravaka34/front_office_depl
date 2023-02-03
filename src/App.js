import {BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Inscription from "./pages/inscription/Inscription";
import ListeEnchere from "./pages/ListeEnchere";
import { FicheProduit } from "./pages/FicheProduit/FicheProduit";
import MesEncheres from "./pages/MesEncheres";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />  
        <Route path="/inscription" element={ <Inscription /> } />  
        <Route path="/" element={ <Layout /> } >
          <Route path="" element={ <Categories /> } />
          <Route path="home" element={ <Categories /> } />
          <Route path="category" element={ <Categories /> } />
          <Route path="liste-enchere" element={ <ListeEnchere /> } />
          <Route path="fiche" element={ <FicheProduit /> } />
          <Route path="mes-encheres" element={<MesEncheres/>}/>
          <Route path="categories" element={<Categories/>}/>
        </Route>
        {/* <Route path="/liste" element={<ListProducts/>}  /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
