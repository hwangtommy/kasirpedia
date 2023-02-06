import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, useColorModeValue, Image, FormHelperText } from '@chakra-ui/react';
import LogoKasirpedia from '../logos/Kasirpedia-logos_transparent.png';
import { axiosInstance } from '../config/config';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';

export default function RegisterCashier() {
  YupPassword(Yup);

  const [enable, setEnable] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: 0,
      username: '',
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(10, 'min 10').minLowercase(1, 'min 1 huruf kecil').minUppercase(1, 'min 1 huruf besar'),
      name: Yup.string().min(3, 'min 3 huruf'),
      email: Yup.string().email('ini bukan email'),
      password: Yup.string().minLowercase(1, 'min 1 huruf kecil').minUppercase(1, 'min 1 huruf besar').min(5, 'min 5 digit'),
    }),
    onSubmit: async () => {
      // alert("test")
      await axiosInstance.post('/users/', formik.values);
    },
  });

  useEffect(() => {
    let { username, name, email, password } = formik.values;
    if (username && name && email && password) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [formik.values]);

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Box>
            <Image width={350} height={70} objectFit={'cover'} src={LogoKasirpedia}></Image>
          </Box>
          <Heading fontSize={'2xl'}>Create Cashier Account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input name="username" onChange={(e) => formik.setFieldValue('username', e.target.value)} placeholder={'Username'} type="username" />
              <FormHelperText w={'268px'} color={'red'}>
                {formik.errors.username}

                {/* Enter the email you'd like to receive the newsletter on. */}
              </FormHelperText>
            </FormControl>
            <FormControl id="name">
              <FormLabel>Full name</FormLabel>
              <Input name="name" onChange={(e) => formik.setFieldValue('name', e.target.value)} placeholder={'Full name'} type="name" />
              <FormHelperText w={'268px'} paddingX="1" color={'red'}>
                {formik.errors.name}

                {/* Enter the email you'd like to receive the newsletter on. */}
              </FormHelperText>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" onChange={(e) => formik.setFieldValue('email', e.target.value)} placeholder={'Email'} type="email" />
              <FormHelperText w={'268px'} paddingX="1" color={'red'}>
                {formik.errors.email}

                {/* Enter the email you'd like to receive the newsletter on. */}
              </FormHelperText>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" onChange={(e) => formik.setFieldValue('password', e.target.value)} placeholder={'Password'} type="password" />
              <FormHelperText w={'268px'} paddingX="1" color={'red'}>
                {formik.errors.password}

                {/* Enter the email you'd like to receive the newsletter on. */}
              </FormHelperText>
            </FormControl>
            <Stack spacing={10}>
              {/* <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack> */}
              <Button onClick={formik.handleSubmit} disabled={enable ? null : 'disabled'} bg={'#0095F6'} color={'white'}>
                Add Cashier
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
