import React, { useState } from 'react'
import { Box, Button, Divider,Radio,
  RadioGroup,
  Stack, Flex, FormControl, FormLabel, Image, Input, Text, useToast } from "@chakra-ui/react"
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'

const order = [
  {

    "title": "W Women Printed Three-quarter Sleeves A-line Kurta",
    "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011695801-Blue-Blue-1000011695801_01-2100.jpg",
    "price": 2599,
    "id": "1"
  },
  {
    "title": "INDYA Embellished Straight Kurta",
    "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008835887-Yellow-YELLOW-1000008835887_01-2100.jpg",
    "price": 1300,
    "category": "Kurtas and Kurtis",
    "id": "3"
  }
]
const initialState = {
  name: "",
  mobile: "",
  pin: "",
  city: "",
  state: "",
  building: "",
}
function Payment() {
  const toast = useToast()

  const [paymentOption, setPaymentOption] = useState('credit-card');

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
  };

  const handlePaymentSubmit = () => {
    // Handle payment submission logic here
  };


  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "80%" }}
        margin="auto" >

        <Box
          pt={"20px"}
          pb="20px">
          <Text
            color={"gray.600"}
            fontSize={"24px"}>
            Payment & Place Order
          </Text>
        </Box>
        <Flex gap={20}
          flexDirection={{ base: "column-reverse", sm: "column-reverse", md: "row", lg: "row" }}
          justifyContent="center"
          marginBottom={"30px"}>
          <Box>
            <Text
              textAlign={"center"}
              color={"black"}
              fontSize={"22px"}>
              Payment method
            </Text>
            <Stack spacing={5}>
        <RadioGroup onChange={handlePaymentOptionChange} value={paymentOption}>
          <Stack spacing={2}>
            <Radio value="credit-card">Credit Card</Radio>
            <Radio value="paypal">PayPal</Radio>
            
          </Stack>
        </RadioGroup>
        {paymentOption === 'credit-card' && (
          <Box>
             <FormControl>
              <FormLabel>Card number</FormLabel>
              <Input placeholder="Enter card number" />
            </FormControl>
            <FormControl>
              <FormLabel>Expiration date</FormLabel>
              <Input placeholder="MM/YY" />
            </FormControl>
            <FormControl>
              <FormLabel>CVC</FormLabel>
              <Input placeholder="Enter CVC" />
            </FormControl>
          </Box>
        )}
        {paymentOption === 'paypal' && (
          <Box>
            <FormControl>
              <FormLabel>PayPal email</FormLabel>
              <Input placeholder="Enter PayPal email" />
            </FormControl>
          </Box>
        )}
       
        <Button onClick={handlePaymentSubmit}>Pay Now and Place Order</Button>
      </Stack>


          </Box>










          {/* -------- */}


          <Box
            border="1px solid #bab8b4"
            padding={"20px"}
            width={{ base: "80%", sm: "80%", md: "40%", lg: "40%" }}
            margin={"0 auto"} >
            <Text
              textAlign={"center"}
              color={"black"}
              fontSize={"22px"}
              marginBottom="15px" >
              Payable Amount
            </Text>
            <Box
              border="1px solid #bab8b4"
              width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              margin={"0 auto"}
              height="150px">
              <Flex
                justifyContent={"space-around"}
                marginBottom="20px"
                marginTop={"10px"}>
                <Text
                  fontSize={{ base: "14px", sm: "17px", md: "16px", lg: "18px" }}>
                  Total MRP
                </Text>
                <Text
                  fontSize={{ base: "14px", sm: "17px", md: "16px", lg: "18px" }}
                  fontWeight="bold">
                  ₹3198 /-
                </Text>
              </Flex>

              <Flex
                justifyContent={"space-around"}
                marginBottom="20px">
                <Text
                  fontSize={{ base: "14px", sm: "17px", md: "16px", lg: "18px" }} >
                  Standard Shipping
                </Text>
                <Text
                  fontSize={{ base: "14px", sm: "17px", md: "16px", lg: "18px" }}
                  fontWeight="bold"
                  color={"green"} >
                  Free
                </Text>

              </Flex>
              <Box
                width="90%"
                margin="0 auto 10px auto">
                <Divider />
              </Box>

              <Flex
                justifyContent={"space-around"}
                marginBottom="20px">
                <Text
                  fontSize={{ base: "14px", sm: "17px", md: "16px", lg: "18px" }}
                  fontWeight="semibold">
                  Grand Total
                </Text>
                <Text
                  fontSize={{ base: "14px", sm: "17px", md: "16px", lg: "18px" }}
                  fontWeight="bold">
                  ₹3198 /-
                </Text>
              </Flex>
            </Box>
            <Box marginTop={"20px"} >

              <Text
                fontWeight={"bold"}
                color="#df9018"
                marginBottom={"5px"}>
                Order Summary
              </Text>

              {
                order.map((item) => {
                  return (
                    <Flex flexDir={{ base: "column", sm: "row", md: "column", lg: "row" }}
                      gap={3}
                      border="1px solid #bab8b4"
                      padding={"5px"}
                      mb="10px" >
                      <Box>
                        <Image
                          width="70px"
                          height="100px"
                          src={item.image} />
                      </Box>
                      <Box>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "16px" }} >
                          {item.title}
                        </Text>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "16px" }} >
                          {item.price}
                        </Text>
                        <Text
                          fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "16px" }} >
                          Qty:1
                        </Text>
                        <Text
                          fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "16px" }} >
                          📆 Delivery by 3-4 days
                        </Text>

                      </Box>
                    </Flex>
                  )
                })
              }

            </Box>
            <Box fontSize={"12px"} color="#939290">
              <Box mb="10px">
                <Image src="https://i1.lmsin.net/website_images/in/checkout/comodo-secure-icon.svg" />
              </Box>
              <Text mb="10px">
                Your credit card details are securely encrypted and passed directly to our PCI DSS compliant Payment Gateway for processing. We only store your credit card's last 4 digits and the expiration date. Your traffic to this page is secured using either a 256-bit or 128-bit SSL certificate depending on your browser version.
              </Text>
              <Text mb="10px">© 2021 RNA Intellectual Property Limited.</Text>
              <Text mb="10px">Privacy Policy-Terms of Use- Terms & Condition </Text>
            </Box>

          </Box>

        </Flex>










        <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }} margin="auto" >

          <Divider />
          <Footer />

        </Box>
      </Box >
    </Box>
  )
}


export default Payment;