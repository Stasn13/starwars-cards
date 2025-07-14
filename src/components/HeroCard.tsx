import { Box, Card, CardContent } from "@mui/material";
import { Link } from "@tanstack/react-router";
import type { Card as CardType } from "../hooks/useGetCards";
import { Title, Description } from "./Typography";

const HeroCard = ({ properties, uid }: CardType) => {
  const { name, height, mass, eye_color } = properties;

  return (
    <Card component={Link} to={`/details/${uid}`} sx={{ width: 256 }}>
      <CardContent>
        <Title>name: </Title>
        <Description>{name}</Description>
      </CardContent>
      <CardContent>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Title>height: </Title>
          <Description>{height}</Description>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Title>mass: </Title>
          <Description>{mass}</Description>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Title>eyes: </Title>
          <Description>{eye_color}</Description>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
