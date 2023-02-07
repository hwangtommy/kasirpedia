import { Box, Flex, Text, Button, Center, Icon } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import TransactionCard from "./cashierTransactionCard";

export default function CashierPage() {
    return (
        <>
            <Flex flexDir={"column"} minH="100vh">


                <Box bg='#F5F5F5' w='100%' >
                    <Flex>
                        <Box w='70%' minHeight={"100vh"} > {/* bagian add item */}
                            list produk
                        </Box>


                        <Flex className="ddl-mobile" paddingTop={"75px"} w="100%">
                            <Button size='md' float='right'>
                                <HamburgerIcon />
                            </Button>
                        </Flex>



                        <Flex className="transaction-list" justifyContent={"space-between"} paddingTop={"70px"} w="30%" minHeight={"100vh"} direction="column" overflow="auto" borderLeft='1px solid black'> {/* bagian transaction */}

                            <Box >
                                <Text fontWeight='bold' m='10px'>Order Menu</Text>
                                <Box maxH="65vh" overflow='auto'>
                                    <TransactionCard />
                                    <TransactionCard />
                                    <TransactionCard />
                                    <TransactionCard />
                                    <TransactionCard />
                                    <TransactionCard />
                                </Box>
                            </Box>

                            <Flex gap={2} flexDir="column" w="100%" p='10px' position='relative'>
                                <Flex justify='space-between' fontWeight={'bold'}>
                                    <Text>Sub-Total</Text>
                                    <Text>Rp 20.000.000</Text>
                                </Flex>
                                <Flex justifyContent={"flex-end"}>
                                    <Button

                                        // position='absolute'
                                        // bottom='4' right='4'
                                        borderRadius='4px' bg='#444141'
                                        fontWeight='bold' color='#fff' cursor='pointer'
                                        _hover={{
                                            backgroundColor: '#00de76',
                                            animation: 'slidernbw 5s linear infinite',
                                            color: '#000'
                                        }}
                                    >
                                        Confirm
                                    </Button>
                                </Flex>

                            </Flex>
                        </Flex>
                    </Flex>
                </Box >
            </Flex>

        </>

    );
}