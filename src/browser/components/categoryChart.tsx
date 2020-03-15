import * as React from 'react';
import { CatItem ***REMOVED*** from '../website.statistics.view';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend
***REMOVED*** from 'bizcharts';

export default function CategoryChart(props: { list: CatItem[], ***REMOVED***) {
  return (
    <React.Fragment>
      <Chart
        width={600***REMOVED***
        height={400***REMOVED***
        data={props.list***REMOVED***
        padding="auto"
        forceFit
        onPlotClick={ev => {
          const id = ev.data._origin.id;

          location.hash = `#/blog/list?queryCat=${id***REMOVED***`;
      ***REMOVED******REMOVED***
      >
        <Coord type="theta" radius={0.65***REMOVED*** />
        <Axis name="percent" />
        <Legend position="right" offsetY={-400 / 2 + 120***REMOVED*** offsetX={-100***REMOVED*** />
        <Tooltip
          showTitle={false***REMOVED***
          itemTpl='<li><span style="background-color:{color***REMOVED***" class="g2-tooltip-marker"></span>{name***REMOVED***: {value***REMOVED***</li>'
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="name"
          tooltip={[
            'name*articlesCount',
            (name, articlesCount) => {
              articlesCount = `${articlesCount***REMOVED***篇`;
              return {
                name: name,
                value: articlesCount,
              ***REMOVED***
          ***REMOVED***,
          ]***REMOVED***
          style={{
            lineWidth: 1,
            stroke: '#fff',
        ***REMOVED******REMOVED***
        />
      </Chart>
      <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bolder'***REMOVED******REMOVED***>豆米博客标签文章数</div>
    </React.Fragment>
  );
***REMOVED***
