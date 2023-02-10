import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../config/config';
import Chart from './chart';
import moment from "moment"

export default function SalesReport() {
    const [data, setData] = useState([]);
    const [dates, setDates] = useState([moment().format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]);

    function inputHandler(event) {
        const date = [...dates]
        if (event.target.id == "datefrom") {
            date[0] = event.target.value
        }
        else {
            date[1] = event.target.value
        }
        setDates([...date])
    };

    useEffect(()=>{
        dateChart();
    },[dates])

    async function dateChart() {
        await axiosInstance
            .get("/transaction", { params: { q1: dates[0], q2: dates[1] } })
            .then((res) => {
                // setData([...res.data.result])


                const charData = res.data?.result?.map((val) => {
                    const date = new Date(val.transaction_date);
                    const options = {
                        day: '2-digit',
                        month: 'short'
                    };
                    const year = date.getFullYear().toString().slice(-2);
                    const newDate = date.toLocaleDateString("en-US", options) + `'` + year;

                    return {
                        date: newDate,
                        total: val.total_price
                    }

                })

                setData([...charData])
            })
    };

    useEffect(() => {
        dateChart()
    }, [])


    return (
        <>
            <Flex w='65%' m='0 auto'>

                <Box w='100%' h='88vh' m='0 auto' overflow={'auto'}>
                    {/* DATE */}
                    <Flex
                        justify='space-between'
                        w='100%' h='60px'
                        position={'sticky'} top='0' zIndex={'2'}
                        alignItems='center' mb='3'
                    >
                        <Flex alignItems='center'>
                            <Text fontWeight='bold' m='0 30px'>from</Text>

                            <Input id='datefrom' size='md' type='date' w={{ sm: '150px', md: '180px', lg: '220px' }}
                                variant='flushed'
                                onChange={(e) => inputHandler(e)}
                                defaultValue={dates[0]}
                            />
                            <Text fontWeight='bold' m='0 30px'>to</Text>

                            <Input id='dateto' size='md' type='date' w={{ sm: '150px', md: '180px', lg: '220px' }}
                                variant='flushed'
                                onChange={(e) => inputHandler(e)}
                                defaultValue={dates[0]}


                            />
                        </Flex>

                    </Flex>
                    {/* BAGIAN CHART */}
                    <Chart data={[...data]} />


                </Box>
            </Flex>
        </>
    );
}