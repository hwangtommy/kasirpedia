import { Box, Image, Text, Button, Spacer, Center } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

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
                <Text fontWeight="bold">
                    {props?.data.name}
                </Text>
                <Text fontSize={'sm'}>
                    Rp {props?.data.price.toLocaleString()}
                </Text>
            </Box>

            <Spacer />
            <Text ml='5' fontSize={'sm'}>X{props.data.qty}</Text>
            <Spacer />

            <Button
                mr='2' p='10px'
                borderRadius='50px'
                color='red.500'
                float='right' bg='none'
                boxSize='40px' as={DeleteIcon}
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

        </Center>
    );
}