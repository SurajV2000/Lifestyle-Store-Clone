import React from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from '@chakra-ui/react'

function AdminManageProduct() {
  return (
  <FormControl style={{width:"30%",margin:"auto",border:"1px solid #f7f8f7"}}>
  <FormLabel style={{border:"1px solid #f7f8f7"}}>Image</FormLabel>
     <Input type="text" />

     <FormLabel>Price</FormLabel>
     <Input type='number' />

     <FormLabel>Title</FormLabel>
     <Input type='text' />

     <FormLabel>Category</FormLabel>
  <Select placeholder='Select Category'>
     <option>Men</option>
     <option>Women</option>
  </Select>

  <Input  type="submit"/>

  </FormControl>

  
  )
}

export default AdminManageProduct