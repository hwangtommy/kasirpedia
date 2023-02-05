import { Box, Flex, Center, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import CashierPage from './cashier';
import { Search2Icon } from '@chakra-ui/icons';
import CashierProductCard from './cashierCard';

export default function CashierItem() {
    return (
        <>
            <Flex w='90%' m='0 auto'>

                <Box w='100%' h='88vh' overflow={'auto'}  borderRadius='10px' bg='#e8eaee' sx={{
                    '::-webkit-scrollbar': {
                        width: '0.4em',
                        backgroundColor: '#e8eaee',
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

                    <Flex bg='#e8eaee' w='100%' h='60px' position={'sticky'} top='0' zIndex={'2'} justify='space-between' alignItems='center'>
                        <InputGroup bg='#e8eaee' w='40%' m='2px auto' minW='300px'>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Search2Icon />} />
                            <Input placeholder='Search' size='md' bg='white' />
                        </InputGroup>
                        <Box>
                            <CashierPage />
                        </Box>
                    </Flex>
                    {/* insert item below */}
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                    <CashierProductCard/>
                </Box>


            </Flex>
        </>
    );
}