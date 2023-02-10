import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect } from 'react';
import { axiosInstance } from "../config/config";
import { Box, Text } from '@chakra-ui/react';

export default function Chart(props) {
    // const [chartData, setChartData] = useState([]);

    // async function dailyChart() {
    //     await axiosInstance
    //         .get("/transaction/daily")
    //         .then((res) => {
    //             setChartData([...res.data.result])
    //         })
    // };

    // useEffect(() => {
    //     dailyChart()
    // }, []);

    // const data = props?.data?.map((val) => {
    //     const date = new Date(val.transaction_date);
    //     const options = {
    //         day: '2-digit',
    //         month: 'short'
    //     };
    //     const year = date.getFullYear().toString().slice(-2);
    //     const newDate = date.toLocaleDateString("en-US", options) + `'` + year;

    //     return {
    //         date: newDate,
    //         total: val.total_price
    //     }
    // });


    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          const amount = payload[0]?.value;
          const newAmount = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(amount);
      
          return (
            <Box className="custom-tooltip" bg='white' borderRadius='md' p='5' border='2px groove black'>
              <Text fontWeight={'bold'} className="label">{`${label}`} </Text>
              <Text fontWeight={'bold'} className="label">{`${newAmount}`} </Text>
            </Box>
          );
        }
        return null;
      };

    return (
        <>
            <ResponsiveContainer width='100%' height='80%'>

                <BarChart
                    width={500} height={300}
                    data={props?.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='date' />
                    <YAxis />
                    {
                        props.data.length? 
                        <Tooltip content={<CustomTooltip />}/>
                        : null
                    }
                    <Legend />
                    <Bar dataKey='total' fill='#82ca9d' />

                </BarChart>

            </ResponsiveContainer>
        </>
    );
}