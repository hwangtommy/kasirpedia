import { Card, CardHeader, CardBody, CardFooter, Image, VStack, Heading, Flex, Center, color, useDisclosure, Button } from '@chakra-ui/react'
import ModalPopup from './modal'
import { DeleteIcon } from '@chakra-ui/icons'


export default function ItemCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Card maxW="250px" align="center" m="12px">
                <CardHeader>
                    <Image src={props.photo} objectFit={"cover"} />
                </CardHeader>
                <CardBody py={0} w="100%">
                    <VStack>
                        <Heading size='sm'>{props.name}</Heading>
                        <Heading size='sm'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(props.price)}</Heading>
                    </VStack>
                </CardBody>

                <CardFooter w="100%">
                    <Flex w="full"  alignItems="center">
                    <Button onClick={onOpen} w="1000%" mx={1}>Edit Item</Button>

                    </Flex>
                        


                </CardFooter>
            </Card>
        </>
    )
}