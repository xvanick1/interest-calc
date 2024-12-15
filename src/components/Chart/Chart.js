import styles from './Chart.module.css';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {

    return (
        <div className={styles.container}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <XAxis dataKey="order" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="initialDeposit" stackId="a" fill="#3688f4" />
                    <Bar dataKey="monthlyCompound" stackId="a" fill="#5caa5b" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;