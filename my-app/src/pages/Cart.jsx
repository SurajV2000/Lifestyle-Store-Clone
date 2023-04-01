import React,{useState,useEffect} from 'react';

// import styled from "styled-components"
import {
    Box,
    Table,
    Thead,
    Tbody,
    Flex,
    Tr,
    Th,
    Td,
    Button,
    TableContainer,
    Text,
    Heading,
    Image,
  } from "@chakra-ui/react";
  import { CloseIcon } from "@chakra-ui/icons";
  import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartReducer/action';
import axios from "axios"




 export const Cart = () => {

    const [cartItem, setCartItems] = useState([]);
    const [count, setCount] = useState(1);
    
    const dispatch=useDispatch();
    const {cartItems}=useSelector((store)=>store.cartReducer)
    console.log(cartItems)
    
    let saved = 0;
    const getData=()=>{
      axios.get(`http://localhost:8080/cart`).then((res)=>{
        dispatch(addToCart(res.data))
        setCartItems(cartItems)
      }).catch((err)=>{
        console.log(err);
      })
    }


    const handleDelete=(id)=>{
      setCartItems(cartItems.filter((e) => e.id !== id));
    
      // axios.delete(`http://localhost:8080/cart/${id}`).then((res)=>{
      //   dispatch(removeFromCart(id))
      // }).catch((err)=>{
      //   console.log(err)
      // })
    }

   

    const handleQuantityChange = (id, quantity) => {
      setCartItems(
        cartItems.map((e) =>
          e.id === id ? { ...e, quantity: quantity } : e
        )
      );
    };

    const getTotalPrice = () => {
      return cartItems.reduce(
        (total, e) => total + e.price * e.quantity,
        0
      );
    };
    useEffect(() => {
      getData()
     
    },[]);

 
  return (
   
   <Box width="100%">
        <Text
            fontSize={"24px"}
            textAlign={"left"}
            fontWeight={300}
            borderBottom={"1px solid #e8e8e8"}
            pb={"6px"}
          >
            YOUR BASKET 
          </Text>
          <TableContainer width="99%">
            <Table variant="simple">
              <Thead width="99%">
                <Tr
                  bg={"#555555"}
                  color={"white"}
                  justifyContent={"space-between"}
                >
                  <Th color={"white"}>ITEM DESCRIPTION</Th>
                  <Th color={"white"}>UNIT PRICE</Th>
                  <Th color={"white"}>QUANTITY</Th>
                  <Th color={"white"}>SUBTOTAL</Th>
                  <Th color={"#555555"}>......</Th>
                  <Th color={"black"} bg={"#c6cc74"}>
                    Saving
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartItems?.map((e) => {
                  {
                    saved =
                      saved + (Math.floor(e.price) - Math.floor(e.price - (10 * e.price) / 100))*e.quantity;
                    // console.log("saved",saved)
                  }
                  return (
                    <Tr
                      key={e.id}
                      fontSize={"12px"}
                      justifyContent={"space-between"}
                    >
                      <Td fontSize={"12px"}>  <Image width={"100px"} height={"100px"} src={e.image} alt='Dan Abramov' />
        
                        {e.brand}
                        <br></br>
                        {e.title}
                      </Td>
                      <Td>
                      <Text>Original Price</Text> 
                      <span textDecoration={"line-through"}>
                          Rs {Math.floor(e.price)}
                        </span>
                        <br></br>
                        <Text>Discounted Price</Text> 
                        Rs {Math.floor(e.price - (10 * e.price) / 100)}
                        <br></br>
                        
                      </Td>
                      <Td>
                        <Button
                          variant={"outline"}
                          m={"2px"}
                          onClick={() =>handleQuantityChange(e.id, e.quantity - 1)}
                        >
                          -
                        </Button>
                        <Button variant={"outline"} m={"2px"}>
                          {e.quantity}
                        </Button>
                        <Button
                          variant={"outline"}
                          m={"2px"}
                          onClick={() =>  handleQuantityChange(e.id, e.quantity + 1)}
                        >
                          +
                        </Button>
                      </Td>
                      <Td>Rs {Math.floor(e.price - (10 * e.price) / 100)*e.quantity}</Td>
                      <Td>
                        <CloseIcon  onClick={()=>handleDelete(e.id)}/>
                      </Td>
                      <Td>
                        {" "}
                        Rs{" "}
                        {Math.floor(
                          e.price - Math.floor(e.price - (10 * e.price) / 100)
                        )*e.quantity}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent={"space-between"} mt={8}>
            {/* <Box width={"45%"}>
              <Button variant={"outline"} float={"left"} onClick={handleEmpty}>
                Empty Basket
              </Button>
            </Box> */}
            <Box width={"45%"} border="1px solid #e8e8e8 ">
              <Flex
                justifyContent={"space-between"}
                p="1rem"
                textAlign={"left"}
                fontSize="14px"
                fontWeight={400}
              >
                <Box>
                  <Text>SubTotal</Text>
                  <Text>Delivery Charges</Text>
                </Box>
                <Box>
                  <Text>Rs {getTotalPrice()-saved}</Text>
                  <Text>***</Text>
                </Box>
                <Box borderLeft={"1px solid #e8e8e8"} color="red" pl="2px">
                  <Text>You saved!</Text>
                  <Text>Rs {Math.floor(saved)}</Text>
                </Box>
              </Flex>
              <Flex
                textAlign={"left"}
                border={"1px solid #e8e8e8"}
                padding="2rem"
                justify={"space-around"}
              >
                <Heading as={"h6"} fontWeight="250">
                  TOTAL{" "}
                </Heading>
                <Heading as={"h6"} fontWeight="250">
                  {" "}
                  RS {getTotalPrice()-saved}
                </Heading>
              </Flex>
              <Box float={"right"}>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    if (cartItems.length !== 0) {
                      Navigate("/checkout");
                    } else {
                      alert(
                        "Your Cart is Empty, Please Add items into cart and after check it out"
                      );
                      Navigate("/product");
                    }
                  }}
                >
                  {" "}
                  CheckOut
                </Button>
              </Box>
            </Box>
          </Flex>
   </Box>
  );
}




