import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react';

export default function AdminProductCard(props) {
  return (
    <Center py={5}>
      <Box
        role={'group'}
        p={3}
        maxW={'200px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        sx={{
          _hover: {
            transform: 'scale(0.97)',
            transition: '100ms all',
          },
          _active: {
            transform: 'scale(0.95)',
            transition: 'all',
          },
        }}
      >
        <Image rounded={'lg'} m="0 auto" height={160} width={160} objectFit={'cover'} src={props.data.path} />

        <Stack pt={5} align={'center'}>
          <Heading fontSize={'lg'} fontFamily={'body'} fontWeight={500}>
            {props.data.name}
          </Heading>

          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={200} fontSize={'md'}>
              {props.data.price}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
