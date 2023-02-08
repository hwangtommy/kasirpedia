import { Flex, Box, Button } from '@chakra-ui/react';
import RegisterCashier from './registerCashier';

export default function Test() {
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
