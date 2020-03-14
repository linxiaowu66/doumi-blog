import * as React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  View
***REMOVED*** from 'bizcharts';
import DataSet from '@antv/data-set';
import { DouMiBlog ***REMOVED*** from '../../common/blog-protocol';

export default function VisitorChart(props: {list: DouMiBlog.WebsiteStatsItem[]***REMOVED***) {
  const ds = new DataSet();
  ds.setState('type', '');
  const dv = ds.createView().source(props.list);

  dv.transform({
    type: 'fold',
    fields: ['todayUv', 'todayPv'], // 展开字段集
    key: 'type', // key字段
    value: 'value', // value字段
***REMOVED***)
    .transform({
      type: 'filter',
      callback: d => {
        console.log(ds.state.type);
        return d.type !== ds.state.type;
    ***REMOVED***
    ***REMOVED***
  const scale = {
    totalPv: {
      type: 'linear',
      alias: '博客访问量',
  ***REMOVED***,
    // 因为是个日期导致触达这个错误：“dodge is not support linear attribute”,根据网上的解决方案需要添加这个配置
    date:{
      type:'timeCat'
  ***REMOVED***,
  ***REMOVED***
  const legendItems = [
    { value: 'todayUv', marker: { symbol: 'square', fill: '#3182bd', radius: 5 ***REMOVED*** ***REMOVED***,
    { value: 'todayPv', marker: { symbol: 'square', fill: '#54ca76', radius: 5 ***REMOVED*** ***REMOVED***,
    { value: 'totalPv', marker: { symbol: 'hyphen', stroke: '#fad248', radius: 5, lineWidth: 3 ***REMOVED*** ***REMOVED***,
  ];
  return (
    <React.Fragment>
      <Chart height={400***REMOVED*** width={500***REMOVED*** forceFit data={dv***REMOVED*** scale={scale***REMOVED*** padding="auto">
        <Legend
          custom
          // allowAllCanceled
          items={legendItems***REMOVED***
        />
        <Axis name="date" />
        <Axis name="value" position={'left'***REMOVED*** />
        <Tooltip />
        <Geom
          type="interval"
          position="date*value"
          color={['type', value => {
            if (value === 'todayUv') {
              return '#3182bd';
          ***REMOVED***
            if (value === 'todayPv') {
              return '#54ca76';
          ***REMOVED***
            return '';
        ***REMOVED***]***REMOVED***
          adjust={[{
            type: 'dodge',
            marginRatio: 1 / 32,
        ***REMOVED***]***REMOVED***
        />
        <View data={props.list***REMOVED*** >
          <Axis name="totalPv" position="right" label={{
            formatter: val => `${(+val / 10000)***REMOVED***万`
        ***REMOVED******REMOVED*** />
          <Geom type="line" position="date*totalPv" color="#fad248" size={3***REMOVED*** shape={'smooth'***REMOVED*** />
          <Geom
            type="point"
            position="date*totalPv"
            size={4***REMOVED***
            shape={'circle'***REMOVED***
            color={'totalPv'***REMOVED***
            style={{
              stroke: '#fff',
              lineWidth: 1
          ***REMOVED******REMOVED***
          />
        </View>
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客近7天访问量</div>
    </React.Fragment>
  );
***REMOVED***
