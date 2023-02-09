import {
    Box, Button,
    Drawer, DrawerBody, DrawerFooter,
    DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Center, Flex,
    Text, Badge,
} from "@chakra-ui/react";
import TransactionCard from "./cashierTransactionCard";



export default function CashierPage(props) {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    // const btnRef = React.useRef();
   

    function deleteCard(idx) {
        const arr = [...props.transaction]
        arr.splice(idx, 1)
        props.setTransaction([...arr]);
    };
    function deleteAll() {
        props.setTransaction([]);
    }
    const calculateTotalValue = transactions =>
        transactions.reduce((total, transaction) =>
            total + (transaction.price * transaction.qty), 0);

    const totalValue = calculateTotalValue(props.transaction);



    return (
        <>
            

            <Drawer
                isOpen={props.isOpen} placement="right"
                onClose={props.onClose} finalFocusRef={props.btnRef}
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
                            {
                                props.transaction.length ?
                                    props.transaction.map((val, idx) => {
                                        return <TransactionCard data={val} delete={() => deleteCard(idx)} />
                                    }) :
                                    null
                            }
                        </Box>


                    </DrawerBody>
                    <Flex ml='10' justify={'flex-start'} w='80%' fontWeight={'bold'}>
                        <Text>Total</Text>

                        <Text ml='8'>Rp {totalValue.toLocaleString()}</Text>
                    </Flex>

                    <DrawerFooter display={'block'} p='3'>

                        <Flex w='100%' justify={'flex-end'} m='0 auto' mt='2'>
                            <Button variant="outline" mr={3} onClick={deleteAll} w='50%' border='none' sx={{
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

            {/* NUMBER OF TRANSACTION ITEM */}

            {
                props.transaction.length ?
                    <Badge
                        colorScheme='red' fontWeight="bold" fontSize='xs'
                        px={2} py={1} position="absolute"
                        top={0} right={0} rounded='full'
                        variant='solid' boxSize='7' zIndex='-1'
                    >
                        <Center>
                            {props.transaction.length}
                        </Center>
                    </Badge>

                    :
                    null
            }

        </>

    );
}