import { Box, Button, Divider, Flex, Grid, Image, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Box
            className="footer"
            color={"gray"}
            marginTop={"20px"}
            fontFamily={"sans-serif"}>

            <Flex>

                <Flex
                    justifyContent={"space-between"}
                    width="90%"
                    margin={"auto"}
                    flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
                    gap={10}>

                    <Box >
                        <Text
                            color={"black"}
                            fontWeight="bold"
                            fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "22px" }}>
                            Subscribe to our awesome emails.
                        </Text>

                        <Text
                            fontSize={"15px"} >Get our latest offers and news straight in your inbox.
                        </Text>

                        <Flex
                            justify={"center"}
                            gap={5}
                            marginTop={7}>
                            <Input bg={"white"} width="250px" />
                            <Button
                                bg={"black"}
                                _hover={{ bg: "black" }}
                                color="white"
                                width={{ base: "70%", sm: "20%", md: "20%", lg: "25%" }}>Subscribe
                            </Button>
                        </Flex>

                    </Box>

                    <Box >
                        <Text
                            color={"black"}
                            fontWeight="bold"
                            fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "25px" }} >
                            Download our apps
                        </Text>

                        <Text fontSize={"15px"}>
                            Shop our products and offers on-the-go.
                        </Text>

                        <Flex
                            justify={"center"}
                            gap={5}
                            marginTop={7}>
                            <Image width={{ base: "40%", sm: "30%", md: "30%", lg: "20%" }}
                                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
                            <Image width={{ base: "40%", sm: "30%", md: "30%", lg: "20%" }}
                                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />

                        </Flex>

                    </Box>

                </Flex>

            </Flex>


            <Divider />

            <Grid mt={"30px"} gridTemplateColumns={{ base: "", sm: "", md: "", lg: "repeat(5,1fr)" }}>

                <Box textAlign={"left"} fontSize={"15px"} >
                    <Text fontWeight="bold" >
                   women    
                    </Text>
                    <Text>Tops</Text>
                    <Text>Ethnicwear</Text>
                    <Text>Bottoms</Text>
                    <Text>Dresses</Text>
                    <Text>Jumpsuits</Text>
                    <Text>Winterwear</Text>
                    <Text>Lingerie</Text>
                    <Text>Sportswear</Text>
                    <Text>Beauty</Text>
                    <Text>Watches</Text>
                    <Text>sunglasses</Text>
                    
                    <Text fontWeight="bold">
                        Men
                    </Text>
                    <Text>Tops</Text>
                    <Text>Bottoms</Text>
                    <Text>Ethnicwear</Text>
                    <Text>Winterwear</Text>
                    <Text>Sportswear</Text>
                    <Text>Innerwear</Text>
                    <Text>Grooming</Text>
                    <Text>Watches</Text>
                    <Text>sunglasses</Text>


                </Box>

                <Box textAlign={"left"}>
                    <Text fontWeight="bold">
                        Kids
                    </Text>
                    <Text>Girls Clothing</Text>
                    <Text>Boys clothing</Text>
                    <Text>Infants Girls</Text>
                    <Text>Infants Boys</Text>
                    <Text>winterwear</Text>
                    <Text>Add ons</Text>
                    <Text>The Teen Shop</Text>
                   
                </Box>
                <Box textAlign={"left"}>
                    <Text fontWeight="bold">
                        Shoes & Bags
                    </Text>
                    <Text>women</Text>
                    <Text>Men</Text>
                    <Text>Boys</Text>
                    <Text>Girls</Text>
                    <Text>Accessories</Text>
                    <Text>Essentials</Text>
                    
                </Box>
                <Box textAlign={"left"}>
                    <Text fontWeight="bold">
                        Beauty
                    </Text>
                    <Text>Makeup Eyes</Text>
                    <Text>Makeup Face</Text>
                    <Text>Makeup Lips</Text>
                    <Text>Makeup Nails</Text>
                    <Text>Perfumes</Text>
                    
                </Box>
                <Box textAlign={"left"}>
                    <Text fontWeight="bold">
                        Explore
                    </Text>
                    <Text>Online Offers</Text>
                    <Text>Store Offers</Text>
                    <Text>Online Gift Card</Text>
                    <Text>Store Gift Card</Text>
                    <Text>Stores Nearby</Text>
                    <Text>EDGE</Text>
                    <Text>Membership</Text>
                    
                </Box>
                <Box textAlign={"left"}>
                    <Text fontWeight="bold">
                        About
                    </Text>
                    <Text>About us</Text>
                    <Text>Careers</Text>
                    <Text>Take a Tour</Text>
                    <Text>Blog</Text>
                    <Text>Store Locator</Text>
                    <Text>Landmark Cares</Text>
                    
                </Box>
                <Box textAlign={"left"}>
                    <Text fontWeight="bold">
                        Kids
                    </Text>
                    <Text>Contact us</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </Box>


            </Grid>




        </Box>
    );
};

export default Footer;