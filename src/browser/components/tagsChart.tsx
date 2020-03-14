import * as React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend
***REMOVED*** from 'bizcharts';
import { DouMiBlog ***REMOVED*** from '../../common/blog-protocol';

export default function TagsChart(props: {list: DouMiBlog.TagsItem[]***REMOVED***) {
  const colsForTag = {
    name: {
      alias: '标签'
  ***REMOVED***,
    articlesCount: {
      alias: '文章数'
  ***REMOVED***,
    percent: {
      alias: '占比',
      formatter: (value: string) => (+value * 100).toFixed(2) + '%'
  ***REMOVED***
  ***REMOVED***
  return (
    <React.Fragment>
      <Chart height={400***REMOVED*** data={props.list***REMOVED*** scale={colsForTag***REMOVED*** forceFit>
        <Tooltip showTitle={false***REMOVED*** />
        <Axis name="articlesCount" title />
        <Axis
          name="percent"
          title
        />
        <Legend name="name" slidable={false***REMOVED*** width={0***REMOVED*** height={0***REMOVED*** itemWidth={70***REMOVED*** />
        <Geom
          type="point"
          position="percent*articlesCount"
          color="name"
          tooltip="name*articlesCount*percent"
          opacity={0.65***REMOVED***
          shape="circle"
          size={['articlesCount', [4, 65]]***REMOVED***
          style={[
            'name',
            {
              lineWidth: 1,
              strokeOpacity: 1,
              fillOpacity: 0.3,
              opacity: 0.65,
          ***REMOVED***
          ]***REMOVED***
        />
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客标签文章数</div>
    </React.Fragment>
  );
***REMOVED***
