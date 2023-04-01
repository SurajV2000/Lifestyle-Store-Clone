import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  position,
  Text,
  useToast,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = ({ actualPrice, type, id, image, price, title, discount }) => {
  const toast = useToast();
  let el={
    actualPrice,type,image, price, title, discount
  }
  const handleClick=()=>{
    axios.post(`http://localhost:8080/cart`,el).then((res)=>{
      toast({
        title: 'Added to cart',
        description: "You can checkout from Cart",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
     }).catch((err)=>{
      console.log(err)
     })
  }
  return (
    <Box
      className="product-card"
      // borderRadius={"20px"}
      width={"100%"}
      textAlign="left"
      height={"520px"}
    >
      <Link to={`/${type}/${id}`}>
        <Image borderRadius={"20px"} src={image}></Image>
        <Flex gap={"5px"} textAlign={"center"}>
          <Heading paddingTop={"8px"} size="md">
            ₹{price}
          </Heading>
          <Text as='del' fontSize={"13px"} paddingTop={"10px"}>
            ₹{actualPrice}
          </Text>
        </Flex>
        <Text paddingTop={"3px"} fontSize={"14px"}>
          {title}{" "}
        </Text>
      </Link>
      <Button
        class="add-to-cart-btn"
        onClick={handleClick}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default Card;
