import { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { each, groupBy } from '@antv/util';
import { ColumnConfig } from '@ant-design/charts';



const BarChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    interface IAnotations {
        type: string,
        position: Array<any>,
        content: string,
        style: object,
        offsetY: number
    }

    const annotations: Array<IAnotations> = [];
    each(groupBy(data, 'year'), (values, k) => {
        const value = values.reduce((a: any, b: any) => a + b.value, 0);
        annotations.push({
            type: 'text',
            position: [k, value],
            content: `${value}`,
            style: {
                textAlign: 'center',
                fontSize: 14,
                fill: 'rgba(0,0,0,0.85)',
            },
            offsetY: -10,
        });
    });
    const config: ColumnConfig = {

        data,
        isStack: true,
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle'
            // 可配置附加的布局方法
            layout: [
                // 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },
            ],
        },
        columnBackground: {
            style: {
                fill: 'rgba(0,0,0,0.1)',
            },
        },
        //@ts-ignore
        annotations,
    };

    return <Column {...config} />;
};
export default BarChart;