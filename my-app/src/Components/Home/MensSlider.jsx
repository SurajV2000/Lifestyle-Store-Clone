import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io"
const data = [
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner4-24March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner1-07March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner2-07March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner3-07March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner5-24March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner6-07March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner9-16March23.jpg",
    "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Common-Banner8-07March23.jpg"
]
function SampleNextArrow({ onClick }) {

    return (
        <Box
        fontSize={{ base:"20px", sm:"25px", md:"30px",lg:"30px"}}
        padding={{ base:"2px 2px",sm:"3px 5px",md:"4px 8px",lg:"5px 12px"}}
        borderRadius= "50%"
        color="black"
        boxShadow= "0 0 5px 3px #ccc"
        display="flex"
        width={{base:"20px",sm:"30px", md:"40px",lg:"50px"}}
        position= "absolute"
        top= "45%"
        right={"-5px"}
        backgroundColor="white"
        
          
            className='arrow arrow-right' onClick={onClick}>
            <IoIosArrowForward/>
        </Box>
    );
}
export default class MenSlider extends Component {


    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Box  marginTop={{base:6,sm:7,md:10,lg:20}} >
                <Slider {...settings} >

                    {data.map((item,i)=>{
                        return <Box borderRadius={"8px"} key={i}>
                        <Image borderRadius={"8px"} width={"93%"} margin="auto" src={item}   />
                        <Text fontWeight={"bold"}>Up To 50% Off</Text>
                    </Box>
                    })}

                </Slider>
            </Box>
        );
    }
}


