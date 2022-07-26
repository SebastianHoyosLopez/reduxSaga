import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://imgur.com/AQB4R1W.jpg"
          alt="Ditto"
          extra={<StarOutlined />}
        />
      }
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
