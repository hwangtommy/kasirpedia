import { Flex, Button } from '@chakra-ui/react'
import UserCard from './usercard'
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/config.js";

export default function ListUsers() {
    const [user, setUser] = useState([])
    const fetchData = async () => {
      await axiosInstance.get("users").then((res) => {
        const users = res.user.result
        setUser([...users])
      })
    }
    useEffect(() => {
      fetchData()
    }, [])
    return (
        <>
        <Flex flexDir={"column"} minW={"60%"} m={"10px"}>
            <Button maxW="1080px" m={"10px"}>Add New User</Button>
            {
              user.map((val)=>{
              return <UserCard data={val}/>
              
              })
            }
        </Flex>
        </>
    )
}