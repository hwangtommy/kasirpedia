import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import logo from "../logos/Kasirpedia-logos_transparent.png"
import { Link, useNavigate } from "react-router-dom";
import validator from 'validator'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/middleware/userauth";

export default function Login() {
  let dispatch = useDispatch()

  let navigate = useNavigate();

  const [status, setStatus] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function inputHandler(event) {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  async function Login() {
    const isAuth = await dispatch(userLogin({
      email, password
    }));
    if (isAuth.status) {
      if(isAuth.data.isAdmin){
        return navigate("/admin", { state: { user: isAuth.data }, replace: true });
      }
      return navigate("/cashier", { state: { user: isAuth.data }, replace: true });
    }
    return setStatus(true);
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState('')
  const validateEmail = (event) => {
    let email = event.target.value
    if (!validator.isEmail(email)) {
      setEmailError("Please enter valid email")
    }
    else {
      setEmailError("")
      setEmail(event.target.value)
    }
  }

  return (
    <Flex
      minH={"100vh"}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={logo} maxH={80} />
          <Heading fontSize={{ base: '4xl', md: '4xl', lg: '2xl' }}>Login to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => validateEmail(e)} />
            </FormControl>
            <span style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{emailError}</span>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
                onClick={Login}
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
  );
}