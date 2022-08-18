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
import { getPokemons } from "./redux/modules/pokemons/actions";


function App() {
  const dispatch = useDispatch();


//   useEffect(() => {
//     const fetchPokemons = async () => {
//         dispatch(setLoading(true))
//         const pokemonsRes = await getPokemon();
//         const datosCrossRef = await getDatosCrossRef();
//         console.log(datosCrossRef)
//         dispatch(getPokemonsWithDetails(pokemonsRes));
//         dispatch(setLoading(false))
//     };
//     fetchPokemons();
// }, [dispatch]);


useEffect(() => {
  dispatch(getPokemons.trigger())
}, []);

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