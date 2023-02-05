import React, { useState } from "react";
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
    useDisclosure
} from "@chakra-ui/react";
import TransactionCard from "./cashierTransactionCard";
import { BiShoppingBag } from "react-icons/bi";
// Responsive Side Bar
export default function CashierPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
            <IconButton bg='rgba(229, 217, 182, 0.5)' borderRadius={'50px'} ref={btnRef} variant="ghost" fontSize="20px" icon={<BiShoppingBag />} onClick={onOpen} float='right' m='0px auto'
            sx={{
                _hover: {
                    backgroundColor: '#F3EFE0'
                }
            }}/>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    {/* <DrawerCloseButton /> */}
                    <Center>
                        <DrawerHeader>Transaction</DrawerHeader>
                    </Center>

                    <DrawerBody>
                        <Box p={5} h='70vh' overflow={'auto'} sx={{
                            '::-webkit-scrollbar': {
                                width: '0.5em',
                                backgroundColor: '#F5F5F5',
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

                        </Box>
                    </DrawerBody>

                    <DrawerFooter display={'block'} p='3'>
                        <Flex ml='10' justify={'flex-start'} w='80%' fontWeight={'bold'}>
                            <Text>Sub-Total</Text>

                            <Text ml='8'>Rp 10.000.000</Text>
                        </Flex>

                        <Flex w='100%' justify={'flex-end'} m='0 auto' mt='2'>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue" >Confirm</Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>

    );
}