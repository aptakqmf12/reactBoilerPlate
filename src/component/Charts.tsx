import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Capture from './Capture';
const data = [
    { name: '재구매수', '#시그니처_아이템 평균': 15000, 'LOW SUEDE': 9000 },
    { name: '구매전환율', '#시그니처_아이템 평균': 14000, 'LOW SUEDE': 8000 },
    { name: '해시태그 수', '#시그니처_아이템 평균': 13000, 'LOW SUEDE': 10000 },
    { name: '구매 수', '#시그니처_아이템 평균': 12000, 'LOW SUEDE': 7000 },
    { name: '클릭 수', '#시그니처_아이템 평균': 11000, 'LOW SUEDE': 10000 },
];

const Charts = () => {
    return (
        <div className='chart-box'>
            {/* vertical 차트 */}
            <BarChart width={450} height={300} data={data} layout='vertical'>
                <XAxis type='number' hide axisLine={false} />
                <YAxis dataKey={'name'} type='category' />
                <Tooltip />
                <Legend verticalAlign='top' />
                <Bar dataKey={'#시그니처_아이템 평균'} fill='#7D59FD' />
                <Bar dataKey={'LOW SUEDE'} fill='#dfdfdf' />
            </BarChart>

            {/* horizontal 차트 */}
            <BarChart
                className='barChart'
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5,
                }}
            >
                <XAxis dataKey={'name'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='#시그니처_아이템 평균' fill='#cf0000' />
                <Bar dataKey='LOW SUEDE' fill='#00b200' />
            </BarChart>
            <RadarChart className='radarChart' width={500} height={300} outerRadius={100} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey='name' />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name='a' dataKey={'#시그니처_아이템 평균'} stroke='#000' fill='#8824d7' fillOpacity={0.7} />
                <Radar name='b' dataKey={'LOW SUEDE'} stroke='#000' fill='#74ac13' fillOpacity={0.7} />
            </RadarChart>

            <Capture />
        </div>
    );
};

export default Charts;
