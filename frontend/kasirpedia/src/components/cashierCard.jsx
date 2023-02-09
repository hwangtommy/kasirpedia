import {
    Box, Center, useColorModeValue,
    Heading, Text, Stack, Image,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
    ModalFooter, useDisclosure, Button, Flex, NumberInput, NumberInputField,
    NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper
} from '@chakra-ui/react';
import { useState } from 'react';

const IMAGE = 'https://terserahcafenstudio.my.id/wp-content/uploads/2021/09/kopi-o-1000x600-1-600x360.jpg';

export default function CashierProductCard(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [number, setNumber] = useState(1);

    function add(data, number) {
        props.addTransaction(data, number)
        onClose()
    }

    return (
        <>
            <Center py={5}>
                <Box
                    role={'group'} p={3}
                    maxW={'200px'} w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'lg'} rounded={'lg'}
                    pos={'relative'} zIndex={1} cursor='pointer'
                    onClick={onOpen}
                    sx={{
                        _hover: {
                            transform: 'scale(0.97)',
                            transition: '100ms all'
                        },
                        _active: {
                            transform: 'scale(0.95)',
                            transition: 'all',
                            boxShadow: 'md'
                        }
                    }}>

                    <Image
                        rounded={'md'} m='0 auto'
                        height={160} width={160}
                        objectFit={'cover'} src={IMAGE}
                    />

                    <Stack pt={5} align={'center'} >
                        <Heading
                            fontSize={'lg'}
                            fontFamily={'body'}
                            fontWeight={500}
                            maxH='22px' overflow={'auto'} textAlign='center'
                            sx={{
                                '::-webkit-scrollbar': {
                                    width: '0.1em',
                                    backgroundColor: 'none',
                                    borderRadius: '10px'
                                },
                                '::-webkit-scrollbar-thumb': {
                                    // backgroundColor: '#181D31',
                                    backgroundColor: 'none',
                                    borderRadius: '10px'
                                },
                                '::-webkit-scrollbar-thumb:hover': {
                                    backgroundColor: 'none',
                                    borderRadius: '10px'
                                },
                            }}
                        > {props?.data.name}
                        </Heading>

                        <Stack direction={'row'} align={'center'}>
                            <Text
                                fontWeight={200}
                                fontSize={'md'}
                            >Rp {props?.data.price.toLocaleString()}
                            </Text>
                        </Stack>
                    </Stack>

                </Box>
            </Center>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <Center>
                        <ModalHeader>Quantity</ModalHeader>
                    </Center>

                    <ModalBody>
                        <Flex w='100%' justify="space-around">
                            <NumberInput allowMouseWheel defaultValue='1' variant="flushed" min='1' max='100'
                                onKeyDown={(e) =>
                                    e.key === "Enter" ?
                                        add(props.data, number) : null}
                                onChange={(val) => setNumber(val)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper border='none' />
                                    <NumberDecrementStepper border='none' />
                                </NumberInputStepper>
                            </NumberInput>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant={'outline'} border='none' mr={3} onClick={onClose} sx={{
                            _hover: {
                                transform: 'scale(0.97)',
                                transition: 'all',
                                color: 'red.500'
                            },
                            _active: {
                                transform: 'scale(0.95)',
                                transition: 'all',
                            }
                        }}>
                            Cancel
                        </Button>
                        {/* TOMBOL TAMBAH */}
                        <Button color='white' bg='#1F8A70' sx={{
                            _hover: {
                                bg: '#1e6654',
                                transition: '100ms all'
                            },
                            _active: {
                                transform: 'scale(0.95)',
                                transition: 'all',
                                boxShadow: 'md',
                                bg: '#185445'
                            }
                        }} onClick={() => {
                            add(props.data, number)

                        }}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}