import { Box, Flex, Input, Text } from '@chakra-ui/react';
import Chart from './chart';

export default function SalesReport() {

    return (
        <>
            <Flex w='65%' m='0 auto'>

                <Box w='100%' h='88vh' m='0 auto' overflow={'auto'}>
                    {/* DATE */}
                    <Flex
                        justify='space-between'
                        w='100%' h='60px'
                        position={'sticky'} top='0' zIndex={'2'}
                        alignItems='center' mb='3'
                    >
                        <Flex alignItems='center'>
                            <Text fontWeight='bold' m='0 30px'>from</Text>

                            <Input size='md' type='date' w={{ sm: '150px', md: '180px', lg: '220px' }}
                                variant='flushed'
                            />
                            <Text fontWeight='bold' m='0 30px'>to</Text>

                            <Input size='md' type='date' w={{ sm: '150px', md: '180px', lg: '220px' }}
                                variant='flushed'
                            />
                        </Flex>
                        
                    </Flex>
                    {/* BAGIAN CHART */}
                    <Chart />
                </Box>
            </Flex>
        </>
    );
}