import React from "react";
import {
    Box, Button, IconButton,
    Drawer, DrawerBody, DrawerFooter,
    DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Center, Flex,
    Text, Badge, useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import TransactionCard from "./cashierTransactionCard";


export default function CashierPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <IconButton
                bg='none' ref={btnRef}
                fontSize="20px" icon={<HamburgerIcon />}
                onClick={onOpen} mr='3'
                sx={{
                    _hover: {
                        backgroundColor: 'none',
                        color: 'gray.500'
                    },
                    _active: {
                        transform: 'scale(0.95)',
                        transition: 'all'
                    }
                }}
            />

            <Drawer
                isOpen={isOpen} placement="right"
                onClose={onClose} finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton
                        sx={{
                            _hover: {
                                bg: 'none'
                            },
                            _active: {
                                transform: 'scale(0.95)',
                                transition: 'all'
                            }
                        }}
                    />

                    <Center>
                        <DrawerHeader>Transaction</DrawerHeader>
                    </Center>

                    <DrawerBody>
                        <Box p={5} h='70vh' overflow={'auto'} bg='rgba(232, 234, 238, 0.4)' borderRadius='10px' sx={{
                            '::-webkit-scrollbar': {
                                width: '0.3em',
                                backgroundColor: 'none',
                                borderRadius: '10px'
                            },
                            '::-webkit-scrollbar-thumb': {
                                // backgroundColor: '#181D31',
                                backgroundColor: 'gray.200',
                                borderRadius: '10px'
                            },
                            '::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: '#555555',
                                borderRadius: '10px'
                            },
                        }}>
                            <TransactionCard />
                            <TransactionCard />
                            <TransactionCard />
                            <TransactionCard />
                            <TransactionCard />
                            <TransactionCard />
                            <TransactionCard />
                            <TransactionCard />
                        </Box>


                    </DrawerBody>
                    <Flex ml='10' justify={'flex-start'} w='80%' fontWeight={'bold'}>
                        <Text>Total</Text>

                        <Text ml='8'>Rp 10.000.000</Text>
                    </Flex>

                    <DrawerFooter display={'block'} p='3'>

                        <Flex w='100%' justify={'flex-end'} m='0 auto' mt='2'>
                            <Button variant="outline" mr={3} onClick={onClose} w='50%' border='none' sx={{
                                _hover: {
                                    color: 'red.500',
                                    fontWeight: 'bold',
                                    border: '2px',
                                    borderColor: 'red.500',
                                    transition: 'all'
                                }
                            }}>
                                Cancel
                            </Button>
                            <Button color="green" w='50%' border='none' bg='none' sx={{
                                _hover: {
                                    'color': "white",
                                    backgroundColor: '#1F8A70'
                                },
                                transition: "background-color color 350ms ease-in-out",
                            }}>Print</Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>



            <Badge
                colorScheme='red' fontWeight="bold" fontSize='xs'
                px={2} py={1} position="absolute"
                top={1} right={0} rounded='full'
                variant='solid' boxSize='7'
            >
                <Center>
                    8
                </Center>
            </Badge>
        </>

    );
}