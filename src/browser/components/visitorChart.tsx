import * as React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  View
} from 'bizcharts';
import DataSet from '@antv/data-set';
import { DouMiBlog } from '../../common/blog-protocol';

export default function VisitorChart(props: {list: DouMiBlog.WebsiteStatsItem[]}) {
  const ds = new DataSet();
  ds.setState('type', '');
  const dv = ds.createView().source(props.list);

  dv.transform({
    type: 'fold',
    fields: ['todayUv', 'todayPv'], // 展开字段集
    key: 'type', // key字段
    value: 'value', // value字段
  })
    .transform({
      type: 'filter',
      callback: d => {
        console.log(ds.state.type);
        return d.type !== ds.state.type;
      }
    });
  const scale = {
    totalPv: {
      type: 'linear',
      alias: '博客访问量',
    },
    // 因为是个日期导致触达这个错误：“dodge is not support linear attribute”,根据网上的解决方案需要添加这个配置
    date:{
      type:'timeCat'
    },
  };
  const legendItems = [
    { value: 'todayUv', marker: { symbol: 'square', fill: '#3182bd', radius: 5 } },
    { value: 'todayPv', marker: { symbol: 'square', fill: '#54ca76', radius: 5 } },
    { value: 'totalPv', marker: { symbol: 'hyphen', stroke: '#fad248', radius: 5, lineWidth: 3 } },
  ];
  return (
    <React.Fragment>
      <Chart height={400} width={500} forceFit data={dv} scale={scale} padding="auto">
        <Legend
          custom
          // allowAllCanceled
          items={legendItems}
        />
        <Axis name="date" />
        <Axis name="value" position={'left'} />
        <Tooltip />
        <Geom
          type="interval"
          position="date*value"
          color={['type', value => {
            if (value === 'todayUv') {
              return '#3182bd';
            }
            if (value === 'todayPv') {
              return '#54ca76';
            }
            return '';
          }]}
          adjust={[{
            type: 'dodge',
            marginRatio: 1 / 32,
          }]}
        />
        <View data={props.list} >
          <Axis name="totalPv" position="right" label={{
            formatter: val => `${(+val / 10000)}万`
          }} />
          <Geom type="line" position="date*totalPv" color="#fad248" size={3} shape={'smooth'} />
          <Geom
            type="point"
            position="date*totalPv"
            size={4}
            shape={'circle'}
            color={'totalPv'}
            style={{
              stroke: '#fff',
              lineWidth: 1
            }}
          />
        </View>
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客近7天访问量</div>
    </React.Fragment>
  );
}
