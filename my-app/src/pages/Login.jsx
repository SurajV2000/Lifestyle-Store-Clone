import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useReducer } from "react";
import { Loginfunction, getdata, loginFunction } from '../redux/authReducer/action';




import { saveData } from "../utils/localStorageData";



  export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const toast=useToast()
    let {isAuth,userData,afterLoginUser}= useSelector((state)=> state.AuthReducer)
    


    useEffect(()=>{
      dispatch(getdata)
    },[])
    const SendSignInRequest=(e)=>{
      e.preventDefault()
         
    
        userData.length > 0 && userData.forEach((el) => {
          if(el.email === email&& el.password===password){
            let obj={
            email,password
            }
            dispatch(loginFunction(obj))
            console.log(isAuth,afterLoginUser)
          }else{
            console.log("false")
          }
          setEmail("")
          setPassword("")
        })
    }
    useEffect(()=>{
      dispatch(getdata)
    },[])
    return (
      <Stack >
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} backgroundColor={'cyan.300'}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'yellow.400'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'red.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                 onClick={SendSignInRequest}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Stack>
    );
  }