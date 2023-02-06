import React from "react";
import {
    Box,
    Button,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Center,
    Flex,
    Text,
    Spacer,
    Badge,
    useDisclosure
} from "@chakra-ui/react";
import TransactionCard from "./cashierTransactionCard";
import { BiShoppingBag } from "react-icons/bi";
import { HamburgerIcon } from '@chakra-ui/icons';

// Responsive Side Bar
export default function CashierPage({ count }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <IconButton bg='#e8eaee' ref={btnRef} fontSize="20px" icon={<HamburgerIcon />} onClick={onOpen} float='right' mr='2'
                sx={{
                    _hover: {
                        backgroundColor: '#c5c8d4'
                    }
                }}>
                

            </IconButton>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Center>
                        <DrawerHeader>Transaction</DrawerHeader>
                    </Center>

                    <DrawerBody>
                        <Box p={5} h='70vh' overflow={'auto'} bg='#e8eaee' borderRadius='10px' sx={{
                            '::-webkit-scrollbar': {
                                width: '0.3em',
                                backgroundColor: '#e8eaee',
                                borderRadius: '10px'
                            },
                            '::-webkit-scrollbar-thumb': {
                                backgroundColor: '#181D31',
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
                            <Button variant="outline" mr={3} onClick={onClose} w='50%' border='none'>
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

        </>

    );
}