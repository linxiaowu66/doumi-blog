import * as React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from 'bizcharts';
import { DouMiBlog } from '../../common/blog-protocol';

export default function ArchiveChart(props: {list: DouMiBlog.ArchiveItem[]}) {
  const colsForArch = {
    articlesCount: {
      alias: '文章数'
    },
    archiveTime: {
      alias: '月份'
    }
  };
  return (
    <React.Fragment>
      <Chart height={400} data={props.list} scale={colsForArch} forceFit onPlotClick={ev => {
        const id = ev.data._origin.id;

        location.hash = `#/blog/list?queryArch=${id}`;
      }}>
        <Axis name="archiveTime" title />
        <Axis name="articlesCount" title />
        <Tooltip
          crosshairs={{
            type: 'y'
          }}
        />
        <Geom type="line" position="archiveTime*articlesCount" size={2} shape={'smooth'} />
        <Geom type="point" position="archiveTime*articlesCount" />
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客归档文章数</div>
    </React.Fragment>
  );
}
