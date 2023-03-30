import React, { useState } from 'react'
import { Box, Divider, Flex, FormControl, FormLabel, Image, Text } from "@chakra-ui/react"
import Navbar from '../Components/Home/Navbar'
import { Link } from 'react-router-dom'

function Checkout() {

    return (
        <Box>
















            <Box>
                <Navbar />
            </Box>

            <Box
                width={{ base: "90%", sm: "90%", md: "90%", lg: "80%" }}
                margin="auto">

                <Box pt={"20px"} pb="20px">
                    <Text color={"gray.600"} fontSize={"24px"}> Checkout & Shipping </Text>
                </Box>
                <Box>
                    <Flex>

                        <Box>
                            <Box>
                                <Text textAlign={"center"} color={"black"} fontSize={"22px"}>Home Delivery</Text>
                                <Text fontSize={"15px"}>(Get your product delivered to your home)
                                </Text>
                            </Box>

                            <Box>
                                <Text textAlign={"center"} color={"black"} fontSize={"20px"}>Add your Address Here</Text>
                                <FormControl>
                                    <Box>
                                        <FormLabel>Full Name</FormLabel></Box>
                                </FormControl>

                            </Box>
                        </Box>


                        {/* -------- */}


                        <Box>

                        </Box>

                    </Flex>
                </Box>

                <Divider />

            </Box>
        </Box>
    )
}

export default Checkout