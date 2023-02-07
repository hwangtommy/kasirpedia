import './App.css';
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import Loading from './components/loading';
import Navbar from './components/navbar';
import CashierPage from './components/cashier';
import { Flex } from '@chakra-ui/react';
import "./css/cashiercard.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  }, []);
  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
      <Routes key={"route"}>
          {routes.map((val, key) => {
            return (
              <Route exact path={val.path} element={val.element} key={key} />
            );
          })}
    </Routes>
    )}
    </>
  );
}

export default App;
