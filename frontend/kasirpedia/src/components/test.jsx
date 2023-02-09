import { Flex, Box, Button } from '@chakra-ui/react';
import RegisterCashier from './registerCashier';
import CloseAlert from './closealert';

export default function Test() {
  return (
    <>
      <Flex>
        <Box>
          <Button mx={10} my={10}>
            <RegisterCashier />
          </Button>
          <CloseAlert />
        </Box>
      </Flex>
    </>
  );
}
