import { Grid, Input, Select, Button, Flex, VStack } from "@chakra-ui/react"
import AdminProductCard from "./adminCard"
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from "react";

export default function ListItem(){
    const [data, setData] = useState([1, 2, 3, 4, 5])
    const fetchData = () => {
      const arr = [1,1,1,1,1]
      setData([...data,...arr])
    };
    return(
        <>
        <VStack>
          <Flex w="100%">
            <Input placeholder='Search items..' size='md' m={"12px"} w="50%"/>
            <Select placeholder='Sort by' mx={"12px"} my={"12px"} w="25%">
                <option value='asc-name'>Name (Ascending)</option>
                <option value='desc-name'>Name (Descending)</option>
                <option value='asc-price'>Price (Lowest to Highest)</option>
                <option value='desc-price'>Price (Highest to Lowest)</option>
            </Select>
            <Select placeholder='Categories' mx={"12px"} my={"12px"} w="25%">
                <option value='option1'>...</option>
            </Select>
          </Flex>
          <Flex w="100%">
            <Button size='md' m={"12px"} w="50%">Add Item</Button>
            <Button size='md' m={"12px"} w="50%">Manage Categories</Button>
          </Flex>
          <InfiniteScroll
          pageStart={0}
          loadMore={fetchData}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
    
          // Need to re-configure InfiniteScroll once backend is done.
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          <Grid
          gridTemplateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
          gap={{ sm: '1', md: '2', lg: '3', xl: '4' }}
          >
            
          {
              data.map((val)=>{
              return <AdminProductCard />
              
              })
          }
          </Grid>
          </InfiniteScroll>
          </VStack>
        </>
    )
}

