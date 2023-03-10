import {
    Box, Flex, Icon, Input,
    InputGroup, InputRightElement, Grid,
    Select, useDisclosure, IconButton, useToast
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import Navbar from '../components/navbar';
import CashierPage from '../components/cashier';
import CashierProductCard from '../components/cashierCard';
import { axiosInstance } from '../config/config';
import { useEffect, useState } from 'react';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import moment from 'moment';

export default function CashierItem() {
    const [datas, setDatas] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [transaction, setTransaction] = useState([]);
    const [search, setSearch] = useState('');
    const toast = useToast();


    function inputHandler(event) {
        const value = event.target.value;
        setSearch(value);
    };
    function keyPress(event) {
        if (event.keyCode === 13) {
            fetchData();
        }
    };

    function addTransaction(data, qty) {
        console.log("asd")
        const trans = {
            ...data,
            qty
        }
        setTransaction([...transaction, trans])
    }

    async function fetchData() {
        // console.log(search)
        await axiosInstance.get("/cashier", { params: { q: search } }).then((res) => {
            setDatas([...res.data.result])
        })
    };

    async function confirmTransaction(total) {
        const tr = {
            userid: 0,
            total_price: total,
            transaction_date: moment(new Date()).format("YYYY-MM-DD"),
            items: JSON.stringify([...transaction])
        }
        await axiosInstance.post("/transaction", tr).then((res) => {
            console.log(res.data.message);
            toast({
                title: 'Success!!',
                description: "Transaction successfully added",
                status: 'success',
                duration: 1500,
                isClosable: true,
            });

        });

    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <Flex w='95%' m='10px auto 0'>

                <Box w='100%' h='88vh' overflow={'auto'} bg='none' sx={{
                    '::-webkit-scrollbar': {
                        width: '0.4em',
                        backgroundColor: 'none',
                    },
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'gray.200',
                        borderRadius: '10px'
                    },
                    '::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#555555',
                        borderRadius: '10px'
                    },
                }}>
                    {/* TOP BAR */}
                    <Flex
                        bg='white'
                        w='100%' h='60px'
                        position={'sticky'}
                        top='0'
                        zIndex={'1'}
                        justify='space-between'
                        alignItems='center' mb='5'
                    >
                        {/* CATEGORIES */}
                        <Select
                            ml='5'
                            variant='flushed'
                            placeholder='Select Categories'
                            maxW='200px'
                            pr={2}
                        >
                            <option>Food</option>
                            <option>Drink</option>

                        </Select>
                        {/* SEARCH */}
                        <InputGroup bg='white' w='40%' m='2px auto' minW='300px'>
                            <Input placeholder='Search' size='md' bg='white' onChange={inputHandler} onKeyDown={keyPress} />
                            <InputRightElement sx={{
                                _hover: {
                                    borderLeft: '1px solid #e8eaee',
                                    transform: 'scale(0.90)',
                                    transition: 'all',
                                },
                            }}>
                                <Icon as={Search2Icon} onClick={fetchData} />
                            </InputRightElement>
                        </InputGroup>

                        {/*MENU*/}
                        <Box>
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
                            <CashierPage confirmTransaction={confirmTransaction} onClose={onClose} btnRef={btnRef} onOpen={onOpen} isOpen={isOpen} transaction={transaction} setTransaction={setTransaction} />
                        </Box>

                    </Flex>

                    <Grid
                        gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)", '2xl': "repeat(6, 1fr)" }}
                        // gap={{ sm: '1', md: '2', lg: '3', xl: '4' }}
                        gap={1}
                    >{/* insert item below */}

                        {
                            datas?.map((val) => {
                                return <CashierProductCard onOpen={onOpen} data={val} addTransaction={addTransaction} />

                            })
                        }

                    </Grid>

                </Box>
            </Flex>
        </>
    );
}