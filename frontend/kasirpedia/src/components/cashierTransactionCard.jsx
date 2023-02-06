import { Box, Image, Text, Button, Spacer, Center, Badge } from '@chakra-ui/react';
import { SmallCloseIcon, DeleteIcon } from '@chakra-ui/icons';

export default function TransactionCard() {

    return (
        <Center maxW='400px' minW='200px' p="10px 5px" shadow="md" borderWidth="1px" borderRadius="10px" display='flex' m="10px" bg="white" sx={{
           _hover: {transform: 'scale(0.95)',
            transition: 'all'}
        }}>
            <Image objectFit={'cover'} ml={1.5} borderRadius={10} w='70px' h='70px' src="https://terserahcafenstudio.my.id/wp-content/uploads/2021/09/kopi-o-1000x600-1-600x360.jpg" alt="tes" />


            <Box ml='5' className='card' maxW={'100px'} maxH='70px' overflow={'hidden'}>
                <Text fontWeight="bold">Kopi O</Text>
                <Text fontSize={'sm'}>Rp 120.000</Text>
            </Box>
            <Spacer/>
            <Text ml='5' fontSize={'sm'}>X2</Text>
            {/* <Text ml='5' className='card' mt={1}>Rp 24.000</Text> */}
            <Spacer/>
            <Button float='right' bg='none' size='md'>
                <DeleteIcon color={'#bd2e24'}/>
            </Button>
        </Center>
    );
}