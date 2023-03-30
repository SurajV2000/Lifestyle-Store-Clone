import { Box, Heading, Image, position, Text } from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";

const Card = ({ image, price, title, discount }) => {
  return (
    <Box borderRadius={"20px"} width={"100%"} textAlign="left" height={"510px"}>
      <Box>
        <Image borderRadius={"20px"} src={image}></Image>
        <Heading paddingTop={"8px"} size="md">
          ₹{price}
        </Heading>
        <Text paddingTop={"3px"} fontSize={"14px"}>
          {title}{" "}
        </Text>
      </Box>
      
    </Box>
  );
};

export default Card;
