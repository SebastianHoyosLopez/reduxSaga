import React from 'react'
import { useSelector } from 'react-redux';import { Col, Spin } from "antd";
import Searcher from '../components/Searcher';
import PokemonList from '../components/PokemonList';


const Home = () => {
    const pokemons = useSelector((state) => state.pokemons);
    const loading = useSelector((state) => state.loading);

    return (
        <div className="App">
            <Col span={8} offset={8}>
                <Searcher />
            </Col>
            {loading ? (
                <Col offset={12}>
                    <Spin spinning size="large" />
                </Col>
            ) : (
                <PokemonList pokemons={pokemons} />
            )}
        </div>
    )
}

export default Home