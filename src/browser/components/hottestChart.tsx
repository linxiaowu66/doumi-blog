import * as React from 'react';
import {
  Chart,
  Geom,
  Coord,
  Label,
  Tooltip,
  G2
} from 'bizcharts';
import { DouMiBlog } from '../../common/blog-protocol';

export default function HottestChart(props: {list: DouMiBlog.ArticleStatsItem[]}) {
  let max = 0;
  props.list.forEach(function(obj) {
    if (obj.count > max) {
      max = obj.count;
    }
  });
  (G2.Shape as any).registerShape('interval', 'sliceShape', {
    draw(cfg: any, container: any) {
      const points = cfg.points;
      const origin = cfg.origin._origin;
      const percent = origin.count / max;
      const xWidth = points[2].x - points[1].x;
      const width = xWidth * percent;
      let path = [];
      path.push(['M', points[0].x, points[0].y]);
      path.push(['L', points[1].x, points[1].y]);
      path.push(['L', points[0].x + width, points[2].y]);
      path.push(['L', points[0].x + width, points[3].y]);
      path.push('Z');
      path = this.parsePath(path);
      return container.addShape('path', {
        attrs: {
          fill: cfg.color,
          path: path
        }
      });
    }
  });
  return (
    <React.Fragment>
      <Chart height={400} data={props.list} forceFit onPlotClick={ev => {
        const slug = ev.data._origin.slug;

        location.hash = `#/blog/detail/${slug}`;
      }}>
        <Coord type="theta" radius={0.8} />
        <Tooltip />
        <Geom
          type="intervalStack"
          position="count"
          color="name"
          shape="sliceShape"
        >
          <Label content="name" />
        </Geom>
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'}}>豆米博客近7天热门文章</div>
    </React.Fragment>
  );
}
