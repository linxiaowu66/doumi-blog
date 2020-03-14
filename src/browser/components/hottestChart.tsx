import * as React from 'react';
import {
  Chart,
  Geom,
  Coord,
  Label,
  Tooltip,
  G2
***REMOVED*** from 'bizcharts';
import { DouMiBlog ***REMOVED*** from '../../common/blog-protocol';

export default function HottestChart(props: {list: DouMiBlog.ArticleStatsItem[]***REMOVED***) {
  let max = 0;
  props.list.forEach(function(obj) {
    if (obj.count > max) {
      max = obj.count;
  ***REMOVED***
  ***REMOVED***
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
      ***REMOVED***
      ***REMOVED***
  ***REMOVED***
  ***REMOVED***
  return (
    <React.Fragment>
      <Chart height={400***REMOVED*** data={props.list***REMOVED*** forceFit>
        <Coord type="theta" radius={0.8***REMOVED*** />
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
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客近7天热门文章</div>
    </React.Fragment>
  );
***REMOVED***
