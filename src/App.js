import { useEffect } from "react";
import "./App.css";
import Home from "./containers/Home";
import Pokebola from "./containers/Pokebola";
import logo from "./statics/logo.svg";
import { Col } from "antd";
import NavbarMenu from "./components/NavbarMenu"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./redux/modules/pokemons/actions";
import { getPokemon } from "./api";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchPokemons = async () => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon();
        dispatch(getPokemonsWithDetails(pokemonsRes));
        dispatch(setLoading(false))
    };
    fetchPokemons();
}, [dispatch]);


  return (
    <BrowserRouter>
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pokebola" element={<Pokebola />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;