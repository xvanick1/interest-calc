import styles from './Chart.module.css';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {

    return (
        <div className={styles.container}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <XAxis dataKey="order" />
                    <YAxis />
                    <Tooltip
                        cursor={ data && data.length > 0 ? undefined : false } // if data empty then disable cursor, else default
                        wrapperStyle={{ borderRadius: '6px' }}
                        contentStyle={{ backgroundColor: '#3f3f46', borderRadius: '6px', border: 'none'}}
                    />
                    <Legend />
                    <Bar dataKey="initialDeposit" stackId="a" fill="#3688f4" radius={[0, 0, 1, 1]} />
                    <Bar dataKey="monthlyCompound" stackId="a" fill="#5caa5b" radius={[3, 3, 0, 0] }/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;