import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    loadingToggleAction,
    signupAction,
} from "../redux/authReducer/action"
import { connect, useDispatch } from 'react-redux';

export function Signup(props) {
    const [email, setEmail] = useState("")
    let errorsObj = { firstname: '', lastname: '', email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }

        if (firstname === '') {
            errorObj.firstname = 'FirstName is Required';
            error = true;
        }
        if (lastname === '') {
            errorObj.lastname = 'lastName is Required';
            error = true;
        }

        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }

        setErrors(errorObj);

        if (error) return;
        dispatch(loadingToggleAction(true));

        dispatch(signupAction(email, password, props.history));
        console.log("hi")
    }

    return (

        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <div>
                    {props.errorMessage && (
                        <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                            {props.errorMessage}
                        </div>
                    )}
                    {props.successMessage && (
                        <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                            {props.successMessage}
                        </div>
                    )}
                </div>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                                    {/* {errors.firstname && <div><Alert status='error'>
                                    <AlertIcon />
                                    {errors.firstname}
                                </Alert></div>} */}
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            {errors.email && <div><Alert status='error'>
                                <AlertIcon />
                                {errors.email}
                            </Alert> 

                            </div>}

                        </FormControl>

                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                               
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={onSignUp}
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Signup);
