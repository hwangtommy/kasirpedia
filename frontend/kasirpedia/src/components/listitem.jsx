import { Grid, Input, Select, Button, Flex, VStack, InputGroup, InputRightElement, Icon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import AdminProductCard from './adminCard';
import InfiniteScroll from 'react-infinite-scroller';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../config/config.js';
// import { products } from '../../../../backend/kasirpedia/src/models';

export default function ListItem(props) {
  const [data, setData] = useState([]);
  const [dataCat, setDataCat] = useState([]);

  const [product, setProduct] = useState({ ...props.data });
  const [dataProd, setDataProd] = useState([]);
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);

  function searchInputHandler(event) {
    const value = event.target.value;
    setSearch(value);
  }
  const fetchData = async () => {
    await axiosInstance.get('/cashier', { params: { q: search } }).then((res) => {
      setData([...res.data.result]);
    });
  };

  const fetchDataCategory = async () => {
    await axiosInstance.get('/cashier/getcategory').then((res) => {
      const datas = res.data.result;

      setDataCat([...datas]);
    });
  };

  const fetchByCategory = async () => {
    const res = await axiosInstance.post('/cashier/productsbycat/' + product.category_id).then((res) => {
      const datas = res.data.result;
      console.log(datas);
      setProduct([...datas]);
      console.log(datas);
    });
  };

  function onSelectionChange(e) {
    const sortDirection = e.target.value;
    const copyArray = [...data]; // create a new array & not mutate state

    copyArray.sort((a, b) => {
      return sortDirection === 'name-asc'
        ? a.name > b.name
          ? 1
          : -1
        : sortDirection === 'name-desc'
        ? a.name > b.name
          ? -1
          : 1
        : sortDirection === 'asc-price'
        ? a.price - b.price
        : sortDirection === 'desc-price'
        ? b.price - a.price
        : null;
    });
    setData(copyArray); //re-render
    console.log(copyArray);
  }

  // const Capek = () => {
  //   const filteredProd = data.filter((prod) => {
  //     return prod.target.value;
  //   });
  //   return filteredProd;
  // };

  useEffect(() => {
    fetchData();
    fetchDataCategory();
    fetchByCategory();
  }, []);

  return (
    <>
      <VStack>
        <Flex w="100%">
          <Input placeholder="Search items.." size="md" m={'12px'} w="50%" onChange={searchInputHandler} />
          <Select onChange={onSelectionChange} placeholder="Sort by" mx={'12px'} my={'12px'} w="25%">
            <option value={'name-asc'}>Name (Ascending)</option>
            <option value={'name-desc'}>Name (Descending)</option>
            <option value="asc-price">Price (Lowest to Highest)</option>
            <option value="desc-price">Price (Highest to Lowest)</option>
          </Select>
          <Select placeholder="All Category" mx={'12px'} my={'12px'} w="25%">
            {/* <option value="">All</option> */}
            {dataCat.map((val, idx) => {
              return (
                <option value={idx} key={idx} data={{ ...val }}>
                  {val.category}
                </option>
              );
            })}
          </Select>
        </Flex>
        <Flex w="100%">
          <Button size="md" m={'12px'} w="50%">
            Add Item
          </Button>
          <Button size="md" m={'12px'} w="50%">
            Manage Categories
          </Button>
        </Flex>
        <Grid gridTemplateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap={{ sm: '1', md: '2', lg: '3', xl: '4' }}>
          {data.map((val, idx) => {
            return <AdminProductCard key={idx} data={val} />;
          })}
        </Grid>

        <Grid gridTemplateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap={{ sm: '1', md: '2', lg: '3', xl: '4' }}>
          {dataProd.map((val, idx) => {
            return <AdminProductCard key={idx} data={val} />;
          })}
        </Grid>

        {/* <InfiniteScroll
          pageStart={0}
          loadMore={console.log('abc')}
          hasMore={false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          // Need to re-configure InfiniteScroll once backend is done.
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid gridTemplateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap={{ sm: '1', md: '2', lg: '3', xl: '4' }}>
            {data.map((val) => {
              return <AdminProductCard data={val} />;
            })}
          </Grid>
        </InfiniteScroll> */}
      </VStack>
    </>
  );
}
