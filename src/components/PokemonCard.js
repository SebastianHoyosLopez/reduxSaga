import React from "react";
import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite, setPokebola } from "../redux/modules/pokemons/actions";

const PokemonCard = ({ name, image, types, id, favorite, pokemon }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const handleOnPoke = () => {
    dispatch(setPokebola(pokemon))
  }

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem"}}>
        <Button type="primary" onClick={handleOnPoke}>Agregar a poke</Button>
      </div>
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
