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
  FormHelperText,
  Alert,
  AlertIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  CloseButton,
} from '@chakra-ui/react';
import LogoKasirpedia from '../logos/Kasirpedia-logos_transparent.png';
import { axiosInstance } from '../config/config';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import CloseAlert from './closealert';

export default function RegisterCashier() {
  YupPassword(Yup);

  const [enable, setEnable] = useState(false);
  const [status, setStatus] = useState('');
  const [msg, setMsg] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      id: 0,
      username: '',
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('username tidak boleh kosong').min(5, 'min 5'),
      name: Yup.string().required('nama tidak boleh kosong').min(3, 'min 3 huruf'),
      email: Yup.string().required('email tidak boleh kosong').email('ini bukan email'),
      password: Yup.string().required('password tidak boleh kosong').minLowercase(1, 'min 1 huruf kecil').minUppercase(1, 'min 1 huruf besar').min(5, 'min 5 digit'),
      confirmation_password: Yup.string()
        .required('password must match')
        .oneOf([Yup.ref('password'), null], 'password must match'),
    }),
    onSubmit: async () => {
      // alert("test")
      const res = await axiosInstance
        .post('/auth/v1', formik.values)
        .then((res) => {
          console.log(res.data);
          setStatus('success');
          setMsg('Data inserted');
        })
        .catch((error) => {
          console.log(error);
          setStatus('error');
          setMsg(error.response.data.message);
        });
      console.log(res.data);
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
    <>
      <Button onClick={onOpen}>Create Cashier</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Isi modal */}
            <Flex minH={'100vh'} align={'center'} justify={'center'}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                  <Box>
                    <Image width={350} height={70} objectFit={'cover'} src={LogoKasirpedia}></Image>
                  </Box>
                  <Heading fontSize={'2xl'}>Create Cashier Account</Heading>
                </Stack>
                {/* Field input */}
                <Stack spacing={4}>
                  <FormControl id="username">
                    {status === 'success' ? (
                      <Alert status="success" zIndex={2} variant="top-accent">
                        <AlertIcon />
                        {msg}
                        <CloseButton alignSelf="flex-start" position="relative" right={-1} top={-1} onClick={onClose} />

                        <CloseAlert />
                      </Alert>
                    ) : status === 'error' ? (
                      <Alert status="error" zIndex={2} variant="top-accent">
                        <AlertIcon />
                        {msg}
                        <CloseButton alignSelf="flex-start" position="relative" right={-1} top={-1} onClick={onClose} />

                        <CloseAlert />
                      </Alert>
                    ) : null}
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

                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input name="password" onChange={(e) => formik.setFieldValue('confirmation_password', e.target.value)} placeholder="Confirma Password" type={'password'} />
                    <FormHelperText w={'268px'} color={'red'}>
                      {formik.errors.confirmation_password}
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
              </Stack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <HStack>
              <Button onClick={onClose}>Cancel</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
