import { Flex, Button } from '@chakra-ui/react'
import UserCard from './usercard'

export default function ListUsers() {
    return (
        <>
        <Flex flexDir={"column"} minW={"60%"} m={"10px"}>
            <Button maxW="1080px" m={"10px"}>Add New User</Button>
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