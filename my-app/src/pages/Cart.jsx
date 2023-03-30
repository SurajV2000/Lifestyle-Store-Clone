import React,{useState,useEffect} from 'react';

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

  let cart=[
    {  
       image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011932836-Red-Red-1000011932836_01-2100.jpg",
       title:"Shirt",
       brand:"Nike",
       price:9199,
       id:1,
    },
    {   
        image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011932836-Red-Red-1000011932836_01-2100.jpg",
        title:"Shirt",
        brand:"Nike",
        price:9939,
        id:2,
     },
     {  
        image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011932836-Red-Red-1000011932836_01-2100.jpg",
        title:"Shirt",
        brand:"Nike",
        price:1999,
        id:3,
     },
     {  
        image:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011932836-Red-Red-1000011932836_01-2100.jpg",
        title:"Shirt",
        brand:"Nike",
        price:99,
        id:4,
     }
  ]

 export const Cart = () => {

    const [cartLength, setCartLength] = useState(cart.length);
    const [count, setCount] = useState(1);

    // let Total = 0;
    let saved = 0;

    const [total, setTotalCost] = useState(0);
    // var total = 0;
    
    useEffect(()=>{
        setTotalCost(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
    },[count])

    const handleDelete=(id)=>{
      let x= cart.filter((el)=>{
        return el.id!==id

        
       })}
       

    
 
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
                {cart?.map((e) => {
                  {
                    saved =
                      saved + (Math.floor(e.price) - Math.floor(e.price - (10 * e.price) / 100))*count;
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
                      <span textDecoration={"line-through"}>
                          Rs {Math.floor(e.price)}
                        </span>
                        <br></br>
                        Rs {Math.floor(e.price - (10 * e.price) / 100)}
                        <br></br>
                        
                      </Td>
                      <Td>
                        <Button
                          variant={"outline"}
                          m={"2px"}
                          onClick={() => setCount(count - 1)}
                        >
                          -
                        </Button>
                        <Button variant={"outline"} m={"2px"}>
                          {count}
                        </Button>
                        <Button
                          variant={"outline"}
                          m={"2px"}
                          onClick={() => setCount(count + 1)}
                        >
                          +
                        </Button>
                      </Td>
                      <Td>Rs {Math.floor(e.price - (10 * e.price) / 100)*count}</Td>
                      <Td>
                        <CloseIcon  onClick={()=>handleDelete(e.id)}/>
                      </Td>
                      <Td>
                        {" "}
                        Rs{" "}
                        {Math.floor(
                          e.price - Math.floor(e.price - (10 * e.price) / 100)
                        )*count}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent={"space-between"} mt={8}>
            <Box width={"45%"}>
              <Button variant={"outline"} float={"left"} onClick={() => {}}>
                Empty Basket
              </Button>
            </Box>
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
                  <Text>Rs {Math.floor((total*count)-saved)}</Text>
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
                  RS {Math.floor((total*count) - saved)}
                </Heading>
              </Flex>
              <Box float={"right"}>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    if (cart.length !== 0) {
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




