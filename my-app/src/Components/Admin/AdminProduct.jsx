import React, { useEffect, useState } from 'react'
import "./Admin.css"
import { useSelector } from 'react-redux';
import { Card, CardHeader, CardBody,useToast, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button, Grid, Select } from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminProduct() {
  const [men,setMen]=useState([])
  const [category,setCatergory]=useState("men");
  const [total,setTotal]=useState(0);
  const toast=useToast();

const getData=()=>{
  axios.get(`http://localhost:8080/${category}`)
  .then((res)=>{
     // console.log(res.data)
     setTotal(res.headers.get("x-total-count"))
     setMen(res.data)
  })
}

  useEffect(()=>{
   getData()
  },[men,total])
 
  const handleDelete=(id)=>{
    console.log(id)
       axios.delete(`http://localhost:8080/men/${id}`)
       .then((res)=>{
        toast({
          title: 'Product Deleted Successful.',
          description: "We have updated the repository",
          status: 'success',
          duration: 1000,
          isClosable: true,
          position:"top",
        })
        getData();
       })
       .then((error)=>{
        console.log(error)
       })
      
      

  }

  return (
 <>

<Select onChange={(e)=>setCatergory(e.target.value)} width="20%" h={"auto"} m="auto" border={"1px solid gainsboro"} mt={"20px"} mb={"20px"} ml={"300px"}  gap={"20px"} bg={"#f7f8f7"}>
  <option value="men">Men</option>
  <option value="women">Women</option>
</Select>

<h1>{total}</h1>

<Grid  width="70%" h={"auto"} m="auto" border={"1px solid gainsboro"} mt={"20px"} mb={"20px"} ml={"300px"}  gap={"20px"} bg={"#f7f8f7"} gridTemplateColumns={"repeat(3,1fr)"}>
  
{men.length>0 && men.map((el)=>{
  return <Card maxW='sm' >
  <CardBody>
    <Image 
      src={el.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{el.title}</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
      ₹ {el.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      
      <Link to={`/editProduct/${el.id}`}><Button  colorScheme='blue'>
         Edit Product
      </Button>
      </Link>

      <Button onClick={()=>handleDelete(el.id)}  colorScheme='blue'>Delete</Button>

    </ButtonGroup>
  </CardFooter>
</Card>
})
  
}
</Grid>
</>
  )
}

export default AdminProduct