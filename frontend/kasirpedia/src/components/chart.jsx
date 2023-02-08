import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        date: '20/01/2023',
        total: '3000'
    },
    {
        date: '21/01/2023',
        total: '35000'
    },
    {
        date: '03/02/2023',
        total: '45000'
    },
    {
        date: '05/02/2023',
        total: '38000'
    },
    {
        date: '10/02/2023',
        total: '39000'
    },
]

export default function Chart() {
    return (
        <>
            <ResponsiveContainer width='100%' height='80%'>

                <BarChart
                    width={500} height={300}
                    data={data}
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
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='total' fill='#82ca9d' />

                </BarChart>

            </ResponsiveContainer>
        </>
    );
}