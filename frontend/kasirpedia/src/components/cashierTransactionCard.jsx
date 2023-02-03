import { Box, Image, Text, Button, Spacer, Center } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import Logo from "../logos/Kasirpedia-logos_black.png";

export default function TransactionCard() {

    return (
        <Center minW={'150px'} p="10px 5px" shadow="md" borderWidth="1px" borderRadius="10px" display='flex' m="10px" bg="white" >
            <Image objectFit={'cover'} ml={1.5} borderRadius={10} w='70px' h='70px' src="https://terserahcafenstudio.my.id/wp-content/uploads/2021/09/kopi-o-1000x600-1-600x360.jpg" alt="tes" />
            <Spacer />
            <Box className='card'>
                <Text mt={2} fontWeight="bold">
                    Kopi O
                </Text>
                <Text mt={1}>Rp 12.000</Text>
            </Box>
            <Spacer />
            <Text mt={1}>X2</Text>
            <Spacer />
            <Text className='card' mt={1}>Rp 24.000</Text>
            <Spacer />
            <Button bg='none' size='sm'>
                <SmallCloseIcon color={'#bd2e24'}/>
            </Button>
        </Center>
    );
}