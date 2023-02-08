import { Box, Flex, Icon, Input, InputGroup, InputRightElement, Grid, Select } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import Navbar from './navbar';
import CashierPage from './cashier';
import CashierProductCard from './cashierCard';

export default function CashierItem() {
    return (
        <>
            <Navbar />
            <Flex w='95%' m='0 auto'>

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
                        zIndex={'2'}
                        justify='space-between'
                        alignItems='center'
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
                            <Input placeholder='Search' size='md' bg='white' />
                            <InputRightElement sx={{
                                _hover: {
                                    borderLeft: '1px solid #e8eaee',
                                    transform: 'scale(0.90)',
                                    transition: 'all',
                                },
                            }}>
                                <Icon as={Search2Icon} />
                            </InputRightElement>
                        </InputGroup>

                        {/*MENU*/}
                        <Box>
                            <CashierPage count='5' />
                        </Box>

                    </Flex>

                    <Grid
                        gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
                        gap={{ sm: '1', md: '2', lg: '3', xl: '4' }}
                    >{/* insert item below */}
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                        <CashierProductCard />
                    </Grid>

                </Box>
            </Flex>
        </>
    );
}