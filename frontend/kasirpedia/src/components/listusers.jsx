import { Flex, Button, Box, Center, TableContainer, Table, Thead, Tr, Th, Td, Tbody, Tfoot, Card, CardBody } from '@chakra-ui/react';
import UserCard from './usercard';
import RegisterCashier from './registerCashier';
import { useEffect } from 'react';
import { useState } from 'react';
import { axiosInstance } from '../config/config.js';

export default function ListUsers(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await axiosInstance.get('/auth').then((res) => {
      // console.log(res.data.result);
      const datas = res.data.result;

      setUsers([...datas]);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <Flex flexDir={'column'} minW={'60%'} m={'10px'}>
        {/* <Button maxW="1080px" m={"10px"}>Add New User</Button> */}
        <Box>
          <RegisterCashier />
        </Box>
        <>
          {/* <Navbar user={userSelector} fetch={fetchPosts} /> */}

          <Box bgColor={'#FAFAFA'} minW={821} minH={'100vh'}>
            <Center gap={10} paddingY={'14'}>
              <Flex display="inline-flex" flexDir={'column'}>
                <Card maxW="1080px" m={'10px'}>
                  <CardBody>
                    <TableContainer>
                      <Table size="lg">
                        <Thead>
                          <Tr>
                            <Th>Id</Th>
                            <Th>Username</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th></Th>
                            <Th></Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {users.map((val, idx) => {
                            return <UserCard key={idx} data={{ ...val }} />;
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </CardBody>
                </Card>
              </Flex>
            </Center>
          </Box>
        </>
      </Flex>
    </>
  );
}
