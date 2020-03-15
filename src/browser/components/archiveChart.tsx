import * as React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
***REMOVED*** from 'bizcharts';
import { DouMiBlog ***REMOVED*** from '../../common/blog-protocol';

export default function ArchiveChart(props: {list: DouMiBlog.ArchiveItem[]***REMOVED***) {
  const colsForArch = {
    articlesCount: {
      alias: '文章数'
  ***REMOVED***,
    archiveTime: {
      alias: '月份'
  ***REMOVED***
  ***REMOVED***
  return (
    <React.Fragment>
      <Chart height={400***REMOVED*** data={props.list***REMOVED*** scale={colsForArch***REMOVED*** forceFit onPlotClick={ev => {
        const id = ev.data._origin.id;

        location.hash = `#/blog/list?queryArch=${id***REMOVED***`;
    ***REMOVED******REMOVED***>
        <Axis name="archiveTime" title />
        <Axis name="articlesCount" title />
        <Tooltip
          crosshairs={{
            type: 'y'
        ***REMOVED******REMOVED***
        />
        <Geom type="line" position="archiveTime*articlesCount" size={2***REMOVED*** shape={'smooth'***REMOVED*** />
        <Geom type="point" position="archiveTime*articlesCount" />
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客归档文章数</div>
    </React.Fragment>
  );
***REMOVED***
