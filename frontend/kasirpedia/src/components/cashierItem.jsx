import { Box, Flex, Center, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import CashierPage from './cashier';
import {Search2Icon} from '@chakra-ui/icons';
import TransactionCard from './cashierTransactionCard';

export default function CashierItem() {
    return (
        <>
            <Flex w='95%' mt='3' float='right'>

                <Box w='95%' h='85vh' overflow={'auto'} sx={{
                    '::-webkit-scrollbar': {
                        width: '0.4em',
                        backgroundColor: '#FFFFFF',
                    },
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: '#181D31',
                        borderRadius: '10px'
                    },
                    '::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#555555',
                        borderRadius: '10px'
                    },
                }} borderRadius='10px' bg='rgba(229, 217, 182, 0.5)'>
                    <Flex bg='#283542' w='100%' h='60px' position={'sticky'} top='0' zIndex={'1'} alignItems='center'>
                        <InputGroup bg='#283542'  w='40%' m='2px auto' >
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Search2Icon />} />
                            <Input placeholder='Search' size='md' bg='white'/>
                        </InputGroup>

                    </Flex>
                    {/* insert item below */}
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                </Box>

                <CashierPage />
            </Flex>
        </>
    );
}