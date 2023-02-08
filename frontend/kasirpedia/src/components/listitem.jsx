import { Grid } from "@chakra-ui/react"
import CashierProductCard from "./cashierCard"
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
            return <CashierProductCard />
             
            })
        }

          
        
        
        </Grid>
        </InfiniteScroll>
        </>
    )
}

