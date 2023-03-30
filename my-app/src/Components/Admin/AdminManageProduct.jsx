import React, { useState } from 'react'
import "./Admin.css"

import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  RadioGroup,
  Stack,
  Radio
} from '@chakra-ui/react'


const initailState={
  image:"",
  img1:"",
  img2:"",
  img3:"",
  img4:"",
  price:0,
  actualPrice:0,
  title:"",
}

const AdminManageProduct=()=>{
  const [product,setProduct]=useState(initailState);

  const handleChange=(e)=>{
      const {name,value}=e.target;
      setProduct((prev)=>{
        return {...prev,[name]:value}
      })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(product);
    setProduct(initailState)
  }

  return (
  <FormControl onSubmit={handleSubmit} width="30%" h={"auto"} m="auto" border={"1px solid gainsboro"} mt={"20px"} mb={"20px"}  gap={"20px"} bg={"#f7f8f7"}>
     <FormLabel mt={"12px"}>Image</FormLabel>
     <Input type="text" value={product.image}  name="image" onChange={handleChange} />

     <FormLabel mt={"12px"}>Image1</FormLabel>
     <Input type="text" value={product.img1}   name="img1" onChange={(e)=>handleChange(e)}/>

     <FormLabel mt={"12px"}>Image2</FormLabel>
     <Input type="text" value={product.img2}  name="img2" onChange={(e)=>handleChange(e)} />

     <FormLabel mt={"12px"}>Image3</FormLabel>
     <Input type="text" value={product.img3}  name="img3" onChange={(e)=>handleChange(e)} />

     <FormLabel mt={"12px"}>Image4</FormLabel>
     <Input type="text" value={product.img4}  name="img4"  onChange={(e)=>handleChange(e)}/>

     <FormLabel mt={"12px"}>Price</FormLabel>
     <Input type='number' value={product.price} name="price"  onChange={(e)=>handleChange(e)} />

     <FormLabel mt={"12px"}>Actual Price</FormLabel>
     <Input type='number' value={product.actualPrice} name="actualPrice"  onChange={(e)=>handleChange(e)} />

     <FormLabel mt={"12px"}>Title</FormLabel>
     <Input type='text' value={product.title} name="title"  onChange={(e)=>handleChange(e)} />

     <FormLabel mt={"12px"} mb={"10px"}>Category</FormLabel>
     <RadioGroup mb={"20px"}>
      <Stack direction='column'>
        <Radio value='Kurtas and Kurtis'>Kurtas and Kurtis</Radio>
        <Radio value='Dresses and Jumpsuits'>Dresses and Jumpsuits</Radio>
        <Radio value='Casual Shirts'>Casual Shirts</Radio>
        <Radio value='Jeans'>Jeans</Radio>
      </Stack>
    </RadioGroup>


     <FormLabel mt={"12px"}>Gender</FormLabel>
     <Select placeholder='Select Gender'>
        <option>Men</option>
        <option>Women</option>
     </Select>
      

      <Input type="submit"/>
      {/* <Button ml={"155px"} mt={"20px"} bg={"skyblue"} >Add Product</Button> */}

  </FormControl>

  
  )
}

export default AdminManageProduct