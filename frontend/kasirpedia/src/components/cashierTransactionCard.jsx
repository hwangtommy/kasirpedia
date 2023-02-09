import { Box, Image, Text, Button, Spacer, Center, Flex } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function TransactionCard(props) {


    return (
        <Center
            maxW='400px' minW='200px'
            p="10px 5px"
            shadow="md"
            borderWidth="1px"
            borderRadius="10px"
            display='flex'
            m="10px"
            bg="white"
            sx={{
                _hover: {
                    transform: 'scale(0.98)',
                    transition: 'all'
                },
            }}
        >
            <Image
                borderRadius={10}
                w='70px' h='70px'
                ml={1.5}
                src="https://terserahcafenstudio.my.id/wp-content/uploads/2021/09/kopi-o-1000x600-1-600x360.jpg"
                alt="tes"
                objectFit={'cover'}
            />

            <Box
                ml='5'
                className='card'
                maxW={'100px'} maxH='70px'
                overflow={'hidden'}
            >
                <Text fontWeight="bold" overflow={'auto'} maxH={'50px'}
                    lineHeight='shorter' fontSize='sm'
                    sx={{
                        '::-webkit-scrollbar': {
                            width: '0.1em',
                            backgroundColor: 'none',
                            borderRadius: '10px'
                        },
                        '::-webkit-scrollbar-thumb': {
                            // backgroundColor: '#181D31',
                            backgroundColor: 'none',
                            borderRadius: '10px'
                        },
                        '::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: 'none',
                            borderRadius: '10px'
                        },
                    }}
                >
                    {props?.data.name}
                </Text>
                <Text fontSize={'sm'}>
                    Rp {props?.data.price.toLocaleString()}
                </Text>
            </Box>

            <Spacer />
            <Flex alignItems='center' w='100px' justifyContent={'space-between'}>
                <Text fontSize={'sm'} fontWeight='medium'>X {props.data.qty}</Text>

                <Button
                    p='5px'

                    color='red.500'
                    float='right' bg='none'
                    boxSize='40px' as={SmallCloseIcon}
                    onClick={props.delete}
                    sx={{
                        _hover: {
                            bg: 'none',
                            color: 'red.600',
                            cursor: 'pointer'
                        },
                        _active: {
                            transform: 'scale(0.95)',
                            transition: 'all',
                            color: 'red.700'
                        }
                    }}
                />
            </Flex>

        </Center>
    );
}