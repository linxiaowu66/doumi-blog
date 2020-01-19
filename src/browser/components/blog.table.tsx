// import * as React from 'react';
// import MaterialTable, { Column ***REMOVED*** from 'material-table';

interface Row {
  id: number,
  name: string;
  count: number;
***REMOVED***

// interface TableState {
//   columns: Array<Column<Row>>;
//   data: Row[];
// ***REMOVED***

interface BlogTableProps {
  title: string,
  data: Row[]
***REMOVED***

export default function BlogTable(props: BlogTableProps) {
  // const [state, setState] = React.useState<TableState>({
  //   columns: [
  //     { title: 'id', field: 'id'***REMOVED***,
  //     { title: `${props.title***REMOVED***名称`, field: 'name' ***REMOVED***,
  //     { title: '文章个数', field: 'count', type: 'numeric' ***REMOVED***,
  //   ],
  //   data: props.data,
  // ***REMOVED***

  // return (
  //   <MaterialTable
  //     title={`${props.title***REMOVED***管理`***REMOVED***
  //     columns={state.columns***REMOVED***
  //     data={state.data***REMOVED***
  //     style={{ marginBottom: 20, ***REMOVED******REMOVED***
  //     options={{
  //       search: false,
  //       paging: false
  //   ***REMOVED******REMOVED***
  //     editable={{
  //       onRowAdd: newData =>
  //         new Promise(resolve => {
  //           setTimeout(() => {
  //             resolve();
  //             setState(prevState => {
  //               const data = [...prevState.data];
  //               data.push(newData);
  //               return { ...prevState, data ***REMOVED***
  //             ***REMOVED***
  //         ***REMOVED***, 600);
  //       ***REMOVED***),
  //       onRowUpdate: (newData, oldData) =>
  //         new Promise(resolve => {
  //           setTimeout(() => {
  //             resolve();
  //             if (oldData) {
  //               setState(prevState => {
  //                 const data = [...prevState.data];
  //                 data[data.indexOf(oldData)] = newData;
  //                 return { ...prevState, data ***REMOVED***
  //               ***REMOVED***
  //           ***REMOVED***
  //         ***REMOVED***, 600);
  //       ***REMOVED***),
  //   ***REMOVED******REMOVED***
  //   />
  // );
***REMOVED***
