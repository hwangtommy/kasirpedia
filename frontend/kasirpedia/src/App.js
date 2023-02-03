import './App.css';
import Navbar from './components/navbar';
import CashierPage from './components/cashier';
import { Flex } from '@chakra-ui/react';
import "./css/cashiercard.css"

function App() {
  return (
    <>
    {/* <Flex h="100vh" flexDir={"column"}> */}
      <Navbar/>

    <CashierPage/>

    {/* </Flex> */}
    </>
  );
}

export default App;
