import { Box, Flex, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Badge } from '@chakra-ui/react';
import CashierPage from './cashier';
import { Search2Icon } from '@chakra-ui/icons';
import { GrSend } from "react-icons/gr";
import CashierProductCard from './cashierCard';

export default function CashierItem() {
    return (
        <>
            <Flex w='90%' m='0 auto'>

                <Box w='100%' h='88vh' overflow={'auto'} borderRadius='10px' bg='#e8eaee' sx={{
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
                            <Input placeholder='Search' size='md' bg='white' borderRadius='50px' />
                            <InputRightElement sx={{
                                _hover: {
                                    borderLeft: '1px solid #e8eaee',
                                    transform: 'scale(0.90)',
                                    transition: 'all',
                                }
                            }}>
                                <Icon as={Search2Icon} />
                            </InputRightElement>
                        </InputGroup>

                        {/* logo menu */}
                        <Box>
                            <CashierPage count='5'/>
                        </Box>

                    </Flex>
                    {/* insert item below */}
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
                    <CashierProductCard />
                    <CashierProductCard />
                </Box>


            </Flex>
        </>
    );
}