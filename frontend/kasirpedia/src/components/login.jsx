import { Flex, Box, Button } from '@chakra-ui/react';
import RegisterCashier from './registerCashier';

export default function Login() {
  return (
    <>
      <Flex>
        <Box>
          Babi ke tu
          <Button>
            <RegisterCashier />
          </Button>
        </Box>
      </Flex>
    </>
  );
}
