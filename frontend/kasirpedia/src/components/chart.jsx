import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Text, Flex } from '@chakra-ui/react';

export default function Chart(props) {

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      const amount = payload[0]?.value ? payload[0]?.value : 0;
      const newAmount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount ? amount : 0);

      return (
        <Box className="custom-tooltip" bg='white' borderRadius='md' p='5' border='2px groove black'>
          <Text fontWeight={'bold'} className="label">{`${label}`} </Text>
          <Text fontWeight={'bold'} className="label">{`${newAmount}`} </Text>
        </Box>
      );
    }
    return null;
  };

  const totalAmount = props.data?.reduce((acc, curr) => acc + curr.total, 0);
  const newAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalAmount ? totalAmount : 0);

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
            props.data.length ?
              <Tooltip content={<CustomTooltip />} />
              : null
          }
          <Legend />
          <Bar dataKey='total' fill='#82ca9d' />

        </BarChart>


      </ResponsiveContainer>
      <Flex style={{ textAlign: 'right', marginTop: 10 }} justify='space-between' fontWeight='bold'>
          <Text >Total</Text>
          <Text >{newAmount}</Text>
      </Flex>
    </>
  );
}