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
  useToast,
} from '@chakra-ui/react';
import LogoKasirpedia from '../logos/Kasirpedia-logos_transparent.png';
import { axiosInstance } from '../config/config';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';

export default function EditProfile(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState('');
  const [msg, setMsg] = useState('');

  //   const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [enable, setEnable] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: props.user.id,
      username: props.user.username,
      name: props.user.name,
      email: props.user.email,
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('username tidak boleh kosong').min(5, 'min 5'),
      name: Yup.string().required('nama tidak boleh kosong').min(3, 'min 3 huruf'),
      email: Yup.string().required('email tidak boleh kosong').email('ini bukan email'),
    }),
    onSubmit: async () => {
      // alert("test")
      const res = await axiosInstance
        .patch('/auth/v3/' + props.user.id, formik.values)
        .then((res) => {
          console.log(res.data);
          setStatus('success');
          setMsg('Data updated');
        })
        .catch((error) => {
          console.log(error);
          setStatus('error');
          setMsg(error.response.data.message);
        });
      console.log(res.data);
    },
  });

  return (
    <>
      <Button onClick={onOpen}>Edit Account</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalCloseButton
            onClick={() => {
              onClose();
              setStatus('');
            }}
          />
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
                      </Alert>
                    ) : status === 'error' ? (
                      <Alert status="error" zIndex={2} variant="top-accent">
                        <AlertIcon />
                        {msg}
                      </Alert>
                    ) : null}
                    <FormLabel>Username</FormLabel>
                    <Input onChange={(e) => formik.setFieldValue('username', e.target.value)} name="username" placeholder={'Username'} type="username" value={formik.values.username} />
                    <FormHelperText w={'268px'} color={'red'}>
                      {formik.errors.username}
                      {/* Enter the email you'd like to receive the newsletter on. */}
                    </FormHelperText>
                  </FormControl>

                  <FormControl id="name">
                    <FormLabel>Full name</FormLabel>
                    <Input onChange={(e) => formik.setFieldValue('name', e.target.value)} name="name" placeholder={'Full name'} type="name" value={formik.values.name} />
                    <FormHelperText w={'268px'} color={'red'}>
                      {formik.errors.name}
                      {/* Enter the email you'd like to receive the newsletter on. */}
                    </FormHelperText>
                  </FormControl>

                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input onChange={(e) => formik.setFieldValue('email', e.target.value)} name="email" placeholder={'Email'} type="email" value={formik.values.email} />
                    <FormHelperText w={'268px'} color={'red'}>
                      {formik.errors.email}
                      {/* Enter the email you'd like to receive the newsletter on. */}
                    </FormHelperText>
                  </FormControl>

                  <Stack spacing={10}>
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
              <Button
                onClick={() => {
                  onClose();
                  setStatus('');
                }}
              >
                Cancel
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
