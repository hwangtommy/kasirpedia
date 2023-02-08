import { Card, CardBody, Flex, Button, Box, Text } from '@chakra-ui/react'

export default function UserCard(props) {
    return (
        <>
        <Card maxW="1080px" m={"10px"}>
            <CardBody>
                <Flex justifyContent={"space-between"}>
                    <Text my="auto">{props.username}</Text>
                    <Box>
                        <Button colorScheme='blue' mx={2}>Edit Profile</Button>
                        <Button colorScheme='red' mx={2}>Disable Profile</Button>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
        </>
    )
}