import { Card, CardHeader, CardBody, CardFooter, Image, Button, VStack, Heading } from '@chakra-ui/react'


export default function ItemCard(props){
    return(
        <>
        <Card maxW="250px" align="center" m="12px">
            <CardHeader>
                <Image src={props.photo} objectFit={"cover"}/>
            </CardHeader>
            <CardBody py={0} w="100%">
                <VStack>
                    <Heading size='sm'>{props.name}</Heading>
                    <Heading size='sm'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(props.price)}</Heading>
                </VStack>
            </CardBody>
            <CardFooter w="100%">
                <Button w="100%">Edit Item</Button>
            </CardFooter>
        </Card>
        </>
    )
}