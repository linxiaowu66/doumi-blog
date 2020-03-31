import * as React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend
} from 'bizcharts';
import { DouMiBlog } from '../../common/blog-protocol';

export default function TagsChart(props: {list: DouMiBlog.TagsItem[]}) {
  const colsForTag = {
    name: {
      alias: '标签'
    },
    articlesCount: {
      alias: '文章数'
    },
    percent: {
      alias: '占比',
      formatter: (value: string) => (+value * 100).toFixed(2) + '%'
    }
  };
  return (
    <React.Fragment>
      <Chart height={400} data={props.list} scale={colsForTag} forceFit onPlotClick={ev => {
        const id = ev.data._origin.id;

        location.hash = `#/blog/list?queryTag=${id}`;
      }}>
        <Tooltip showTitle={false} />
        <Axis name="articlesCount" title />
        <Axis
          name="percent"
          title
        />
        <Legend name="name" slidable={false} width={0} height={0} itemWidth={70} />
        <Geom
          type="point"
          position="percent*articlesCount"
          color="name"
          tooltip="name*articlesCount*percent"
          opacity={0.65}
          shape="circle"
          size={['articlesCount', [4, 65]]}
          style={[
            'name',
            {
              lineWidth: 1,
              strokeOpacity: 1,
              fillOpacity: 0.3,
              opacity: 0.65,
            }
          ]}
        />
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客标签文章数</div>
    </React.Fragment>
  );
}
