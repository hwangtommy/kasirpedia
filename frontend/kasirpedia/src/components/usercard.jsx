import { Button, Tr, Td } from '@chakra-ui/react';
import { useState } from 'react';
import EditProfile from './editProfile';
import { axiosInstance } from '../config/config';

export default function UserCard(props) {
  const [user, setUser] = useState({ ...props.data });
  const [status, setStatus] = useState(props.data.status);

  async function ubahStatus() {
    // alert("test")
    const res = await axiosInstance
      .patch('/auth/v4/' + user.id)
      .then((res) => {
        console.log(res);
        setStatus(!status);
      })
      .catch((error) => {});
  }

  return (
    <>
      <Tr gap={5}>
        <Td>{user.id}</Td>
        <Td>{user.username}</Td>
        <Td>{user.name}</Td>
        <Td>{user.email}</Td>
        <Td>
          <EditProfile user={user} />
        </Td>
        <Td>
          {status ? (
            <Button
              onClick={() => {
                ubahStatus();
              }}
              colorScheme="red"
              mx={2}
            >
              Disable Account
            </Button>
          ) : (
            <Button
              onClick={() => {
                ubahStatus();
              }}
              colorScheme="green"
              mx={2}
            >
              Enable Account
            </Button>
          )}
        </Td>
      </Tr>
    </>
  );
}
