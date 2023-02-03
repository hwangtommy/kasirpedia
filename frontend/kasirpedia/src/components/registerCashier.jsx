import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, useColorModeValue, Image, Center } from '@chakra-ui/react';
import LogoKasirpedia from '../logos/Kasirpedia-logos_transparent.png';
import { Formik } from 'formik';

export default function RegisterCashier() {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Box>
            <Image width={350} height={70} objectFit={'cover'} src={LogoKasirpedia}></Image>
          </Box>
          <Heading fontSize={'2xl'}>Register cashier account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="username" />
            </FormControl>
            <FormControl id="name">
              <FormLabel>Full name</FormLabel>
              <Input type="name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
