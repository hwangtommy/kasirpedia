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
import validator from 'validator'
import { useState } from 'react';

export default function Login() {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (event) => {
    let email = event.target.value
    if (!validator.isEmail(email)) {
      setEmailError("Please enter valid email")
    }
    else {
      setEmailError("")
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
              <Input type="email" onChange={(event) => validateEmail(event)} />
            </FormControl>
            <span style={{
              fontWeight: 'bold',
              color: 'red',
            }}>{emailError}</span>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
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