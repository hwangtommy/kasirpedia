import { Flex, Button } from '@chakra-ui/react'
import UserCard from './usercard'

export default function ListUsers() {
    return (
        <>
            <Flex flexDir={"column"} maxW={"1020px"} m={"10px"} border={"1px solid grey"} borderRadius={10}>
                <Button maxW="1000px" m={"10px"}>Add New User</Button>
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
                <UserCard username="hwangtommy" />
            </Flex>
        </>
    )
}