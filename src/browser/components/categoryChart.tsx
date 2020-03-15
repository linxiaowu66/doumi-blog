import * as React from 'react';
import { CatItem } from '../website.statistics.view';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend
} from 'bizcharts';

export default function CategoryChart(props: { list: CatItem[], }) {
  return (
    <React.Fragment>
      <Chart
        width={600}
        height={400}
        data={props.list}
        padding="auto"
        forceFit
        onPlotClick={ev => {
          const id = ev.data._origin.id;

          location.hash = `#/blog/list?queryCat=${id}`;
        }}
      >
        <Coord type="theta" radius={0.65} />
        <Axis name="percent" />
        <Legend position="right" offsetY={-400 / 2 + 120} offsetX={-100} />
        <Tooltip
          showTitle={false}
          itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="name"
          tooltip={[
            'name*articlesCount',
            (name, articlesCount) => {
              articlesCount = `${articlesCount}篇`;
              return {
                name: name,
                value: articlesCount,
              };
            },
          ]}
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
        />
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客标签文章数</div>
    </React.Fragment>
  );
}
